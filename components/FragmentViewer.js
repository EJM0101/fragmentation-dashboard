import React from 'react';

const FragmentViewer = ({ fragments }) => {
  if (!fragments || Object.keys(fragments).length === 0) return null;

  const labels = {
    horizontal: '🔹 Fragmentation Horizontale',
    vertical: '🔸 Fragmentation Verticale',
    mixte: '🧷 Fragmentation Mixte',
  };

  return (
    <div>
      {Object.entries(fragments).map(([type, fragmentGroup]) => (
        <div key={type} className="mb-8">
          <h3 className="text-xl font-semibold text-indigo-600 mb-2">{labels[type]}</h3>

          {fragmentGroup.map((fragment, index) => (
            <div key={index} className="overflow-x-auto mb-4">
              <table className="min-w-full border bg-white rounded shadow text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    {Object.keys(fragment[0] || {}).map((col, i) => (
                      <th key={i} className="px-3 py-2 text-left font-semibold">{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {fragment.map((row, rIdx) => (
                    <tr key={rIdx} className="border-t">
                      {Object.values(row).map((val, cIdx) => (
                        <td key={cIdx} className="px-3 py-2">{val}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FragmentViewer;