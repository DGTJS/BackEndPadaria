import { Request,Response } from "express";
import { UpdateClientService } from "../../services/client/UpdateClientService";

class UpdateClientController{
    async handle(req: Request, res: Response){
        const {client_id, phone, email, password, address,} = req.body

        const updateClient = new UpdateClientService()

        const Update = await updateClient.execute({
            client_id,
            phone,
            email,
            password,
            address
        })

        return res.json(Update)
    }
}

export {UpdateClientController}