import { Dispatch, SetStateAction } from 'react'

type PercentageOrderProp = {
    setTip: Dispatch<SetStateAction<number>>,
    tip: number
}

const tipOptions = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
]

export const PercentageOrder = ({ setTip, tip }: PercentageOrderProp) => {
    return (
        <>
            <h3 className='font-black text-2xl'>Propina</h3>

            <form>
                {
                    tipOptions.map(tipOptions => (
                        <div key={tipOptions.id}
                             className='flex gap-2'
                        >
                            <input id={tipOptions.id} 
                                   type="radio"
                                   name="tip"
                                   value={tipOptions.value}
                                   onChange={e => setTip(+e.target.value)}
                                   checked={tipOptions.value === tip}
                            />
                            <label htmlFor={tipOptions.id}>{tipOptions.label}</label>
                        </div>
                    ))
                }
            </form>
        </>
    )
}
