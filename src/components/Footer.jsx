const Footer = (prop) => {
  const items = prop.items;
  if (!items.length) {
    return (
      <p className=" bg-black text-white text-xl p-5 font-Revolutiom  tracking-wider flex justify-center flex-col items-center">
        Start adding items to your bag ✅
      </p>
    );
  }
  const num = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = num > 0 ? Math.floor((numPacked / num) * 100) : 0;
  const totalPer = 100;
  const leftper = totalPer - percentage;

  return (
    <div className=" bg-black text-white text-xl p-5 font-Revolutiom  tracking-wider flex justify-center flex-col items-center">
      <h1>
        you have{" "}
        <span className="text-2xl text-yellow-400 font-Rampart font-semibold">
          {num}
        </span>{" "}
        item in your list. You have packed{" "}
        <span className="text-2xl text-yellow-400 font-Rampart font-semibold">
          {numPacked}
        </span>{" "}
        item space left in bag is{" "}
        <span className="text-2xl text-yellow-400 font-Rampart font-semibold">
          {leftper}
          {"%"}
        </span>
        .
      </h1>
      <p className="text-base mt-3 text-slate-400 ">
        copyright @ArunKumar 2024
      </p>
    </div>
  );
};

export default Footer;
