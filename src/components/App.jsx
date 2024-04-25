import React,{useEffect, useState} from 'react'
import axios from 'axios'
import TablaCoins from './TablaCoins'

function App() {
 const [monedas, setMonedas] = useState([])
 const [buscar, setBuscar] = useState('')

const obtenerDatos = async () => {
  const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1')
  setMonedas(res.data)
}
  
  useEffect(  () => {
    obtenerDatos()
    }, [])
  


  return (
    <div className='container'>
      <div className='row'>
        <h1>Valor de las Criptomoneda </h1>
        <input type="text"
          placeholder='Buscar moneda'
          className='form-control bg-dark text-light border-0 mt-4 text-center input-con-placeholder'
          onChange={ e => setBuscar(e.target.value)}
        />
        <TablaCoins monedas = {monedas} buscar ={buscar}/>
      </div>
    </div>
  )
}

export default App