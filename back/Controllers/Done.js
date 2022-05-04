import Work from "../models/Work_Model.js";
import User from "../models/User_Model.js";


const Done = async (req, res) => {
    try {
        
      
      
    console.log(req.body.worker)
    Work.findByIdAndUpdate({'_id':"62712449fa963dd24e64406d"} , {req_worker : req.body.worker }, { new:true} , (err,data)=>{
        if(!err){
            
          
                        

            
            

            res.status(200).send(data);
        }else{
            console.log(err);
        }
    
    })

    //  res.status(201).json({
    //       success: true,
    //       message: "Post created",
    //     });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: error.message,
        });
      }
};

export default Done;
