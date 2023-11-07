import { Request, Response } from "express";
import { UpdateCompanyService } from "../../services/company/UpdateCompanyService";

class UpdateCompanyController{
    async handle(req:Request, res:Response){
        const {company_Id, password, email, contact, address, Signature} = req.body;

        const updateCompanyService = new UpdateCompanyService();

        const update = await updateCompanyService.execute({
            company_Id,
            password,
            email,
            contact,
            address,
            Signature,
        })

        return update

    }
}

export {UpdateCompanyController}