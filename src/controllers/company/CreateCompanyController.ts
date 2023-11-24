import { Request, Response } from "express";
import { CreateCompanyService } from "../../services/company/CreateCompanyService";

class CreateCompanyController{
    async handle(req: Request, res: Response){
        const { name, email, password, contact, address, categoryCompany} = req.body

        
        const createCompanyService = new CreateCompanyService();

        const user = await createCompanyService.execute({name, email, password, contact, address, categoryCompany})

        return res.json(user)
}
}

export {CreateCompanyController}