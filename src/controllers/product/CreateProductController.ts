import { Request, Response, json } from "express";
import { CreateProductService } from "../../services/products/CreateProductService";


class CreateProductController{
    async handle(req:Request, res:Response){ 

        const {name, price, description, category_id} = req.body;

        if(!req.file){
            throw new Error("error upload file")
        }else{
            const {originalname, filename: banner} = req.file;  

            const createProductService = new CreateProductService();
            
            const products = await createProductService.execute({ name, price, description, banner, category_id});
            
            return res.json(products)

        }

    }
}

export {CreateProductController}