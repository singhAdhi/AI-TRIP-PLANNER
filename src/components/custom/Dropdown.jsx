import React from "react";
const Dropdown = React.memo(({ data = [], handleOption }) => {
  return (
    <div className="shadow-lg border ">
      {data.map((item, index) => (
        <div
          className="border-b p-2 cursor-pointer"
          key={index}
          onClick={() => handleOption(item)}
        >
          {item?.destination || "No destination"}
        </div>
      ))}
    </div>
  );
});

export default Dropdown;
