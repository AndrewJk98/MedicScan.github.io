import React from 'react';
import banner from '../img/banner.jpg'
import fb from '../img/fb.png'
import ig from '../img/ig.png'
import logo from '../img/logo.png'
import tw from '../img/tw.png'


function Noticias(){
    return (
        <section className="layout">
          <div className="header" >
            <h1 id='news'>
              Noticias
            </h1>
            <div id='buttons'>
              <button href='' type='submit'>
                Estoy suscrito
              </button>
              <div>
              <img className='logo' src={logo}/>
              </div>
            </div>
          </div>
          <div className="main">
            <div>
              <img className='banner' src={banner}/>
            </div>
            
          </div>
          <div className="footer">
            <div className='contactanos'>
                <h3>Contactanos</h3>
                <a href=''>
                    <img className='logos' src={fb}/>
                </a>
                <a href=''>
                    <img className='logos' src={tw}/>
                </a>
                <a href=''>
                    <img className='logos' src={ig}/>
                </a>
            </div>
            <div className='hacemos'>
                <h3>¿Que hacemos?</h3>
                <p>Nosotros somos una empresa como primaria instancia para calcular
                    <br/>
                    el estado de nuestros clientes que cuentan con dudas sobre si
                    <br/> 
                    tienen los primeros sintomas de una ETS, por lo que ayudamos
                    <br/>
                    con consejos y ayuda profesional de manera online
                </p>
            </div>
            <div className='conocenos'>
                <h3>¿Quieres conocernos?</h3>
                <p>Ven a nuestra sede en Jr Carabaya 2198, 
                <br/>Centro de lima, Lima</p>

            </div>
          </div>
        </section>
        );
}

export default Noticias;