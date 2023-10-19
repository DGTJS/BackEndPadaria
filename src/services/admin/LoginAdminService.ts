import prismaClient from "../../prisma"
import { compare } from "bcryptjs";


interface LoginRequest{
    email: string
    password: string
}

class LoginAdminService{
            async execute({email, password}: LoginRequest){
        // Verifica se o Email existe
        const admin = await prismaClient.admin.findFirst({
            where:{
                Email: email
            }
        })

        if(!admin){
            throw new Error("E-mail ou Senha incorreto")
        }

        // Verifica se a senha está correta
        const passwordMatch =  await compare(password, admin.Password)

        // Erro caso estejá incorreto
        if(!passwordMatch){
            throw new Error("E-mail ou Senha incorreto")
        }

        return({ok:true})
            }
}

export {LoginAdminService}