import prismaClient from "../../prisma";
import { hash } from "bcryptjs";


interface ClientRequest {
  Name: string;
  Phone: string;
  Email: string;
  Password: string;
  address: string
}

class CreateClientService {
  async execute({ Name, Phone, Email, Password, address }: ClientRequest) {
    if (!Email) {
      // Verificar se o usuário já existe apenas se o email for fornecido
      throw new Error("Email Incorreto")
        }

        const ClientAlreadyExist = await prismaClient.client.findFirst({
          where:{
            Email: Email
          }
        })
        if (ClientAlreadyExist) {
        throw new Error("Usuário já existe");
      }
      
      const passwordHash = await hash(Password, 7)

      // Criar o cliente se o email foi fornecido
      const client = await prismaClient.client.create({
        data: {
          Name: Name,
          Email: Email,
          Password: passwordHash,
          Phone: Phone,
          address: address
        },
      });
      return client
    }
}

export {CreateClientService}