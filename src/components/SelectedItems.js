import React, { useContext } from "react";
import Item from "./Item";
import { SelectedContext } from "../context/SelectedContext";

const SelectedItems = () => {
  const { selectedItems } = useContext(SelectedContext);

  return (
    <div className="selected">
      <h2>Selected Items</h2>
      {selectedItems.map((item) => {
        return <Item isSelectable={false} title={item.title} id={+item.id} />;
      })}
    </div>
  );
};

export default SelectedItems;
