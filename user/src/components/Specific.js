
import {  Link } from "react-router-dom";


import React , {useEffect, useState } from "react";

import axios from "axios";



const Specific = ({nam})=>{


    const [worker , setWorker] = useState({final_worker:nam});
     
    
    function PostData(){

      
        console.log(worker)
      

       
       axios.put("/donned" , worker)
        .then(function(response){
         window.alert("Doneed");
        
        }).catch((err)=>{
          console.log(err);
        })
 
        
       
        
      }



  
 
 

  return(

    <>

    
    
<b>{nam}</b>
{console.log(worker)}



      </>

      
    
    );
}
export default Specific;