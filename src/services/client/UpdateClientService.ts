import { hash } from "bcryptjs";
import prismaClient from "../../prisma";

interface UpdateClientRequest{
    client_id: string,
    phone?: string,
    email?:string,
    password?:string,
    address?:string,
}

class UpdateClientService {
    async execute({ client_id, phone, email, password, address }: UpdateClientRequest) {
      const data: {
        email?: string;
        password?: string;
        phone?: string;
        address?: string;
      } = {};
  
      if (email) data.email = email;
      if (phone) data.phone = phone;
      if (address) data.address = address;
      if (password) {
        const passwordHash = await hash(password, 7);
        data.password = passwordHash;
      }
  
      const updateClient = await prismaClient.client.update({
        where: {
          id: client_id,
        },
        data: data,
      });
  
      return updateClient;
    }
  }

export {UpdateClientService}