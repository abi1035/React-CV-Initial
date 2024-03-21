import { useState } from "react";


function Work(){
  // INPUT
    const inputArr = [
       {
              type: "text",
              value: "",
              className:"work",
              placeholder: "work",
              name:"work",
              id:1,
              key:1
            },
            {
              type: "text",
              value: "",
              placeholder:"Position",
              className:"position",
              name:"position"
            },
            {
              type: "text",
              value: "",
              className:"location",
              placeholder:"Location",
              name:"location"
            },
            {
              type: "number",
              className:"startyear",
              value: "",
              placeholder:"Start Year",
              name:"start"
              // key:1
            },
            {
              type: "number",
              className:"endyear",
              placeholder:"End year",
              value: "",
              name:"end"
              // key:1
            }
      ];


      // For displaying array of college once sent
      const arrayOfWork=[
        {
        work:"Toppan",
        position:"Document",
        start:"2016",
        end:"2020",
        location:"Chennai",
        }
    ]
 
      let id=1;
      let key=1;

      // To handle change
    const[work, setWork]=useState("Workplace")
    const[position,setPosition]=useState("Position")
    const[location,setLocation]=useState("Location")
    const[start,setStart]=useState("Start Year")
    const[end,setEnd]=useState("End Year")
    




    // To handle input generation
    const[arr,setArr]=useState(inputArr)

    // to display all the colleges user has entered
    const[workArray,setWorkArray]=useState(arrayOfWork)

    const addInput = () => {
        id+=id;
        key+=key;


        setArr(s => {
          return [
            ...s,
            {
              type: "text",
              value: "",
              className:"work",
              placeholder:"Work",
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
              className:"position",
            },
            {
              type: "text",
              value: "",
              className:"location",
              name:"location",
              key:key,
              placeholder:"Location",
            },
            {
              type: "number",
              className:"startyear",
              value: "",
              placeholder:"Start Year",
              name:"start",
              key:key,
            },
            {
              type: "number",
              className:"endyear",
              placeholder:"End year",
              value: "",
              name:"end",
              key:key,
            }
          ];
        });
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
          if(e.target.name=="work"){
            setWork(e.target.value)
          }else if(e.target.name=="position"){
            setPosition(e.target.value)
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
      };


    function addCollege(e){
      e.preventDefault();
      console.log("I was triggered")
      const inputs = Array.from(document.querySelectorAll("input"));
      const formData = Object.fromEntries(inputs.map(input => [input.name, input.value]));
      console.log(formData)
      setWorkArray(oldArray => [...oldArray, formData]);
      console.log(workArray)

    }
  


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
        {workArray.map((whatWork)=>{
          return(
            <div id={whatWork.work}>
              <h1>{whatWork.work}</h1>
              <h4>{whatWork.position}</h4>
              <p>{whatWork.start}</p>
              <p>{whatWork.end}</p>
              <h5>{whatWork.location}</h5>

            </div>
          )
        })}

        {workArray.map((workHeading)=>{
          return(
            <div id={workHeading.work}>
          <h1 id={workHeading.work}>{workHeading.work}</h1>
          <button name={workHeading.work} id={workHeading.work} onClick={handleHide}>Hide</button>
          </div>
        )})}

        <h1>{work}</h1>
        <h4>{position}</h4>
        <p>{start}</p>
        <p>{end}</p>
        <h5>{location}</h5>

        <form onSubmit={addCollege}>
            {arr.map((item, i) => {
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
          />
            
        );
      })}
      <button type="submit">Add Work</button>
      </form>
      
            <button onClick={addInput} className="addEducation">+ Work</button>
            

        </div>
    )
}


export default Work