import React from "react";



function CategoryFilter({cats, onBtnClicked}) {
  function handleCatBtn(event){
    const btnElement = event.target.parentElement.children;
    for(let i=1; i<btnElement.length; i++){
      btnElement[i].className="";
    }

    let catName = event.target.textContent;

    event.target.className= "selected";

    onBtnClicked(catName);
    // console.log(event.target.textContent);
  }


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */
        // cats.forEach(cat=><button onClick={handleCatBtn}>{cat}</button>)

        cats.map((cat,index)=> <button key={index} onClick={handleCatBtn}>{cat}</button>)
      }
    </div>
  );
}

export default CategoryFilter;
