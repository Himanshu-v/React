import React from "react";

export const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <span className="container">
      Search: {""}
      <input
        value={filterValue || ""}
        onChange={(e) => setFilter(e.target.value)}
      ></input>
    </span>
  );
};
