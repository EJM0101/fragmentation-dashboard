import React, { useEffect, useState } from 'react';

export default function FragmentViewer() {
  const [fragments, setFragments] = useState([]);

  useEffect(() => {
    fetch('/api/fragments/list')
      .then(res => res.json())
      .then(json => setFragments(json.fragments));
  }, []);

  return (
    <div className="bg-white p-4 shadow rounded">
      <h2 className="text-lg font-semibold mb-4">📄 Fragments générés</h2>
      {fragments.length === 0 ? (
        <p className="text-gray-500">Aucun fragment encore disponible.</p>
      ) : (
        <ul className="list-disc pl-6 space-y-1 text-blue-600">
          {fragments.map((frag, i) => (
            <li key={i}>
              <a href={`/fragments/${frag}`} target="_blank" rel="noopener noreferrer">
                {frag}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}