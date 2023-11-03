import prismaClient from "../../prisma";

interface ClientRequest{
    client_id: string
}

class RemoveClientService{
    async execute({client_id}: ClientRequest){
        const client = await prismaClient.client.delete({
            where:{
                id:client_id
            }
        })
        return client
    }
}

export {RemoveClientService}