import Link from 'next/link';
import React from 'react';
import Logo from '../../misc/Logo/';

const HeaderLeft = () => {
  return (
    <div className='leftHeader'>
        <Link href='/'>
            <Logo />
        </Link>
    </div>
  )
}

export default HeaderLeft;