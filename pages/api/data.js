import formidable from 'formidable';
import fs from 'fs';
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

    try {
      const file = files.file[0];
      const content = fs.readFileSync(file.filepath, 'utf8');
      const { data } = Papa.parse(content, {
        header: true,
        skipEmptyLines: true,
      });

      const cleanData = data.filter(row => Object.values(row).some(v => v !== ''));

      const horizontal = cleanData.map(row => [row]);

      const vertical = Object.keys(cleanData[0] || {}).map(col =>
        cleanData.map(row => ({ [col]: row[col] }))
      );

      const mixte = [];
      for (let i = 0; i < cleanData.length; i += 5) {
        mixte.push(cleanData.slice(i, i + 5));
      }

      return res.status(200).json({
        fragments: { horizontal, vertical, mixte },
      });
    } catch (e) {
      return res.status(500).json({ error: 'Erreur de traitement du fichier' });
    }
  });
}