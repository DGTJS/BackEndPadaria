import { Response,Request } from "express";
import { RemovecompanyService } from "../../services/company/RemoveCompanyService";

class RemoveCompanyController{        
    async handle(req: Request, res:Response){
        const company_id = req.query.company_id as string;


        const removerCompany = new RemovecompanyService()

        const company = await removerCompany.execute({
            company_id
        })

        return res.json(company)
    }
}

export {RemoveCompanyController}