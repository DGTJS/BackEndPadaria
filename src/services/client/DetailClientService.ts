import prismaClient from "../../prisma";

class DetailClientService{
    async execute(user_id: string){
    
        const Client = await prismaClient.client.findFirst({
            where:{
                id: user_id
            },
            select:{
                id: true,
                name: true,
                email: true,
                phone: true,
                address: true,
            }
        })
    
            return Client
        }
    }
    

export {DetailClientService}