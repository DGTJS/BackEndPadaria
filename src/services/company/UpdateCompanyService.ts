import { hash } from "bcryptjs";
import prismaClient from "../../prisma";

interface UpdateCompanyRequest {
  company_Id: string;
  password?: string;
  email?: string;
  contact?: string;
  address?: string;
  banner?: string;
  signature?: boolean;
}

class UpdateCompanyService {
  async execute({ company_Id, password, email, contact, address, signature, banner }: UpdateCompanyRequest) {
    // Use o método `prisma.user.update` para atualizar o perfil do usuário.

    const data: {
      password?: string;
      email?: string;
      banner?: string;
      contact?: string;
      address?: string;
      signature?: boolean;
    } = {};
    if (email) data.email = email;
    if (contact) data.contact = contact;
    if (address) data.address = address;
    if (banner) data.banner = banner;
    if (signature) data.signature = signature;
    if (password) {
      const passwordHash = await hash(password, 7);
      data.password = passwordHash;
    }


    const updatedCompany = await prismaClient.company.update({
      where: {
        id: company_Id,
      },
      data: data,
    });

    return updatedCompany;
  }
}

export { UpdateCompanyService };
