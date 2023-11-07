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
        Email?: string;
        Password?: string;
        Phone?: string;
        address?: string;
      } = {};
  
      if (email) data.Email = email;
      if (phone) data.Phone = phone;
      if (address) data.address = address;
      if (password) {
        const passwordHash = await hash(password, 7);
        data.Password = passwordHash;
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