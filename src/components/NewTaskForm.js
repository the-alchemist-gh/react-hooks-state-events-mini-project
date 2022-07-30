import React, {useState} from "react";

function NewTaskForm({cats, onTaskFormSubmit}) {
  const [formData, setFormData] = useState({
    text: "",
    category: "Code"
  })

  function onInputChange(event){
    let name = event.target.name;
    let value = event.target.value;

    setFormData({
      ...formData,
      [name]: value
    })
  }


  function handleSubmit(event){
    event.preventDefault();
    if(formData.text !== ""){
      onTaskFormSubmit({...formData});

    } else{
      alert('enter details')
    }
    

  }

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input onChange={onInputChange} type="text" name="text" />
      </label>
      <label>
        Category
        <select onChange={onInputChange} name="category">
          {/* render <option> elements for each category here */
            cats.map((cat,index)=>cat==="All"? null : <option key={index} value={cat} >{cat}</option>)
          }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
