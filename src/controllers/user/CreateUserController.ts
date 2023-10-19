import { Request, Response } from "express";
import { CreateUserService } from "../../services/company/CreateCompanyService";


class CreateUserController{
    async handle(req: Request, res: Response){
        const { Name, Email, Password, Phone} = req.body

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({Name, Email, Password, Phone})

        return res.json(user)
    }
}

export {CreateUserController}