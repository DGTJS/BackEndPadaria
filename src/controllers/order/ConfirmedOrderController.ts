import { Request,Response } from "express";
import { ConfirmedOrderService } from "../../services/order/ConfirmedOrderService";

class ConfirmedOrderController{
    async handle(req:Request,res:Response){
        const {order_id} = req.body

        const confirmedOrderService = new ConfirmedOrderService()

        const  order = await confirmedOrderService.execute({
            order_id
        })

        return res.json(order)
    }
}

export {ConfirmedOrderController}