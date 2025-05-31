import React from 'react';

export default function DataUploader({ setFragments }) {
  const handleChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch('/api/data', {
      method: 'POST',
      body: formData,
    });

    const json = await res.json();
    setFragments(json.fragments || {});
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-6">
      <h2 className="text-lg font-semibold mb-2">📁 Téléversement de Fichier CSV</h2>
      <input
        type="file"
        accept=".csv"
        onChange={handleChange}
        className="block w-full border border-gray-300 rounded px-4 py-2 text-sm"
      />
    </div>
  );
}