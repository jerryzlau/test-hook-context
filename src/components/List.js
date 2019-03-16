import React, { useState } from "react";
import ListItem from "./ListItem";

function List(){
  const [list, setList] = useState([1]);

  const addItem = () => {
    const newList = Object.assign([], list);
    newList.push((newList[newList.length-1] === undefined ? 0 : newList[newList.length-1]) + 1);
    setList(newList);
  };

  const removeItem = (idx) => {
    const newList = Object.assign([], list)
      .filter((n, index) => index !== idx);
    setList(newList);
  }

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {list.map((item, idx) => 
        <ListItem key={idx} 
          id={idx}
          content={item} 
          removeItem={removeItem}/>)}
    </div>
  )
}

export default List;