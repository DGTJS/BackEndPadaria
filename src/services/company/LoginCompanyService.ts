import prismaClient from "../../prisma";
import { compare } from "bcryptjs";

interface LoginCompanyRequest{
    email: string
    password: string
}

class LoginCompanyService{
    async execute({email, password}: LoginCompanyRequest){

        // Verifica se o Email existe
        const user = await prismaClient.company.findFirst({
            where:{
                Email: email
            }
        })

        if(!user){
            throw new Error("E-mail ou Senha incorreto")
        }

        // Verifica se a senha está correta
        const passwordMatch =  await compare(password, user.Password)

        // Erro caso estejá incorreto
        if(!passwordMatch){
            throw new Error("E-mail ou Senha incorreto")
        }

        return({ok:true})
    }
}

export {LoginCompanyService}