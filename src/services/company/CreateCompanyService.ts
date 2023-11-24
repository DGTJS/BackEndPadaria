import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface CompanyRequest{
    name: string
    email: string
    password: string
    contact: string
    banner?: string
    address: string
    categoryCompany: string
}

class CreateCompanyService{
    async execute({name, email, password, contact, banner, address, categoryCompany}: CompanyRequest){

        if(!email){
            throw new Error("Email ou senha incorreto")
        }

        const companyAlreadyExist = await prismaClient.company.findFirst({
            where:{
                Email: email
            }
        })
        if(companyAlreadyExist){
            throw new Error("Usuário já existe")
        }

        const passwordHash = await hash(password, 7)

        const company = await prismaClient.company.create({
            data:{
                Name: name,
                Email: email,
                password: passwordHash,
                Contact: contact,
                banner: banner,
                address: address,
                categoryCompany: categoryCompany
            }
        })
        return company
    }
}

export {CreateCompanyService}