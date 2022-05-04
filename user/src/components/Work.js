
import {  Link , useHistory } from "react-router-dom";

import React , {useEffect, useState } from "react";

import axios from "axios";



function Work() {



  
    const [user , setUser] = useState({
       name : "" , work:"" , location:"" , time:"",
     
       });
    
       
    
       let name,value ;
       
     const handleInputs = (e) => {
       console.log(e);
       name=e.target.name;
       value=e.target.value;
     
       setUser({ ...user , [name]:value});
     }
     
     
     
     function PostData(e){
       e.preventDefault();
       
       
      axios.post("/register" , user)
       .then(function(response){
        window.alert("Done");
       
       }).catch((err)=>{
         console.log(err);
       })

       
      
       
     }


  return (


     <>

       
<div class="content">
  
  

  <form method="post" onSubmit={(e)=>PostData(e)}>
        <div className="name-div">		
            <input type="text" className="name" onChange={handleInputs} placeholder="Enter your Name " required={true} name="name" />
        </div>

        <div className="work-div">		
            <input type="text" className="work" onChange={handleInputs} placeholder="Enter your required work " required={true} name="work" />
        </div>

        <div className="time-div">		
            <input type="Date" className="time" onChange={handleInputs} required={true} name="time" />
        </div>

        <div className="location-div">		
            <input type="text" className="loc" onChange={handleInputs} placeholder="Location of work" required={true} name="location" />
        </div>

        <div className="submit-div">
            <input  type="submit" className="btn btn-primary" id="Aditya"/>
        
            
        </div>
    </form>

</div>




                   



</>
  );
}

export default Work;
