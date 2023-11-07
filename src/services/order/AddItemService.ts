import { Item, Product } from "@prisma/client";
import prismaClient from "../../prisma";

interface ItemRequest{
    order_id: string,
    product_id:string,
    amount: number;
    company_id:string;
}


class AddItemService{
    async execute({order_id, product_id, amount, company_id}: ItemRequest){
        const order = await prismaClient.item.create({
            data:{
                order_id: order_id,
                product_id: product_id,
                amount,
                company_id: company_id
            }
        })
        return order
    }
}

export {AddItemService}