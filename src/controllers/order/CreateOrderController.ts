import { Response,Request } from "express";
import { CreateOrderService } from "../../services/order/CreateOrderService";

class CreateOrderController{
    async handle(req: Request, res: Response){
        const {name, client_id} = req.body

        const createOrderService = new CreateOrderService();

        const order = await createOrderService.execute({
            name,
            client_id
        })

        return res.json(order)
    }
}

export {CreateOrderController}