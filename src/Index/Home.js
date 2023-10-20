import React from 'react';
import { Link } from 'react-router-dom';
import Noticias from './Noticias';
import logo from '../img/logo.png';
import banner from '../img/banner.jpg';
import ig from '../img/ig.png';
import fb from '../img/fb.png';
import tw from '../img/tw.png';


function Home(){
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
              <img className='logo' src={logo}/>
              </div>
            </div>
          </div>
          <div className="main">
            <div>
              <img className='banner' src={banner}/>
            </div>
            <div className='test'>
                <h2 >Inicia este TEST</h2>
                <p>Un test para el Éxito en el Tratamiento (ETS) es una prueba 
                    médica que se realiza para detectar la presencia de enfermedades 
                    de transmisión sexual, como el VIH, la sífilis, la gonorrea, la 
                    clamidia y otras infecciones. Estas pruebas son cruciales para el 
                    diagnóstico temprano y el tratamiento de ETS, lo que contribuye a 
                    la prevención de la propagación de estas infecciones. Los tests para 
                    ETS pueden involucrar la toma de muestras de sangre, orina, secreciones 
                    genitales u otros tipos de muestras biológicas, dependiendo de la infección 
                    específica que se esté buscando. Las pruebas son confidenciales y 
                    generalmente se llevan a cabo en entornos médicos o clínicas especializadas, 
                    y los resultados son compartidos con el paciente de manera privada y confidencial. 
                    La detección temprana y el tratamiento adecuado de las ETS son fundamentales para 
                    la salud sexual y la prevención de complicaciones a largo plazo.</p>
              <button className='boton' href='' type='submit'>
                Iniciar TEST
              </button>
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

export default Home;