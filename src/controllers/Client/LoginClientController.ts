import { Request, Response } from "express";
import { LoginClientService } from "../../services/client/LoginClientsService";


class LoginClientController{
    async handle(req: Request, res: Response){
        const {email, password} = req.body;

        const loginClientService = new LoginClientService();

        const Login = await loginClientService.execute({
            email,
            password
        })
    
        return res.json(Login)
    }

}

export {LoginClientController}