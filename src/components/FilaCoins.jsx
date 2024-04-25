import React from 'react'

function FilaCoins({moneda, index}) {
  return (
      <tr>
        <td>{index}</td>
        <td>
          <img className='img-fluid me-4' style={{width: '3%'}} src={moneda.image} alt={moneda.name} />
          <span>{moneda.name}</span>
          <span className='ms-3 text-gris-claro text-uppercase'>{moneda.symbol}</span>
        </td>
        <td>${moneda.current_price}</td>
        <td className={moneda.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger' }>
          {moneda.price_change_percentage_24h}
        </td>
        <td>{moneda.total_volume}</td>

      </tr>
  )
}

export default FilaCoins