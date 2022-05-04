
import {  Link , useHistory } from "react-router-dom";

import React , {useEffect, useState } from "react";

import axios from "axios";

import 'bootstrap/dist/css/bootstrap.min.css';

function Total_work() {



  
    const [user , setUser] = useState({
       name : "" , work:"" , location:"" , time:"",data:[]
     
       });
    
       
    
       let name,value ;
       
     const handleInputs = (e) => {
       console.log(e);
       name=e.target.name;
       value=e.target.value;
     
       setUser({ ...user , [name]:value});
     }
     
     
        
            
     function Loaddata(){
        axios.get("/getwork")

        .then((res)=>{
            console.log(res);
            setUser({data : res.data.users});

        })
        .catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        Loaddata();
    } , []);



  return (


     <>

{user.data.map((post , pos)=>(

      <div class="row">
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{post.Work}</h5>
            <p class="card-text">{post.Location}</p>
            <b className="card-text">{post.owner}</b><br/>

            
    <Link to={"/part_req"}>
        <button type="button" class="user btn btn-primary btn-lg">Go</button>
    </Link>

            
          </div>
        </div>
      </div>
      
      </div>

      

      )
  )}






                   



</>
  );
}

export default Total_work;
