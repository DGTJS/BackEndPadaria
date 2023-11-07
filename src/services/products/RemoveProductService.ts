import prismaClient from "../../prisma";

interface ProductRequest{
    product_id: string
}

class RemoveProductService{
    async execute({product_id}: ProductRequest){
        const Product = await prismaClient.product.delete({
            where:{
                id: product_id
            }
        })
        return Product
    }
    
}

export {RemoveProductService}