import { Request, Response } from "express";
import { LoginCompanyService } from "../../services/company/LoginCompanyService";


class LoginCompanyController{
    async handle(req: Request, res: Response){
        const {email, password} = req.body;

        const loginCompanyService = new LoginCompanyService();

        const Login = await loginCompanyService.execute({
            email,
            password
        })

        return res.json(Login)
    }

}

export {LoginCompanyController}