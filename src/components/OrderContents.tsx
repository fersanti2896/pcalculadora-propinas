import { OrderItem } from "../types/order.type"

type OrderContentsProp = {
    order: OrderItem[]
}

export const OrderContents = ({ order }: OrderContentsProp) => {
    return (
        <>
            <h2 className="font-black text-2xl">Consumo</h2>
            <div className="space-y-3 mt-5">
                { 
                    order.length === 0 
                    ? <p className="text-center">La orden está vacía</p> 
                    : <p className="text-center"></p>
                }
            </div>
        </>
    )
}
