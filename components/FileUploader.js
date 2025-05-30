import React from 'react';

export default function FileUploader({ onUpload }) {
  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch('/api/fragments/upload', {
      method: 'POST',
      body: formData,
    });

    const json = await res.json();
    if (json.success) {
      alert('✅ Fichier fragmenté avec succès');
      onUpload(json.fragments);
    } else {
      alert('❌ Erreur lors du traitement du fichier');
    }
  };

  return (
    <div className="bg-white p-4 shadow rounded">
      <h2 className="text-lg font-semibold mb-2">📥 Téléversez votre table CSV</h2>
      <input
        type="file"
        accept=".csv"
        onChange={handleUpload}
        className="border p-2 rounded w-full"
      />
    </div>
  );
}