import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Dezena from './components/Dezena'
import MenuDeDezenas from './components/MenuDeDezenas'
import CInput from './components/CInput'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='flex flex-col w-screen h-screen'>
      <div className='w-full h-20 bg-green-500'>
        <CInput label='Dezenas' type='number'></CInput>
      </div>
      <div className='flex flex-nowrap flex-row w-full h-90 bg-zinc-50'>
        <MenuDeDezenas quantidadeDezenas={60}></MenuDeDezenas>
      </div>
    </div>
  </React.StrictMode>,
)
