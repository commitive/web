import Link from 'next/link';
import React from 'react';
import Logo from '../Logo';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__logo'>
        <Logo />
      </div>
      <div className='footer__links'>
        <ul>
          <li>
            <Link href='/productos'>
              Productos
            </Link>
          </li>
          <li>
            <Link href='/servicios'>
              Servicios
            </Link>
          </li>
          <li>
            <Link href='/nosotros'>
              Nosotros
            </Link>
          </li>
        </ul>
      </div>
      <div className='footer__contact'>
        <span>&copy; 2022 Commitive</span>
        <p>Plaza Tirso de molina, 3 28012 Madrid</p>
      </div>
    </footer>
  )
}

export default Footer;