import Work from "../models/Work_Model.js";
import User from "../models/User_Model.js";


const All_work = async (req, res) => {
    try {
        const users = await Work.find();
    
        console.log(users);
        res.status(200).json({
          success: true,
          users,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: error.message,
        });
      }
};

export default All_work;
