import prismaClient from "../../prisma";
import { hash } from "bcryptjs";


interface ClientRequest {
  name: string;
  phone: string;
  email: string;
  password: string;
  address: string
}

class CreateClientService {
  async execute({ name, phone, email, password, address }: ClientRequest) {

    if (!email) {

      throw new Error("Email Incorreto")
        }

        const ClientAlreadyExist = await prismaClient.client.findFirst({
          where:{
            email: email
          }
        })
        if (ClientAlreadyExist) {
        throw new Error("Usuário já existe");
      }
      
      const passwordHash = await hash(password, 7)


      const client = await prismaClient.client.create({
        data: {
          name: name,
          email: email,
          password: passwordHash,
          phone: phone,
          address: address
        },
      });
      return client
    }
}

export {CreateClientService}