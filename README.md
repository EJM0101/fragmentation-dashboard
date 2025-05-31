# 📦 Fragmentation Dashboard

## 🧠 Objectif
Cette application pédagogique illustre la **fragmentation des données** dans les bases relationnelles. Vous pouvez téléverser un fichier `.csv` et observer trois types de fragments générés :

- 🔹 **Horizontale** : découpage ligne par ligne.
- 🔸 **Verticale** : découpage colonne par colonne.
- 🧷 **Mixte** : blocs croisés de lignes et colonnes.

## 🎯 Cas d'utilisation
La fragmentation permet :
- D'améliorer la performance et la scalabilité.
- De répartir les données entre plusieurs serveurs.
- D’adapter les requêtes à des régions géographiques.

## 💻 Fonctionnement
1. L'utilisateur téléverse un fichier `.csv`.
2. L'API analyse les colonnes et les lignes.
3. Trois types de fragments sont générés en mémoire.
4. Le frontend les affiche en tableaux interactifs.

## 🛠️ Technologies
- **Next.js**
- **React**
- **Tailwind CSS**
- **Formidable** pour upload.
- **PapaParse** pour parsing CSV.

## 🚀 Lancer le projet
```bash
npm install
npm run dev