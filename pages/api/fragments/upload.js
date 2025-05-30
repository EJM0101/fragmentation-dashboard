import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
import Papa from 'papaparse';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const form = formidable({ multiples: false });

  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ error: 'Erreur parsing fichier' });

    const file = files.file[0];
    const content = fs.readFileSync(file.filepath, 'utf8');
    const { data } = Papa.parse(content, { header: true, skipEmptyLines: true });

    if (!data || data.length === 0) {
      return res.status(400).json({ success: false, error: 'Fichier vide ou mal formaté' });
    }

    // Détection de fragmentation horizontale simulée
    const fragments = {};
    const key = Object.keys(data[0])[0]; // suppose la première colonne = clé de fragmentation

    for (let row of data) {
      const group = row[key] || 'inconnu';
      if (!fragments[group]) fragments[group] = [];
      fragments[group].push(row);
    }

    const fragmentDir = path.join(process.cwd(), 'public/fragments');
    if (!fs.existsSync(fragmentDir)) fs.mkdirSync(fragmentDir, { recursive: true });

    const saved = [];

    for (let fragmentName in fragments) {
      const filePath = path.join(fragmentDir, `fragment-${fragmentName}.json`);
      fs.writeFileSync(filePath, JSON.stringify(fragments[fragmentName], null, 2));
      saved.push(`fragment-${fragmentName}.json`);
    }

    return res.status(200).json({ success: true, fragments: saved });
  });
}