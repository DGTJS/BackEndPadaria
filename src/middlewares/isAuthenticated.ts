import { NextFunction, Request, Response } from "express";
// Importação de tipos do Express e a função 'verify' do pacote 'jsonwebtoken'
import { verify } from "jsonwebtoken";

// Interface para definir o formato do payload do token JWT
interface Payload {
    sub: string;
}

// Função middleware para verificar a autenticação
export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
    // Receber o Token do cabeçalho da requisição
    const authToken = req.headers.authorization;

    // Se não houver token no cabeçalho, retorna status 401 (Não autorizado)
    if (!authToken) {
        return res.status(401).end(); // 'end' é uma função que finaliza a resposta HTTP
    }

    // Divide o cabeçalho "Bearer token" para obter somente o token
    const [, token] = authToken.split(" ");

    try {
        // Tenta verificar o token JWT usando a chave secreta definida em 'process.env.JWT_SECRET'
        const { sub } = verify(token, process.env.JWT_SECRET) as Payload;

        // Recuperar o id e coloca numa variavel user_id e dentro do req
        req.user_id = sub;
        // Se a verificação for bem-sucedida, a função 'next' é chamada para continuar o fluxo de requisição
        return next();
    } catch (err) {
        // Em caso de erro na verificação do token, retorna status 401 (Não autorizado)
        return res.status(401).end(); // 'end' é uma função que finaliza a resposta HTTP
    }
}
