import React from 'react';
import its from '../img/its.png'
import fb from '../img/fb.png'
import ig from '../img/ig.png'
import logo from '../img/logo.png'
import tw from '../img/tw.png'



function Noticias(){
  window.watsonAssistantChatOptions = {
    integrationID: "65346469-1623-4a86-9d1f-9e75bc62eab6", // The ID of this integration.
    region: "us-south", // The region your integration is hosted in.
    serviceInstanceID: "d20a2605-14a7-4970-af05-df98370ea1f1", // The ID of your service instance.
    onLoad: function(instance) { instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });
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
              <img className='banner' src={its}/>
            </div>
            <div className='tables'>
              <table>
                <tr>
                  <th>Como enfrentar las ITS?</th>
                </tr>
                <tr>
                  <td>
                  Las infecciones de transmisión sexual (ITS) son un problema de salud pública grave que afecta a personas de todas las edades, géneros y orientaciones sexuales. Sin embargo, hay muchas cosas que puedes hacer para protegerte de las ITS y enfrentarlas si las contraes.<br/>
                  <br/>Prevención <br/><br/>
                  La mejor manera de enfrentar las ITS es prevenirlas. Aquí hay algunos consejos: <br/>
                  <ul>
                    <li>Usa condones o barreras de látex durante todas las relaciones sexuales, vaginales, anales y orales.</li>
                    <li>Hazte pruebas de detección de ITS regularmente, especialmente si tienes múltiples parejas sexuales o si no conoces el historial sexual de tu pareja.</li>
                    <li>Ten una relación monógama con una pareja que también se haya hecho pruebas de detección de ITS.</li>
                    <li>Evita el uso de drogas inyectables.</li>
                    <li>Vacúnate contra el virus del papiloma humano (VPH) y la hepatitis B.</li>
                  </ul>
                  Tratamiento
                  <br/> <br/>
                  Si contraes una ITS, hay muchos tratamientos disponibles. Es importante que busques atención médica lo antes posible para evitar complicaciones. 
                  El tipo de tratamiento que recibas dependerá de la ITS que tengas.
                  <br/>
                  Algunos tratamientos comunes para las ITS incluyen:
                  <ul>
                    <li>Antibióticos: para tratar ITS bacterianas como la gonorrea, la clamidia y la sífilis.</li>
                    <li>Antivirales: para tratar ITS virales como el herpes simple, el VIH y el VPH.</li>
                    <li>Antifúngicos: para tratar ITS causadas por hongos, como la candidiasis.</li>
                    
                  </ul>
                  Apoyo emocional
                  <br/><br/>
                  Contraer una ITS puede ser una experiencia estresante y emocional. Es importante que busques apoyo de tus amigos, familiares o un profesional de la salud mental.

                  También hay muchos grupos de apoyo disponibles para personas con ITS. Estos grupos pueden ayudarte a conectarte con otras personas que están pasando por lo mismo y a obtener información y apoyo.

                  Recuerda que las ITS no son el fin del mundo. Hay muchos tratamientos disponibles y puedes recuperarte por completo.
                  </td>
                </tr>
                <hr/>
              </table>
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