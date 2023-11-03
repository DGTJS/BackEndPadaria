import { Response,Request } from "express";
import { RemoveClientService } from "../../services/client/RemoveClientService";

class RemoveOrderController{        
    async handle(req: Request, res:Response){
        const client_id = req.query.client_id as string;


        const removerClient = new RemoveClientService()

        const client = await removerClient.execute({
            client_id
        })

        return res.json(client)
    }
}

export {RemoveOrderController}