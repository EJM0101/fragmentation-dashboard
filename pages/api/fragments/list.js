import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const dir = path.join(process.cwd(), 'public/fragments');
  if (!fs.existsSync(dir)) return res.status(200).json({ fragments: [] });

  const files = fs.readdirSync(dir).filter(file => file.endsWith('.json'));
  res.status(200).json({ fragments: files });
}