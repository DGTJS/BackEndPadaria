import { Response, Request } from "express";
import { ConfirmedPaymentService } from "../../services/order/ConfirmedPaymentService";

class ConfirmedPaymentController{
    async handle(req: Request, res: Response){
        const {order_id} = req.body

        const confirmedPayment = new ConfirmedPaymentService()

        const Confirmed = await confirmedPayment.execute({
            order_id
        })

        return res.json(Confirmed)
    }
}

export {ConfirmedPaymentController}