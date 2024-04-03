import { useMemo } from 'react'
import { OrderItem } from '../types/order.type'
import { formatCurrency } from '../helpers/format-currency';

type OrderTotalsProp = {
    order: OrderItem[]
}

export const OrderTotals = ({ order } : OrderTotalsProp) => {
    const subTotal = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0) , [order]);

    return (
        <>
            <div className='space-y-3'>
                <h2 className='font-black text-2xl'>Totales</h2>
                <p>SubTotal: {''}
                    <span className='font-bold'>{formatCurrency(subTotal)}</span>
                </p>

                <p>Propina: {''}
                    <span className='font-bold'>$0</span>
                </p>

                <p>Total: {''}
                    <span className='font-bold'>$0</span>
                </p>
            </div>

            <button></button>
        </>
    )
}
