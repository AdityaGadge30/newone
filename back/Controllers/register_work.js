import Work from "../models/Work_Model.js";
import User from "../models/User_Model.js";


const register_work = async (req, res) => {
    try {
        
        const newWorkData = {
          owner: req.body.name,
          Work:req.body.work,
          Location : req.body.location,
          Time : req.body.time
        };
    
        const work = await Work.create(newWorkData);
    /*
        const user = await User.findById(req.user._id);
    
        user.works.unshift(work._id);
    
        await user.save();
      */  res.status(201).json({
          success: true,
          message: "Post created",
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: error.message,
        });
      }
};

export default register_work;
