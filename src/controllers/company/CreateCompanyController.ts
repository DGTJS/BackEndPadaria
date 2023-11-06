import { Request, Response } from "express";
import { CreateCompanyService } from "../../services/company/CreateCompanyService";

class CreateCompanyController{
    async handle(req: Request, res: Response){
        const { Name, Email, Password, Contact, address} = req.body

        if(!req.file){
            throw new Error("error upload file")
        }else{
            const {originalname, filename: Banner} = req.file;  


        const createCompanyService = new CreateCompanyService();

        const user = await createCompanyService.execute({Name, Email, Password, Contact, Banner, address})

        return res.json(user)
    }
}
}

export {CreateCompanyController}