import { useState } from "react";
import PropTypes from 'prop-types';
import PhoneIcon from '@mui/icons-material/Phone';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';


function NameInput(props){
    // console.log(props)
    return (
        <div className="introductions">
            <h1>{props.fName} {props.lName}</h1>
             <p> <EmailIcon fontSize="small" id="emailIcon"/> {props.email} </p> <p><PhoneIcon fontSize="small" id="phoneIcon"/> {props.phone}</p> <p> <LocationOnIcon fontSize="small" id="locationIcon"/>{props.city}</p>
        </div>
    )
}


export default NameInput