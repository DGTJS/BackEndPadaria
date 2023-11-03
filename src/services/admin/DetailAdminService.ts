import prismaClient from "../../prisma";

class DetailAdminService{
    async execute(user_id: string){
    
        const Admin = await prismaClient.admin.findFirst({
            where:{
                id: user_id
            },
            select:{
                id:true,
                Email:true,
                Password:true,
            }
        })
    
            return Admin
        }
    }
    

export {DetailAdminService}