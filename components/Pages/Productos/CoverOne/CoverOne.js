import React from 'react';
import Carousel from '../../../misc/Carousel';
import coverOneImg from '../../../../assets/img/Products/Clarive/Deploy-directly-from-Kanban--1024x489.png';
import coverTwoImg from '../../../../assets/img/Products/Clarive/monitor1.png';
import coverThreeImg from '../../../../assets/img/Products/Clarive/release-merging.png';
import Image from 'next/image';
import clariveLgoo from '../../../../assets/logos/clarive-web-logo-1024.png';
import { Divider } from 'semantic-ui-react';
import Link from 'next/link';


const CoverOne = () => {
  return (
    <div className='coverOne-product'>
      <div className='coverOne-product__clarive'>
        <div className='coverOne-product__clarive-description'>
          <Image src={clariveLgoo} />
          <div className='coverOne-product__clarive-description-title'>

            <span>Clarive es una plataforma DevOps end-to-end que ayuda a gestionar y automatizar todos los procesos de creación y generación de software, desde la idea hasta puesta en producción.</span>
          </div>
            <h2>Características principales</h2>
            <ul>
              <li>Gestión de repositorios de código basados en el sistema de versionado que
              prefieras (GIT, Subversion, Genexus, etc.)</li>
              <li>CI/CD</li>
              <li>Planificación y tracking de trabajo</li>
              <li>Repositorio de artefactos</li>
              <li>Automatización de despliegues</li>
              <li>Kanban</li>
              <li>Gestión de testing</li>
              <li>Gestión del provisionamiento</li>
            </ul>
            <h2>Beneficios</h2>
            <span>Centralizar todo tu proceso de creación y generación de software en un solo punto, pudiendo integrar el resto de herramientas dentro de Clarive para orquestar todo el ciclo de vida del DevOps. Ahorras tiempo y dinero, con la gestión centralizada y automatización de todos los procesos.</span>
            <ul>
              <span><b>Casos de uso</b></span>
              <li>Ciclo de vida DevOps end-to-end: toda la producción de software y aplicaciones en una sola herramienta.</li>
              <li>Release automation: Centraliza la entrega de todos tus proveedores de desarrollo en una sola herramienta para que organizar y automatizar los procesos de testing y entrega a producción. Clarive es utilizado en clientes, donde se entregan desarrollos por más de 8.000 personas y se automatiza toda la entrega.</li>
              <li>Orquestador: Integra todas las herramientas DevOps que utilices y gestiónalas desde un sitio centralizado.</li>
            </ul>
            <ul>
              <span><b>Casos de éxito</b></span>
              <li>Banco de Formosa: Gestiona todo el ciclo desde Clarive, desde la gestión de la demanda por cualquier tipo de agente dentro del banco hasta la puesta en producción. Automatizando mucho de los procesos necesarios en planificación, gestión y desarrollo. </li>
              <li>Banco Sabadell: entrega de todos los paquetes de mejoras y evolutivos de manera automática desde el equipo de Bantotal al equipo de Banco Sabadell.</li>
              <li>Telefónica: Gestiona todos los desarrollos de software de sus más de 500 proveedores y 8.000 desarrolladores, a través de la unificación de entrega automatizada de Clarive.</li>
              <li>El Corte Inglés: Automatiza todos los procesos de entrega de software para todas sus aplicaciones.</li>
            </ul>

          </div>
          <div className='coverOne-product__clarive-carousel'>
            <Carousel imgOne={coverOneImg} imgTwo={coverTwoImg} imgThree={coverThreeImg} />
            <div className='coverOne-product__clarive-carousel-description'>
              <span>Web: <a href="//clarive.com" target='_blank' rel='noreferrer'>www.clarive.com</a></span>
            </div>
          </div>
        </div>
        

      <Divider />

      {/* <div className='coverOne-product__gigantic'>
        Gigantic
      </div> */}
    </div>
  )
}

export default CoverOne;