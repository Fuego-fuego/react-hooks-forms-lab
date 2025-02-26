import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  function handleCategoryChange(event) {

    setSelectedCategory(event.target.value);
  }

  console.log( search )
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" && search === ''){ 
      
      return true;
    }else if (search !== ''){
      
      return item.name.includes(search);
    }

    return item.category === selectedCategory;
  });
  
// onSearch 
function handleSearch(e){
  setSearch(e.target.value);
  console.log(search);
}
  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter onCategoryChange={handleCategoryChange} search = {search} onSearchChange = {handleSearch}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
