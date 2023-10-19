import prismaClient from "../../prisma";
import { hash } from "bcryptjs";


interface ClientRequest {
  Name: string;
  Phone: string;
  Email: string;
  Password: string;
}

class CreateClientService {
  async execute({ Name, Phone, Email, Password }: ClientRequest) {
    if (Email) {
      // Verificar se o usuário já existe apenas se o email for fornecido
      const userAlreadyExist = await prismaClient.client.findFirst({
        where: {
          Email: Email,
        },
      });
      
      if (userAlreadyExist) {
        throw new Error("Usuário já existe");
      }
      
      
      let passwordHash;
      if (Password) {
        passwordHash = await hash(Password, 7);
      }

      // Criar o cliente se o email foi fornecido
      const client = await prismaClient.client.create({
        data: {
          Name: Name,
          Email: Email,
          Password: Password,
          Phone: Phone,
        },
      });
    } else {
      // Se o email não foi fornecido, criar o cliente sem email e senha
      const client = await prismaClient.client.create({
        data: {
          Email: Email,
          Password: Password,
          Name: Name,
          Phone: Phone,
        },
      });
      return client
    }
}
}

export {CreateClientService}