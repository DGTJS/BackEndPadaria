import prismaClient from "../../prisma";

interface OrderRequest{
    name: string;
    company_id: string;
    client_id: string;
}

class CreateOrderService{
    async execute({name, client_id, company_id}:OrderRequest){
        const order = await prismaClient.order.create({
            data:{
                name:name,
                client_id:client_id,
                company_id: company_id
            }
        })

        return order
    }
}

export {CreateOrderService}