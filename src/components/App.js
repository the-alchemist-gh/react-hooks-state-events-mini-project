import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });





function App() {
  const [activeCatBtn, setActiveCatBtn] = useState("All");

  const [taskItems, setTaskItems] = useState(TASKS)

  function newTask(values){
    setTaskItems([
      ...taskItems,
      values
    ])
  }

  function handleActiveBtn(value){

    setActiveCatBtn(value);


  }

  const displayCatFilterItems = taskItems.filter((item) => {
      if(activeCatBtn === "All"){
        return true;
      } else {
        return (activeCatBtn === item.category)
      }
    });

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter onBtnClicked={handleActiveBtn} cats={CATEGORIES} />
      <NewTaskForm onTaskFormSubmit={newTask} cats={CATEGORIES} />
      <TaskList  tasks={displayCatFilterItems}/>
    </div>
  );
}

export default App;
