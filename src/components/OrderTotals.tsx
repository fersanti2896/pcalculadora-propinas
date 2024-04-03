import { useMemo } from 'react'
import { OrderItem } from '../types/order.type'
import { formatCurrency } from '../helpers/format-currency';

type OrderTotalsProp = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void
}

export const OrderTotals = ({ order, tip, placeOrder } : OrderTotalsProp) => {
    const subTotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0) , [order]);
    const tipAmount = useMemo(() => subTotalAmount * tip, [tip, order]);
    const totalAmount = useMemo(() => subTotalAmount + tipAmount, [tip, order]);

    return (
        <>
            <div className='space-y-3'>
                <h2 className='font-black text-2xl'>Totales</h2>
                <p>SubTotal: {''}
                    <span className='font-bold'>{formatCurrency(subTotalAmount)}</span>
                </p>

                <p>Propina: {''}
                    <span className='font-bold'>{formatCurrency(tipAmount)}</span>
                </p>

                <p>Total: {''}
                    <span className='font-bold'>{formatCurrency(totalAmount)}</span>
                </p>
            </div>

            <button className='w-full bg-blue-800 p-3 uppercase text-white font-bold mt-10 disabled:opacity-60'
                    disabled={totalAmount === 0}
                    onClick={() => placeOrder()}
            >
                Guardar Orden
            </button>
        </>
    )
}
