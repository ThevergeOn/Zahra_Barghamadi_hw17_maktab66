import React, { useContext, useEffect, useState } from "react";
import Item from "./Item";
import { SelectedContext } from "../context/SelectedContext";

const AllItems = () => {
  const [data, setData] = useState([]);
  const { getSelectedItems } = useContext(SelectedContext);

  useEffect(() => {
    fetch("https://624cd439d71863d7a8103316.mockapi.io/items")
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
            title={item.name}
            id={item.id}
            handleCheck={() => getSelectedItems(item)}
          />
        );
      })}
    </div>
  );
};

export default AllItems;
