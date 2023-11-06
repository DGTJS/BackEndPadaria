import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/category/CreataCategoryService";

class CreateCategoryController{
    async handle(req:Request, res:Response){

        const {name, company_id} = req.body

        const createCategoryService = new CreateCategoryService();

        const category = await createCategoryService.execute({name, company_id});

        return res.json(category)

    }
}

export {CreateCategoryController}