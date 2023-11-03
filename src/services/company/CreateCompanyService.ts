import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface CompanyRequest{
    Name: string
    Email: string
    Password: string
    Contact: string
}

class CreateCompanyService{
    async execute({Name, Email, Password, Contact}: CompanyRequest){

        if(!Email){
            throw new Error("Email ou senha incorreto")
        }

        const companyAlreadyExist = await prismaClient.company.findFirst({
            where:{
                Email: Email
            }
        })
        if(companyAlreadyExist){
            throw new Error("Usuário já existe")
        }

        const passwordHash = await hash(Password, 7)

        const company = await prismaClient.company.create({
            data:{
                Name: Name,
                Email: Email,
                Password: passwordHash,
                Contact: Contact,
            }
        })
        return company
    }
}

export {CreateCompanyService}