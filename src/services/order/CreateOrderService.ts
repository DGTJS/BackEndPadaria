import prismaClient from "../../prisma";

interface OrderRequest{
    name: string;
    client_id: string;
}

class CreateOrderService{
    async execute({name, client_id}){
        const order = await prismaClient.order.create({
            data:{
                name:name,
                client_id:client_id
            }
        })

        return order
    }
}

export {CreateOrderService}