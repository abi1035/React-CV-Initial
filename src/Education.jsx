import { useState } from "react";
import EducationInput from "./HandleHide";
import App from "./App";


function Education(props){
  console.log(props)

  

    




    

    
  

    // function handleHide(e){
  
    //   let clickedId=e.target.id;
    //   // console.log(clickedId)
    //   let buttonText=document.getElementsByName(e.target.id)[0].innerHTML
    //   console.log(buttonText)
      
    //   // Hides and displays content
    //   let contentDisplay=document.getElementById(clickedId).style.display;
    //   if(contentDisplay==""||contentDisplay=="block"){
    //   document.getElementById(clickedId).style.display="none"
    //   }else if(contentDisplay=="none"){
    //   document.getElementById(clickedId).style.display="block"
    //   }
    
    
    //   // Toggles hide and unhide
    //   if(document.getElementsByName(e.target.id)[0].innerHTML=="Hide"){
    //     document.getElementsByName(e.target.id)[0].innerHTML="Unhide"
    //   }else if(buttonText=="Unhide"){
    //     document.getElementsByName(e.target.id)[0].innerHTML="Hide"
    
    //   }
    // }




    return (
        <div>
        <h1>EDUCATION</h1>
        {props.collegeArray.map((whatCollege)=>{
          return(
            <div id={whatCollege.school}>
              <h1>{whatCollege.school}</h1>
              <h4>{whatCollege.degree}</h4>
              <p>{whatCollege.start}</p>
              <p>{whatCollege.end}</p>
              <h5>{whatCollege.location}</h5>

            </div>
          )
        })}

        {/* {collegeArray.map((collegeHeading)=>{
          return(
            <div id={collegeHeading.school}>
          <h1 id={collegeHeading.school}>{collegeHeading.school}</h1>
          <button name={collegeHeading.school} id={collegeHeading.school} onClick={handleHide}>Hide</button>
          </div>
        )})}             */}

        </div>
    )
}


export default Education