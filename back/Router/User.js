import express from "express";

import All_req_worker from "../Controllers/All_req_worker.js";
import register_work from "../Controllers/register_work.js";
import All_work from "../Controllers/All_work.js";
import Req_work_confirm from "../Controllers/Req_work_confirm.js";
//import isAuthenticated from "../middelware/auth.js";
import Done from "../Controllers/Done.js";
const router = express.Router();

router.get("/get_all_req_worker" , All_req_worker)

router.post("/register", register_work);
router.get("/getwork" , All_work);
router.put("/req_work_confirm" , Req_work_confirm);

router.put("/donned" , Done);
export default router;
