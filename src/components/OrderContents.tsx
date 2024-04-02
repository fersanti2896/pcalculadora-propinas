import { formatCurrency } from '../helpers/format-currency'
import { Item } from '../types/item.type'
import { OrderItem } from '../types/order.type'

type OrderContentsProp = {
    order: OrderItem[], 
    removeItem: (id: Item['id']) => void
}

export const OrderContents = ({ order, removeItem }: OrderContentsProp) => {
    return (
        <>
            <h2 className="font-black text-2xl">Consumo</h2>
            <div className="space-y-3 mt-5">
                {
                    order.length === 0
                        ? <p className="text-center">La orden está vacía</p>
                        : (
                            order.map(item => (
                                <div className='flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b' key={item.id}>
                                    <div>
                                        <p className='text-lg'>
                                            {item.name} - {formatCurrency(item.price)}
                                        </p>
                                        <p className='font-black'>
                                            Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                                        </p>
                                    </div>

                                    <button className='bg-red-600 h-8 w-8 rounded-full text-white font-black'
                                            onClick={() => removeItem(item.id)}
                                    >
                                        X
                                    </button>
                                </div>
                            ))
                        )
                }
            </div>
        </>
    )
}
