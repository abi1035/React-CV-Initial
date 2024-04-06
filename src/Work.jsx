import { useState } from "react";
import App from "./App";


function Work(props){
  // INPUT
console.log(props.workArray)
  


function handleHide(e){
  
  let clickedId=e.target.id;
  let buttonText=document.getElementsByName(e.target.id)[0].innerHTML
  console.log(buttonText)
  
  // Hides and displays content
  let contentDisplay=document.getElementById(clickedId).style.display;
  if(contentDisplay==""||contentDisplay=="block"){
  document.getElementById(clickedId).style.display="none"
  }else if(contentDisplay=="none"){
  document.getElementById(clickedId).style.display="block"
  }


  // Toggles hide and unhide
  if(document.getElementsByName(e.target.id)[0].innerHTML=="Hide"){
    document.getElementsByName(e.target.id)[0].innerHTML="Unhide"
  }else if(buttonText=="Unhide"){
    document.getElementsByName(e.target.id)[0].innerHTML="Hide"

  }
}



    return (
        <div>
        <h1>WORK</h1>
        {props.workArray.map((whatWork)=>{
          return(
            <div id={whatWork.work}>
              <h1>{whatWork.work}</h1>
              <h4>{whatWork.position}</h4>
              <p>{whatWork.workStart}</p>
              <p>{whatWork.workEnd}</p>
              <h5>{whatWork.workLocation}</h5>

            </div>
          )
        })}


        </div>
    )
}


export default Work