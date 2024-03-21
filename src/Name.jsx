import {useState} from "react";
// import InputAdornment from '@mui/material/InputAdornment';
import PhoneIcon from '@mui/icons-material/Phone';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';




function Name(){
    

const [fName,setFName]=useState("Abishek")
  const [lName,setLName]=useState("Kenneth")
  const [email,setEmail]=useState("abishek.kenneth@gmail.com")
  const [phone,setPhone]=useState("123-456-7890")
  const [city,setCity]=useState("Wonderland, CY")
//   const [checkEmail,setCheckEmail]=useState("")



  function onInputKey(event){

    
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



  return(
    
    <div>
        <div className="introductions">
            <h1>{fName} {lName}</h1>
             <p> <EmailIcon fontSize="small" id="emailIcon"/> {email} </p> <p><PhoneIcon fontSize="small" id="phoneIcon"/> {phone}</p> <p> <LocationOnIcon fontSize="small" id="locationIcon"/>{city}</p>
        </div>
        
        <input  onChange={onInputKey} value={fName} name="fName" placeholder="First Name"></input>
        <input onChange={onInputKey} value={lName} name="lName" placeholder="Last Name"></input>
        <input onChange={onInputKey} value={email} name="email" placeholder="email" autoComplete="none"></input>
        
        <input onChange={onInputKey} value={phone} name="phone" placeholder="phone"></input>
        
        <input onChange={onInputKey} value={city} name="city" placeholder="city"></input>

        
    </div>
  )

}

export default Name;