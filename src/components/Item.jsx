const Item = (prop) => {
  const itemlist = prop.itemlist;
  const handleDelete = prop.handleDelete;
  const handleUpdate = prop.handleUpdate;

  return (
    <li>
      <input
        type="checkbox"
        className="mr-3"
        value={itemlist.packed}
        onChange={() => handleUpdate(itemlist.id)}
      />
      <span className={itemlist.packed ? " line-through decoration-black" : {}}>
        {itemlist.quantity} {itemlist.description}
      </span>

      <button className=" ml-3" onClick={() => handleDelete(itemlist.id)}>
        ❌
      </button>
    </li>
  );
};

export default Item;
