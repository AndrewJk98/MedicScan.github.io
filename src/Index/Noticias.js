import React from 'react';


function Noticias(){
    return (
        <section className="layout">
          <div className="header">
            <h1>
              ¿Como saber si tengo ETS?
            </h1>
            <div>
              <button id='no' href="" >Noticias</button>
              <button href='' type='submit'>
                Estoy suscrito
              </button>
              <div>
              <img className='logo' src={require('../img/logo.png')}/>
              </div>
            </div>
          </div>
          <div className="main">
            <div>
              <img className='banner' src={require('../img/banner.jpg')}/>
            </div>
            
          </div>
          <div className="footer">
            <div className='contactanos'>
                <h3>Contactanos</h3>
                <a href=''>
                    <img className='logos' src={require('../img/fb.png')}/>
                </a>
                <a href=''>
                    <img className='logos' src={require('../img/tw.png')}/>
                </a>
                <a href=''>
                    <img className='logos' src={require('../img/ig.png')}/>
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