import prismaClient from "../../prisma";
import { compare } from "bcryptjs";

interface LoginRequest{
    email: string
    password: string
}

class LoginclientService{
    async execute({email, password}: LoginRequest){

        // Verifica se o Email existe
        const client = await prismaClient.client.findFirst({
            where:{
                Email: email
            }
        })

        if(!client){
            throw new Error("E-mail ou Senha incorreto")
        }

        // Verifica se a senha está correta
        const passwordMatch =  await compare(password, client.Password)

        // Erro caso estejá incorreto
        if(!passwordMatch){
            throw new Error("E-mail ou Senha incorreto")
        }

        return({ok:true})
    }
}

export {LoginclientService}