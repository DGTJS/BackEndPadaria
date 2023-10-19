import { Request, Response } from "express";
import { LoginCompanyService } from "../../services/company/LoginCompanyService";


class LoginUserController{
    async handle(req: Request, res: Response){
        const {email, password} = req.body;

        const loginUserService = new LoginCompanyService();

        const Login = await loginUserService.execute({
            email,
            password
        })

        return res.json(Login)
    }

}

export {LoginUserController}