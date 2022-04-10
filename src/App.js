import AllItems from "./components/AllItems";
import { useEffect, useState } from "react";
import { SelectedContext } from "./context/SelectedContext";
import SelectedItems from "./components/SelectedItems";

function App() {
  const [selectedItems, setSelectedItems] = useState([]);

  const getSelectedItems = (item) => {
    setSelectedItems((prevState) => {
      if (prevState.includes(item)) {
        return prevState.filter((obj) => obj !== item);
      } else {
        return [...prevState, item];
      }
    });
  };

  return (
    <div className="container  App-header">
      <SelectedContext.Provider
        value={{
          selectedItems: selectedItems,
          getSelectedItems: getSelectedItems,
        }}
      >
        <AllItems />
        <SelectedItems />
      </SelectedContext.Provider>
    </div>
  );
}

export default App;
