import React, { useState } from 'react';
import ItemGrid from './ItemGrid';
import AddItemForm from './AddItemForm';

const App = () => {
  const [items, setItems] = useState([]);

  const handleAddItem = (newItem) => {
    setItems([...items, { ...newItem, id: Date.now() }]);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-4">My Saved Items</h1>
      <AddItemForm onAddItem={handleAddItem} />
      <ItemGrid items={items} />
    </div>
  );
};

export default App;
