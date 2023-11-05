import prismaClient from "../../prisma";

interface OrderRequest{
    order_id: string
}

class RemoveOrderService{
    async execute({order_id}: OrderRequest){
        const order = await prismaClient.order.delete({
            where:{
              id: order_id, // Substitua 'order_id' pela variável apropriada que contenha o ID da ordem que você deseja excluir.
            },
          });
          
        return order
    }
}

export {RemoveOrderService}