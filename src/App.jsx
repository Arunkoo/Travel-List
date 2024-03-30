import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";

import TravelList from "./components/TravelList";
import { useState } from "react";
import { initialList } from "./constant";
import Footer from "./components/Footer";

function App() {
  const [item, setitem] = useState(initialList);
  const AddItems = (i) => {
    setitem((item) => [...item, i]);
  };
  // handle delete function...
  const handleDelete = (id) => {
    // console.log(id);
    setitem((item) => item.filter((items) => items.id !== id));
    // console.log(item);
  };

  // handle updateItem;
  const handleUpdate = (id) => {
    console.log(id);
    setitem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };
  const handleClearAll = () => {
    setitem([]);
  };

  return (
    <div className="flex flex-col bg-Green-Dark">
      <Header />
      <Form onAdd={AddItems} />
      <TravelList
        items={item}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
        handleClearAll={handleClearAll}
      />
      <Footer items={item} />
    </div>
  );
}

export default App;
