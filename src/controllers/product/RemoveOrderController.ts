import { Response, Request } from "express";
import { RemoveProductService } from "../../services/products/RemoveProductService";

class RemoveProductController{
    async handle(req: Request, res:Response){
        const product_id = req.query.product_id as string;


        const RemoveProduct = new RemoveProductService()

        const Product = await RemoveProduct.execute({
            product_id
        })

        return res.json(Product)
    }
}

export {RemoveProductController}