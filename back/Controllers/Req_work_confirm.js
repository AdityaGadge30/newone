import Work from "../models/Work_Model.js";
import User from "../models/User_Model.js";


const Req_work_confirm = async (req, res) => {
    try {
        
       
    const {req_worker} = req.body;
    console.log(req_worker);

    Work.findById({'_id':"62712449fa963dd24e64406d"} ,(err,data)=>{
        if(!err){
            console.log(data);
          data.request_worker.unshift(req_worker);

           data.save()
            console.log(data);

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

export default Req_work_confirm;
