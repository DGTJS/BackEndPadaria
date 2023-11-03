import { Request, Response } from "express";
import { DetailAdminService } from "../../services/admin/DetailAdminService";

class DetailAdminController{
    async handle(req: Request, res: Response){
        
        const user_id = req.user_id

        const detailAdminService = new DetailAdminService();

        const Admin = await detailAdminService.execute(user_id);

        return res.json(Admin);
    }
}

export {DetailAdminController}