import prismaClient from "../../prisma";
import { compare } from "bcryptjs";

interface LoginRequest {
  email: string;
  password: string;
}

class LoginClientService {
  async execute({ email, password }: LoginRequest) {
    // Procurar o cliente com base no e-mail
    const client = await prismaClient.client.findFirst({
      where: {
        Email: email,
      },
    });

    // Se não encontrar o cliente, lançar um erro
    if (!client) {
      throw new Error("E-mail ou Senha incorreto");
    }

    // Verificar se a senha está correta
    const passwordMatch = await compare(password, client.Password);

    // Se a senha estiver incorreta, lançar um erro
    if (!passwordMatch) {
      throw new Error("E-mail ou Senha incorreto");
    }

    // Se chegarmos até aqui, a autenticação foi bem-sucedida
    return { ok: true };
  }
}

export { LoginClientService };
