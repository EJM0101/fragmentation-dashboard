import React from 'react';
import FileUploader from '../components/FileUploader';
import FragmentViewer from '../components/FragmentViewer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* En-tête de l'application */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-indigo-700">📦 Fragmentation Dashboard</h1>
          <p className="mt-2 text-gray-600 text-lg">
            Plateforme pédagogique interactive sur la <strong>fragmentation des données</strong>.
          </p>
        </header>

        {/* Section pédagogique */}
        <section className="bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">📚 Concepts Pédagogiques</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Fragmentation horizontale :</strong> découpage des lignes d’une table selon des critères comme la région, le pays ou le type.</li>
            <li><strong>Fragmentation verticale :</strong> découpage des colonnes, séparant par exemple les données personnelles et transactionnelles.</li>
            <li><strong>Fragmentation mixte :</strong> combinaison logique des deux, utilisée pour optimiser la performance dans les entrepôts de données distribués.</li>
          </ul>
        </section>

        {/* Fonctionnement */}
        <section className="bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">⚙️ Fonctionnement de l'application</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>📁 Uploadez vos fichiers CSV contenant les tables à fragmenter.</li>
            <li>🧠 Le système identifie automatiquement une clé de découpage et génère les fragments.</li>
            <li>📄 Les fragments sont visibles individuellement pour étude ou simulation de requêtes distribuées.</li>
            <li>🌐 Le routage simulé représente un usage type des Edge Functions dans les systèmes distribués.</li>
          </ol>
        </section>

        {/* Upload et visualisation des fragments */}
        <FileUploader onUpload={() => window.location.reload()} />
        <FragmentViewer />
      </div>
    </main>
  );
}