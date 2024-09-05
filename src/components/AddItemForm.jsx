import React, { useState } from 'react';

const AddItemForm = ({ onAddItem }) => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ title, url, thumbnail: '/api/placeholder/200/150' }); // Using a placeholder for thumbnail
    setTitle('');
    setUrl('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-4 border rounded-lg">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full p-2 mb-2 border rounded"
        required
      />
      <input
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="URL"
        className="w-full p-2 mb-2 border rounded"
        required
      />
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Add Item
      </button>
    </form>
  );
};

export default AddItemForm;
