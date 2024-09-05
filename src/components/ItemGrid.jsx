import React from 'react';

const ItemGrid = ({ items }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {items.map((item) => (
        <div key={item.id} className="border rounded-lg overflow-hidden shadow-sm">
          <img src={item.thumbnail} alt={item.title} className="w-full h-40 object-cover" />
          <div className="p-2">
            <h3 className="text-sm font-medium truncate">{item.title}</h3>
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-500 hover:underline">
              View Original
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemGrid;
