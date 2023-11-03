import { Request, Response } from "express";
import { DetailClientService } from "../../services/client/DetailClientService";

class DetailClientController{
    async handle(req: Request, res: Response){

        const user_id = req.user_id

        const detailClientService = new DetailClientService();

        const Client = await detailClientService.execute(user_id);

        return res.json(Client);
    }
}

export {DetailClientController}