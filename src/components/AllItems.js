import React, { useContext, useEffect, useState } from "react";
import Item from "./Item";
import { SelectedContext } from "../context/SelectedContext";

const AllItems = () => {
  const [data, setData] = useState([]);
  const { getSelectedItems } = useContext(SelectedContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="all">
      <h2>All Items</h2>
      {data.map((item) => {
        return (
          <Item
            isSelectable={true}
            title={item.title}
            id={item.id}
            handleCheck={() => getSelectedItems(item)}
          />
        );
      })}
    </div>
  );
};

export default AllItems;
