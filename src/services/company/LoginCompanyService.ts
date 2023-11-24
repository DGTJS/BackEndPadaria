import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface LoginCompanyRequest{
    email: string
    password: string
}

class LoginCompanyService{
    async execute({email, password}: LoginCompanyRequest){

        // Verifica se o Email existe
        const company = await prismaClient.company.findFirst({
            where:{
                Email: email
            }
        })

        if(!company){
            throw new Error("E-mail ou Senha incorreto")
        }

        // Verifica se a senha está correta
        const passwordMatch =  await compare(password, company.password)

        // Erro caso estejá incorreto
        if(!passwordMatch){
            throw new Error("E-mail ou Senha incorreto")
        }

        // se deu tudo certo vamos gerar um token para usuario
        const token = sign({
            id:company.id,
            name:company.Name,
            email:company.Email,
            address:company.address,
            contact:company.Contact,
            signature:company.signature,
            invoicing: company.invoicing,
        },
        process.env.JWT_SECRET,{
            subject: company.id,
            expiresIn: '30d'
        }
        )

        return({
            id:company.id,
            name:company.Name,
            email:company.Email,
            address:company.address,
            contact:company.Contact,
            signature:company.signature,
            invoicing: company.invoicing,
            token: token
        }
        )
    }
}

export {LoginCompanyService}