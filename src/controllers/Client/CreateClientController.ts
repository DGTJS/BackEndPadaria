import { Request, Response } from "express";
import { CreateClientService } from "../../services/client/CreateClientService";

class CreateClientController{
    async handle(req: Request, res:Response){
    
    const {name, phone, email, password, address} = req.body

    const createClientService = new CreateClientService();

    const client = await createClientService.execute({name ,phone, email,password, address})

    return res.json(client)
}
}

export {CreateClientController}