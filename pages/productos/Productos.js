import React from 'react';
import Header from '../../components/Header';

const Productos = () => {
    return (
        <div>
            <Header />
            <div className="productos">
                <h1>
                    Somos el fabricante de{' '}
                    <a href="//clarive.com" target="_blank" rel="noreferrer">
                        Clarive
                    </a>
                    , plataforma DevOps líder en el mercado
                </h1>
                <p>
                    <a href="//clarive.com" target="_blank" rel="noreferrer">
                        <img src="clarive-banner.png" />
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Productos;
