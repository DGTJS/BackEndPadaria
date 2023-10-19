import { Request, Response } from "express";
import { CreateClientService } from "../../services/client/CreateClientService";

class CreateClientController{
    async handle(req: Request, res:Response){
    
    const {Name, Phone, Email, Password} = req.body

    const createClientService = new CreateClientService();

    const client = await createClientService.execute({Name,Phone,Email,Password})

    return res.json(client)
}
}

export {CreateClientController}