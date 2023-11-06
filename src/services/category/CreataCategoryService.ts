import prismaClient from "../../prisma";


interface CategoryRequest{

    name: string;
    company_id: string
}

class CreateCategoryService{
    async execute({name, company_id}: CategoryRequest){

        if(name === ''){
            throw new Error('Name Invalid')

        }

        const category = await prismaClient.category.create({
            data:{
                company_id:company_id,
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