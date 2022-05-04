import React , {useState} from "react";
import {  Link } from "react-router-dom";




function Start(){




  
 
 

  return(

    <>

    <Link to={"/work_req"}>
        <button type="button" class="user btn btn-primary btn-lg">Create Work</button>
    </Link>

    <Link to={"/allwork"}>
        <button type="button" class="user btn btn-primary btn-lg">Total Works </button>
    </Link>

    <Link to={"/part_req"}>
        <button type="button" class="user btn btn-primary btn-lg">Work Confirm (I am Available)</button>
    </Link>

    
    <Link to={"/all_req"}>
        <button type="button" class="user btn btn-primary btn-lg">Your work is selected</button>
    </Link>


      </>

      
    
    );
}
export default Start;