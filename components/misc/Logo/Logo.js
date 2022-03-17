import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logoImg from '../../../assets/logos/commitive-logo-icon.png';

const Logo = () => {
  return (
    <div className='logo'>
      <Link href='/'>
        <Image src={logoImg} alt='logo-commitive' />
      </Link>
    </div>
  )
}

export default Logo;