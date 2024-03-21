import { useState } from "react";


function Education(){
  // INPUT
    const inputArr = [
       {
              type: "text",
              value: "",
              className:"school",
              placeholder: "School",
              name:"school",
              id:1,
              key:1
            },
            {
              type: "text",
              value: "",
              placeholder:"Degree",
              className:"degree",
              name:"degree"
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
      const arrayOfColleges=[
        {
        school:"University",
        degree:"Masters",
        start:"2016",
        end:"2020",
        location:"Canada",
        }
    ]
 
      let id=1;
      let key=1;

      // To handle change
    const[college, setCollege]=useState("University")
    const[degree,setDegree]=useState("Degree")
    const[location,setLocation]=useState("Location")
    const[start,setStart]=useState("Start Year")
    const[end,setEnd]=useState("End Year")
    




    // To handle input generation
    const[arr,setArr]=useState(inputArr)

    // to display all the colleges user has entered
    const[collegeArray,setCollegeArray]=useState(arrayOfColleges)

    const addInput = () => {
        id+=id;
        key+=key;


        setArr(s => {
          return [
            ...s,
            {
              type: "text",
              value: "",
              className:"school",
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
              className:"degree",
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
      };


    function addCollege(e){
      e.preventDefault();
      console.log("I was triggered")
      const inputs = Array.from(document.querySelectorAll("input"));
      const formData = Object.fromEntries(inputs.map(input => [input.name, input.value]));
      console.log(formData)
      setCollegeArray(oldArray => [...oldArray, formData]);
      console.log(collegeArray)

    }
  


function handleHide(e){
  count+=1;
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



    return (
        <div>
        <h1>EDUCATION</h1>
        {collegeArray.map((whatCollege)=>{
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

        {collegeArray.map((collegeHeading)=>{
          return(
            <div id={collegeHeading.school}>
          <h1 id={collegeHeading.school}>{collegeHeading.school}</h1>
          <button name={collegeHeading.school} id={collegeHeading.school} onClick={handleHide}>Hide</button>
          </div>
        )})}

        <h1>{college}</h1>
        <h4>{degree}</h4>
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
      <button type="submit">Add College</button>
      </form>
      
            <button onClick={addInput} className="addEducation">+ Education</button>
            

        </div>
    )
}


export default Education