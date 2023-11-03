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
        const passwordMatch =  await compare(password, company.Password)

        // Erro caso estejá incorreto
        if(!passwordMatch){
            throw new Error("E-mail ou Senha incorreto")
        }

        // se deu tudo certo vamos gerar um token para usuario
        const token = sign({
            name: company.Name,
            email: company.Email,
            password: company.Password,
            contact: company.Contact,
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
            contact:company.Contact,
            Signature:company.Signature,
            invoicing: company.invoicing,
            token: token
        }
        )
    }
}

export {LoginCompanyService}