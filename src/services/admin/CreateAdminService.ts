import prismaClient from "../../prisma";
import { hash } from "bcryptjs";


interface AdminRequest{
    Email: string
    Password: string
}

class CreateAdminService{
    async execute({Email, Password}: AdminRequest){
        if(!Email){
            throw new Error("Email Incorreto")

        }

        const adminAlreadyExist = await prismaClient.admin.findFirst({
            where:{
                Email: Email
            }
        })
        if(adminAlreadyExist){
            throw new Error("Usuário já existe")
        }

        const passwordHash = await hash(Password, 8)

        const admin = await prismaClient.admin.create({
            data:{
                Email: Email,
                Password: passwordHash,
            }
        })
        return admin
    }
}

export {CreateAdminService}