import prismaClient from "../../prisma";

interface OrderRequest{
    order_id: string
}

class ConfirmedPaymentService{
    async execute({order_id}: OrderRequest){
        const order = await prismaClient.order.update({
            where:{
                id:order_id
            },
            data:{
                payment:true
            }
        })
        return order
    }
}

export {ConfirmedPaymentService}