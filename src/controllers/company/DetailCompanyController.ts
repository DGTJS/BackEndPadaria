import { Request, Response } from "express";
import { DetailCompanyService } from "../../services/company/DetailCompanyService";

class DetailCompanyController{
    async handle(req: Request, res: Response){

        const user_id = req.user_id

        const detailCompanyService = new DetailCompanyService();

        const Company = await detailCompanyService.execute(user_id);

        return res.json(Company);
    }
}

export {DetailCompanyController}