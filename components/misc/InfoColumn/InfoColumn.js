import React from 'react';

const InfoColumn = ({ amount, size}) => {
  return (
    <div className='infoColumn'>
        <span>Hasta</span>
        <div className='infoColumn__amount'>
            <span>{ amount } €</span>
            <p>de subvención no reembolsable</p>

        </div>
        <div className='infoColumn__size'>
            <span>{ size } empleados</span>
            <p>tamaño de empresa</p>
        </div>
    </div>
  )
}

export default InfoColumn;