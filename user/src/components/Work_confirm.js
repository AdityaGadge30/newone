import React , {useState} from "react";
import {  Link } from "react-router-dom";


import axios from "axios";



function Work_confirm(){



    const [user , setUser] = useState({
        req_worker : "" 
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
        
        console.log(user);
       axios.put("/req_work_confirm" , user)
        .then(function(response){
         window.alert("Done");
        
        }).catch((err)=>{
          console.log(err);
        })
 
        
       
        
      }

  
 
 

  return(

    <>

<form method="post" onSubmit={(e)=>PostData(e)}>
        <div className="name-div">		
            <input type="text" className="name" onChange={handleInputs} placeholder="Enter your Name " required={true} name="req_worker" />
        </div>

        <div className="submit-div">
            <input  type="submit" className="btn btn-primary" id="Aditya"/>
        
            
        </div>
    </form>



      </>

      
    
    );
}
export default Work_confirm;