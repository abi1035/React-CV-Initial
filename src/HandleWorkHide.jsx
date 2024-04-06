import { useState } from "react";
import App from "./App";


function HandleWorkHide(props){
    let workList=props.workArray

    function handleHide(e){
  
        let clickedId=e.target.id;
        // console.log(clickedId)
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

    return(
        <div>
        {workList.map(workHeading=>{
        return(
            <div>
            <h1 id={workHeading.work}>{workHeading.work}</h1>
            <button name={workHeading.work} id={workHeading.work} onClick={handleHide}>Hide</button>
            </div>
        )
    })}
        </div>
    
    )

}

export default HandleWorkHide