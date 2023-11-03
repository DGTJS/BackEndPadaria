import prismaClient from "../../prisma";


interface CategoryRequest{

    name: string;
}

class CreateCategoryService{
    async execute({name}: CategoryRequest){

        if(name === ''){
            throw new Error('Name Invalid')

        }

        const category = await prismaClient.category.create({
            data:{
                Name: name,
            },
            select:{
                id:true,
                Name:true,
            }
        })
        return category
    }
}
export {CreateCategoryService}