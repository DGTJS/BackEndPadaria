import prismaClient from "../../prisma";

interface ProductRequest{
    name: string;
    price:string;
    description:string;
    banner:string;
    category_id:string;
    company_id: string;

}

class CreateProductService{
    async execute({name, price, description, banner, category_id, company_id}: ProductRequest){

        const product = await prismaClient.product.create({
            data:{
                Name: name,
                Price: price,
                Description: description,
                Banner: banner,
                category_id: category_id,
                company_id: company_id
            }
        })
        
        return product
    }
}

export {CreateProductService}