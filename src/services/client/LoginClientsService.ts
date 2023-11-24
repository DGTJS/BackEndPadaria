import { sign } from "jsonwebtoken";
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
        email: email,
      },
    });

    // Se não encontrar o cliente, lançar um erro
    if (!client) {
      throw new Error("E-mail ou Senha incorreto");
    }

    // Verificar se a senha está correta
    const passwordMatch = await compare(password, client.password);

    // Se a senha estiver incorreta, lançar um erro
    if (!passwordMatch) {
      throw new Error("E-mail ou Senha incorreto");
    }

    // se deu tudo certo vamos gerar um token para usuario

    const token = sign({
      name:client.name,
      email:client.email,
      password:client.password,
      phone:client.phone,
      address:client.address,
    },
    process.env.JWT_SECRET,{
      subject: client.id,
      expiresIn: '30d'
    }
    )

    return ({
      id:client.id,
      name:client.name,
      email:client.email,
      password:client.password,
      phone:client.phone,
      address:client.address,
      token: token
      
    });
  }
}

export { LoginClientService };
