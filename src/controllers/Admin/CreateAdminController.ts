import { Request, Response} from "express";
import { CreateAdminService } from "../../services/admin/CreateAdminService";

class CreateAdminController{
    async handle(req: Request, res: Response){
        const {Email, Password} = req.body

        const createAdminService = new CreateAdminService();

        const user = await createAdminService.execute({Email, Password})

        return res.json(user)
    }
}

export {CreateAdminController}