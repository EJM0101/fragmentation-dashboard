import React, { useState } from 'react';
import DataUploader from '../components/DataUploader';
import FragmentViewer from '../components/FragmentViewer';

export default function Home() {
  const [fragments, setFragments] = useState({});

  return (
    <div className="min-h-screen bg-gray-50 p-6 text-gray-800">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-4">
        📦 Fragmentation Dashboard
      </h1>

      <p className="text-center max-w-2xl mx-auto text-gray-600 mb-6">
        Cette application pédagogique vous permet de découvrir la fragmentation des données relationnelles sous trois formes : <strong>horizontale</strong>, <strong>verticale</strong> et <strong>mixte</strong>.
        Elle s’appuie sur un téléversement de fichier CSV métier que vous fournissez.
      </p>

      <div className="max-w-4xl mx-auto">
        <DataUploader setFragments={setFragments} />
        <FragmentViewer fragments={fragments} />
      </div>
    </div>
  );
}