
import {  Link } from "react-router-dom";


import React , {useEffect, useState } from "react";

import axios from "axios";
import Specific from "../components/Specific";


function Work_final(){


    const [worker , setWorker] = useState({final_worker:""});

    const [user , setUser] = useState({
        final_worker : ""  , data:[]
        });
     
        
     
        let name,value ;
        /*
      const handleInputs = (e) => {
        console.log(e.target.getAttribute("aaa"));

        name="final_worker";
        value=e.target.getAttribute("aaa");
      
        setWorker({"final_worker":value})
        setTimeout(1000)

      
        PostData()
        
      }
      
      

      function PostData(){

      
        console.log(worker)
      

     
       axios.put("/donned" , worker)
        .then(function(response){
         window.alert("Doneed");
        
        }).catch((err)=>{
          console.log(err);
        })
 
    
       
    
      }

  */
           
     function Loaddata(){
        axios.get("/get_all_req_worker" , user)

        .then((res)=>{
            console.log(res);
            setUser({data : res.data.request_worker})
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        Loaddata();
    } , []);


  
 
 

  return(

    <>

    
    

{user.data.map((post , pos)=>(

<div class="row">
<div class="col-sm-6">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{post}</h5>
     
        <Specific nam ={post}/>
        <button type="button" aaa = {post} class="user btn btn-primary btn-lg"  >View Details</button>
      
        
    </div>
  </div>
</div>

</div>



)
)}




      </>

      
    
    );
}
export default Work_final;