import prismaClient from "../../prisma";

class DetailCompanyService{
    async execute(user_id: string){
    
    const Company = await prismaClient.company.findFirst({
        where:{
            id: user_id
        },
        select:{
            id: true,
            Name:true,
            Email:true,
            invoicing: true,
            Contact: true,
            Signature: true
        }
    })

        return Company
    }
}

export {DetailCompanyService}