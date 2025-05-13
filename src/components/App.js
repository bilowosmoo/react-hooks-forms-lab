import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import ItemList from "./ItemList";
import { v4 as uuid } from "uuid";

function App() {
  const [items, setItems] = useState([
    { id: uuid(), name: "Apples", category: "Produce" },
    { id: uuid(), name: "Milk", category: "Dairy" },
    { id: uuid(), name: "Bread", category: "Bakery" },
  ]);
  const [search, setSearch] = useState("");

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  function handleSearchChange(newSearch) {
    setSearch(newSearch);
  }

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <ItemForm onItemFormSubmit={handleAddItem} />
      <Filter search={search} onSearchChange={handleSearchChange} />
      <ItemList items={filteredItems} />
    </div>
  );
}

export default App;