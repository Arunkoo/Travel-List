import { useState } from "react";
import Item from "./Item";

const TravelList = (prop) => {
  const items = prop.items;
  const handleDelete = prop.handleDelete;
  const handleUpdate = prop.handleUpdate;
  const handleClearAll = prop.handleClearAll;
  const [sortby, setsortby] = useState("input");
  let sortitems;
  if (sortby === "input") sortitems = items;
  if (sortby === "description")
    sortitems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortby === "packed")
    sortitems = items.sort((a, b) => a.packed - b.packed);
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="mt-5">
        <select
          value={sortby}
          onChange={(e) => setsortby(e.target.value)}
          className=" p-2  rounded-md bg-gray-900 text-white font-Revolutiom tracking-wide text-base"
        >
          <option value="input">Sort by input</option>
          <option value="description">Sort by A-Z</option>
          <option value="packed">Sort by packed items</option>
        </select>
        <button
          onClick={handleClearAll}
          className=" ml-5 bg-gray-900 w-30 text-white font-Revolutiom text-base p-2 rounded-full text-center focus:outline-none focus:ring focus:ring-white tracking-wider"
        >
          ClearList
        </button>
      </div>
      <ul className=" flex flex-row flex-wrap p-10 gap-5 text-xl font-Revolutiom font-semibold text-white h-[50vh]">
        {sortitems.map((list) => (
          <Item
            key={list.id}
            itemlist={list}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        ))}
      </ul>
    </div>
  );
};

export default TravelList;
