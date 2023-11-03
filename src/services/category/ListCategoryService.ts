import prismaClient from "../../prisma";

class ListCategoryService{

    async execute(){
        
        const category = await prismaClient.category.findMany({
            select:{
                id: true,
                Name: true,
            }
        })

        return category
    }
}

export {ListCategoryService}