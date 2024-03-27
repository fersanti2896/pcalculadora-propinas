import { menuItems } from './database/db';
import { MenuItem } from './components/MenuItem';

function App() {
  console.log(menuItems)

  return (
    <>
      <header className="bg-green-500 py-7">
        <h1 className="text-center text-4xl font-black">Ticket de Cuenta</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div>
          <h2>Menú</h2>
          {
            menuItems.map(item => (
              <MenuItem
                key={item.id}
              />
            ))
          }
        </div>

        <div>
          <h2>Consumo</h2>
        </div>
      </main>
    </>
  )
}

export default App
