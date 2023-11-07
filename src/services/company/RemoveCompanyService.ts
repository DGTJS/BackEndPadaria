import prismaClient from "../../prisma";

interface CompanyRequest{
    company_id: string
}

class RemovecompanyService{
    async execute({company_id}: CompanyRequest){
        const company = await prismaClient.company.delete({
            where:{
              id: company_id, // Substitua 'company_id' pela variável apropriada que contenha o ID da ordem que você deseja excluir.
            },
          });
          
        return company
    }
}

export {RemovecompanyService}