import React from 'react'
import FilaCoins from './FilaCoins'


const titulos = ['#', 'Moneda', 'Precio', 'Cambio de precio', 'cuanto cambió en 24h']

const TablaCoins = ({monedas, buscar}) => {


  const monedaFiltrada = monedas.filter((moneda) => moneda.name.toLowerCase().includes(buscar.toLowerCase())|
  moneda.symbol.toLowerCase().includes(buscar.toLowerCase())
  )

  return (
    <table className='table table-dark mt-4 table-hover'>
      <thead>
        <tr>
          {
            titulos.map((titulo, index) =>(
              <td key={index}>{titulo}</td>
            ))
          }
          
        </tr>
      </thead>


      <tbody>
        {monedaFiltrada.map((moneda, index) => (
          <FilaCoins moneda ={moneda} key ={index} index={index +1}/>
        ))}
      </tbody>
    </table>
  )
}

export default TablaCoins