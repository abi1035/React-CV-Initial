import { useState } from 'react'
import Education from './Education'
import Work from './Work'

import './App.css'
import NameInput from './NameInput';
import EducationInput from './HandleHide';
import HandleHide from './HandleHide';
import HandleWorkHide from './HandleWorkHide';

function App() {
  

const[numberOfWork, setNumberOfWork]=useState(0)  
const [numberOfSchool, setNumberOfSchool]=useState(0)

  // document.getElementById("educationAddButton").style.display={hideEducationButton}
  
  window.onload = (event) => {
  document.getElementById("educationAddButton").style.display="none"
  document.getElementById("workAddButton").style.display="none"

    
  };

  

  



  let id=1;
  let key=1;

  let workDivId="work"+numberOfWork
  let schoolDivId="school"+numberOfSchool;
  // ----------------------------------------------------------NAME COMPONENT----------------------------------------------------------
  const [fName,setFName]=useState("Abishek")
  const [lName,setLName]=useState("Kenneth")
  const [email,setEmail]=useState("abishek.kenneth@gmail.com")
  const [phone,setPhone]=useState("123-456-7890")
  const [city,setCity]=useState("Wonderland, CY")


  function OnInputKey(event){
    
    let whatName=event.target.name
    // console.log(whatName);
    if (whatName==="fName"){
      setFName(event.target.value)
    }else if(whatName==="lName"){
      setLName(event.target.value);
    }else if(whatName==="phone"){
        setPhone(event.target.value)
    }else if(whatName==="email"){
        setEmail(event.target.value)
    }else if(whatName==="city"){
        setCity(event.target.value)
    }


    if(document.getElementById("emailIcon")){
        if(email==""){
          // console.log(false)
          document.getElementById("emailIcon").style.display="none"
        }else if(email!=""){
          // console.log(true);
          document.getElementById("emailIcon").style.display="inline"
        }
      }
      
      if(document.getElementById("phoneIcon")){
          if(phone==""){
              document.getElementById("phoneIcon").style.display="none"
          }else if(phone!=""){
              document.getElementById("phoneIcon").style.display="inline"
          }
      }
      
      if(document.getElementById("locationIcon")){
          if(city==""){
              document.getElementById("locationIcon").style.display="none"
          }else if(city!=""){
              document.getElementById("locationIcon").style.display="inline"
          }
      
        }
          
      }


// ========================================================== Education Component  ==========================================================
// To handle input generation
const[arr,setArr]=useState([])
  




const[college, setCollege]=useState("")
const[degree,setDegree]=useState("")
const[location,setLocation]=useState("")
const[start,setStart]=useState("")
const[end,setEnd]=useState("")
const[collegeArray,setCollegeArray]=useState([])

const addInput = () => {
  id+=id;
  key+=key;
  // console.log(numberOfSchool)
  document.getElementById("educationAddButton").style.display="inline"
  

  setArr(s => {
    return [
      ...s,
      {
        type: "text",
        value: "",
        className:schoolDivId,
        placeholder:"School",
        name:"school",
        id:id,
        key:key
      },
      {
        type: "text",
        value: "",
        placeholder:"Degree",
        name:"degree",
        key:key,
        className:schoolDivId,
      },
      {
        type: "text",
        value: "",
        className:schoolDivId,
        name:"location",
        key:key,
        placeholder:"Location",
      },
      {
        type: "number",
        className:schoolDivId,
        value: "",
        placeholder:"Start Year",
        name:"start",
        key:key,
      },
      {
        type: "number",
        className:schoolDivId,
        placeholder:"End year",
        value: "",
        name:"end",
        key:key,
      }
    ];
  });
  setNumberOfSchool(count=>{
    count=1;
    return numberOfSchool+count
  })
};


const handleChange = e => {
  e.preventDefault();

  const index = e.target.id;
  setArr(s => {
    const newArr = s.slice();
    // console.log(s);
    newArr[index].value = e.target.value;
    newArr[index].name = e.target.name;
    // console.log(e.target.name);


    // Display what to type based on input--------------------------------
    if(e.target.name=="school"){
      setCollege(e.target.value)
    }else if(e.target.name=="degree"){
      setDegree(e.target.value)
    }else if(e.target.name=="location"){
      setLocation(e.target.value)
    }else if(e.target.name=="start"){
      setStart(e.target.value)
    }else if(e.target.name=="end"){
      setEnd(e.target.value)
    }
    


    
  // setCollege(item.value)

    // console.log(newArr)
    return newArr;
  });
}


function addCollege(e){
  e.preventDefault();
  

  // TO HIDE THE INPUT FORM
  let formNumber=numberOfSchool-1
  let formToHide="school"+formNumber
  var divsToHide = document.getElementsByClassName(formToHide); //divsToHide is an array
  for(var i = 0; i < divsToHide.length; i++){
      divsToHide[i].style.display = "none"; // or
  }
  // Reset the display
  setCollege("")
  setDegree("")
  setLocation("")
  setStart("")
  setEnd("")

  console.log("I was triggered")
  document.getElementById("educationAddButton").style.display="none"
  const inputs = Array.from(document.querySelectorAll("input"));
  const formData = Object.fromEntries(inputs.map(input => [input.name, input.value, inputs.className]));
  // console.log(formData)
  setCollegeArray(oldArray => [...oldArray, formData]);
  // console.log(collegeArray)

}
 

// ============================================================ WORK COMPONENT ======================================================
const[workArr,setWorkArr]=useState([])



const[work, setWork]=useState("")
const[position,setPosition]=useState("")
const[workLocation,setWorkLocation]=useState("")
const[workStart,setWorkStart]=useState("")
const[workEnd,setWorkEnd]=useState("")
const[workArray,setWorkArray]=useState([])



function addWork(e){
  e.preventDefault();
  document.getElementById("workAddButton").style.display="none"
  console.log("I was triggered")
  const inputs = Array.from(document.querySelectorAll("input"));
  // console.log(inputs)
  const forWorkData = Object.fromEntries(inputs.map(input => [input.name, input.value]));
  // console.log(forWorkData)
  setWorkArray(oldWorkArray => [...oldWorkArray, forWorkData]);
  // console.log(workArray)

  let workFormNumber=numberOfWork-1
  let workFormToHide="work"+workFormNumber
  var workDivsToHide = document.getElementsByClassName(workFormToHide); //divsToHide is an array
  for(var i = 0; i < workDivsToHide.length; i++){
    workDivsToHide[i].style.display = "none"; // or
  }


  setWork("")
  setPosition("")
  setWorkLocation("")
  setWorkStart("")
  setWorkEnd("")

}

const handleWorkChange = e => {
  e.preventDefault();

  const index = e.target.id;

 
  setWorkArr(s => {
    const newArr = s.slice();
    // console.log(s);
    newArr[index].value = e.target.value;
    newArr[index].name = e.target.name;
    // console.log(e.target.name);


    // Display what to type based on input--------------------------------
    if(e.target.name=="work"){
      setWork(e.target.value)
    }else if(e.target.name=="position"){
      setPosition(e.target.value)
    }else if(e.target.name=="workLocation"){
      setWorkLocation(e.target.value)
    }else if(e.target.name=="workStart"){
      setWorkStart(e.target.value)
    }else if(e.target.name=="workEnd"){
      setWorkEnd(e.target.value)
    }
        
  // setCollege(item.value)

    // console.log(newArr)
    return newArr;
  });
};

const addWorkInput = () => {
  id+=id;
  key+=key;
  document.getElementById("workAddButton").style.display="inline"


  setWorkArr(s => {
    return [
      ...s,
      {
        type: "text",
        value: "",
        placeholder:"Work",
        className:workDivId,
        name:"work",
        id:id,
        key:key
      },
      {
        type: "text",
        value: "",
        placeholder:"Position",
        name:"position",
        key:key,
        className:workDivId,

      },
      {
        type: "text",
        value: "",
        className:workDivId,
        name:"workLocation",
        key:key,
        placeholder:"Location",
      },
      {
        type: "number",
        className:workDivId,
        value: "",
        placeholder:"Start Year",
        name:"workStart",
        key:key,
      },
      {
        type: "number",
        className:workDivId,
        placeholder:"End year",
        value: "",
        name:"workEnd",
        key:key,
      }
    ];
  });
  setNumberOfWork(count=>{
    count=1;
    return numberOfWork+count
  })
};

  return (
  // ----------------------------------------------------------NAME COMPONENT----------------------------------------------------------

   <div className='wholePage'>

   <div className='firstHalf'>
   <div>
   <NameInput fName={fName} lName={lName} email={email} phone={phone} city={city}/>
   <Education collegeArray={collegeArray}/>
   <Work workArray={workArray}/>
   </div>
      

  {/* // ----------------------------------------------------------Education COMPONENT---------------------------------------------------------- */}
      

      <h1>{college}</h1>
        <h4>{degree}</h4>
        <p>{start}</p>
        <p>{end}</p>
        <h5>{location}</h5>

        <h1>{work}</h1>
        <h4>{position}</h4>
        <p>{workStart}</p>
        <p>{workEnd}</p>
        <h5>{workLocation}</h5>

        </div>

        


        {/* // ----------------------------------------------------------NAME INPUT---------------------------------------------------------- */}

<div className='secondHalf'>

    <div className='nameInput'>
      <input  onChange={OnInputKey} value={fName} name="fName" placeholder="First Name"></input>
      <input onChange={OnInputKey} value={lName} name="lName" placeholder="Last Name"></input>
      <input onChange={OnInputKey} value={email} name="email" placeholder="email" autoComplete="none"></input>
      <input onChange={OnInputKey} value={phone} name="phone" placeholder="phone"></input>
      <input onChange={OnInputKey} value={city} name="city" placeholder="city"></input>
      </div>




{/* ======================= COLLEGE INPUT====================================================== */}
            <form onSubmit={addCollege}>
            
            {arr.map((item, i) => {
              {/* console.log(item.school) */}
              
        return (
          <input
            onChange={handleChange}
            value={item.value}
            key={item.key}
            placeholder={item.placeholder}
            id={i}
            type={item.type}
            size="40"
            name={item.name}
            className={item.className}
          />
            
        );
      })}
      <button type="submit" id='educationAddButton'>Add College</button>
      </form>


      {/* ============================================================ WORK INPUT ============================================ */}
      <form onSubmit={addWork}>
            {workArr.map((item, i) => {
        return (
          
          <input
            onChange={handleWorkChange}
            value={item.value}
            key={item.key}
            placeholder={item.placeholder}
            id={i}
            type={item.type}
            size="40"
            name={item.name}
            className={item.className}
          />
            
        );
      })}
      <button id='workAddButton' type="submit">Add Work</button>
      </form>
      
{/* ================================ HANDLE HIDE =============================================== */}
<HandleHide collegeArray={collegeArray} />
<HandleWorkHide workArray={workArray}/>

      <button onClick={addInput}  className="addEducation">+ Education</button>


    
{/* ==========================================WORK INPUT================================================== */}

      <button onClick={addWorkInput} className="addEducation">+ Work</button>
      </div>
   </div>
  )
}

export default App
