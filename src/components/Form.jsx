import { useState } from "react";

const Form = (prop) => {
  const onAdd = prop.onAdd;
  // states for controlle element...
  const [description, setdescription] = useState("");
  const [quantity, setquantity] = useState(1);

  // function for addding a new item...

  // function for handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return;
    const newItems = { description, quantity, packed: false, id: Date.now() };
    console.log(newItems);
    onAdd(newItems);
    setdescription("");
    setquantity(1);
  };
  return (
    <form
      className="flex justify-center items-center bg-Green-medium p-3"
      onSubmit={handleSubmit}
    >
      <h1 className="  text-2xl font-Revolutiom  ">
        What do you need for your trip?
      </h1>
      <select
        value={quantity}
        onChange={(e) => setquantity(Number(e.target.value))}
        className=" ml-3 h-9 w-11 rounded-md bg-gray-900 text-white font-Revolutiom text-base"
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="items..."
        value={description}
        onChange={(e) => setdescription(e.target.value)}
        className="ml-3 h-9 w-[300px] rounded-md bg-gray-900 text-white font-Revolutiom text-base p-3"
      />
      <button className=" ml-5 bg-gray-900 w-20 text-white font-Revolutiom text-base p-2 rounded-full text-center focus:outline-none focus:ring focus:ring-white">
        Add
      </button>
    </form>
  );
};

export default Form;
