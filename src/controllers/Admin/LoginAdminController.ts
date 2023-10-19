import { Request, Response } from "express";
import { LoginAdminService } from "../../services/admin/LoginAdminService"


class LoginAdminController{
    async handle(req: Request, res: Response){
        const {email, password} = req.body;

        const loginAdminService = new LoginAdminService();

        const Login = await loginAdminService.execute({
            email,
            password
        })

        return res.json(Login)

    }
}

export {LoginAdminController}