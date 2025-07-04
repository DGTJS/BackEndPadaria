import { Response,Request } from "express"
import { AddItemService } from "../../services/order/AddItemService"


class AddItemController{
    async handle(req: Request, res:Response){

        const {order_id, product_id, amount, company_id} = req.body

        const addItem = new AddItemService();

        const order = await addItem.execute({
            order_id,
            product_id,
            amount,
            company_id
            });

        return res.json(order)

    }
}

export {AddItemController}