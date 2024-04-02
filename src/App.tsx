import { menuItems } from './database/db';
import { MenuItem } from './components/MenuItem';
import useOrder from './hooks/useOrder';
import { OrderContents } from './components/OrderContents';

function App() {
  const { order, addItem, removeItem } = useOrder();

  return (
    <>
      <header className="bg-green-500 py-7">
        <h1 className="text-center text-4xl font-black">Ticket de Cuenta</h1>
      </header>

      <main className="max-w-5xl mx-auto py-20 grid md:grid-cols-2">
        <div className='p-5'>
          <h2 className='text-2xl font-black'>Menú</h2>
          <div className='space-y-3 mt-5'>
            {
              menuItems.map(item => (
                <MenuItem
                  key={item.id}
                  item={item}
                  addItem={addItem}
                />
              ))
            }
          </div>

        </div>

        <div className='border border-dashed border-slate-400 p-5 rounded-lg space-y-3'>
          <OrderContents 
            order={order}
            removeItem={removeItem}
          />
        </div>
      </main>
    </>
  )
}

export default App
