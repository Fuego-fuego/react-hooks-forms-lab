import React, {useState}from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [formData, setFormData ] = useState({
    name: '',
    category:'Produce'
  });

  const newItem = {
    id: uuid(), // the `uuid` library can be used to generate a unique id
    name: formData.name,
    category: formData.category,
  };

  function handleChange (e){

      const value = e.target.value;
      const name = e.target.name;

      setFormData(
        {...formData , 
        [name]:value}
      )
  }
  return (
    <form className="NewItem" onSubmit={() => {onItemFormSubmit(newItem)}}>
      <label>
        Name:
        <input type="text" name="name" value ={formData.name} onChange={handleChange}/>
      </label>

      <label>
        Category:
        <select name="category" value = {formData.category} onChange={handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
