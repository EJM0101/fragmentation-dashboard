import React from 'react';
import FileUploader from '../components/FileUploader';
import FragmentViewer from '../components/FragmentViewer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* En-t��te de l'application */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-indigo-700">�9�4 Fragmentation Dashboard</h1>
          <p className="mt-2 text-gray-600 text-lg">
            Plateforme p��dagogique interactive sur la <strong>fragmentation des donn��es</strong>.
          </p>
        </header>

        {/* Section p��dagogique */}
        <section className="bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">�9�2 Concepts P��dagogiques</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Fragmentation horizontale :</strong> d��coupage des lignes d��une table selon des crit��res comme la r��gion, le pays ou le type.</li>
            <li><strong>Fragmentation verticale :</strong> d��coupage des colonnes, s��parant par exemple les donn��es personnelles et transactionnelles.</li>
            <li><strong>Fragmentation mixte :</strong> combinaison logique des deux, utilis��e pour optimiser la performance dans les entrep�0�0ts de donn��es distribu��s.</li>
          </ul>
        </section>

        {/* Fonctionnement */}
        <section className="bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">�7�5�1�5 Fonctionnement de l'application</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>�9�7 Uploadez vos fichiers CSV contenant les tables �� fragmenter.</li>
            <li>�0�8 Le syst��me identifie automatiquement une cl�� de d��coupage et g��n��re les fragments.</li>
            <li>�9�0 Les fragments sont visibles individuellement pour ��tude ou simulation de requ��tes distribu��es.</li>
            <li>�9�4 Le routage simul�� repr��sente un usage type des Edge Functions dans les syst��mes distribu��s.</li>
          </ol>
        </section>

        {/* Upload et visualisation des fragments */}
        <FileUploader onUpload={() => window.location.reload()} />
        <FragmentViewer />
      </div>
    </main>
  );
}