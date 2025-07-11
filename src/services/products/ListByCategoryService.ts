import prismaClient from "../../prisma";

interface ProductRequest{
    category_id: string
}

class ListByCategoryService{
    async execute({category_id}: ProductRequest){

        // Buscar por cada produto com uma condição "WHERE", procurar produto que a categoria é igual a que foi passada 
        const findByCategory = await prismaClient.product.findMany({
            where:{
                category_id: category_id
            }   
        })

        return findByCategory

    }
}

export {ListByCategoryService}