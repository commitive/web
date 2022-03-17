import Link from 'next/link';
import React from 'react';

const HeaderCenter = () => {
  return (
    <div className='headerCenter'>
        <ul className='headerCenter__links'>
            <Link href='/productos'>
                <li>Productos</li>
            </Link>
            <Link href='/servicios'>
                <li>Servicios</li>
            </Link>
            <Link href='/nosotros'>
                <li>Nosotros</li>
            </Link>
        </ul>
    </div>
  )
}

export default HeaderCenter;