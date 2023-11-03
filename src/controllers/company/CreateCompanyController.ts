import { Request, Response } from "express";
import { CreateCompanyService } from "../../services/company/CreateCompanyService";

class CreateCompanyController{
    async handle(req: Request, res: Response){
        const { Name, Email, Password, Contact} = req.body

        const createCompanyService = new CreateCompanyService();

        const user = await createCompanyService.execute({Name, Email, Password, Contact})

        return res.json(user)
    }
}

export {CreateCompanyController}