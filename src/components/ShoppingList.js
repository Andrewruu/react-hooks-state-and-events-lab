import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  /* const [shoppingList, setShopplingList] = useState(Item) */
  const [filter, setFilter] = useState("All")

  function handleChange(event){
    setFilter(event.target.value)
  }

  const displayItem = items.filter((item)=>{
    if(filter === "All"){
      return true
    }else{
      return item.category === filter
    }
  })

  return (
    <div className="ShoppingList" onChange={handleChange}>
      <div className="Filter">
        <select name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {displayItem.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
