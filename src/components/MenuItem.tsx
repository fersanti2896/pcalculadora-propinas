import { Item } from '../types/item.type';

type MenuItemProps = {
    item: Item,
    addItem: (item: Item) => void
}

export const MenuItem = ({ item, addItem }: MenuItemProps) => {
    return (
        <>
            <button className='border-2 border-green-600 hover:bg-green-400 w-full p-4 flex justify-between mb-1 rounded-lg'
                    onClick={() => addItem( item )}
            >
                <p>{item.name}</p>
                <p className='font-black'>${item.price}</p>
            </button>
        </>
    )
}