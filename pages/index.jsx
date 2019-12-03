import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Layout from '../components/main/layout';
import Hero from '../components/main/hero';
import GreenPost from '../components/main/greenpost';
//import MainSection from '../components/main/main';
//import Embajadores from '../components/main/embajador';
//      <Embajada />
import Embajada from '../components/main/embajada';
import Events from '../components/main/events';
import Post from '../components/layout/post';

import Title from '../components/main/title';
import { color, font } from '../layout/var';
import AOS from 'aos';
import { TweenMax } from 'gsap';

const Ale = () => {
  const arr = Array(30).fill(0);
  useEffect(()=> {
    AOS.init;
    TweenMax.to('.love', 7, {
      x: ()=> Math.floor(Math.random() * 10) % 2 === 0 ? Math.random() * 1000 : -(Math.random() * 1000),
      y: ()=> Math.floor(Math.random() * 10) % 2 === 0 ? Math.random() * 1000 : -(Math.random() * 1000),//-(Math.random() * 1000),
      //opacity: 1,
      repeat: -1,
    })
  },[])
  return(
    <div className="main">
      <Title word="Green Star" />
      <div data-aos="fade-in" data-aos-delay="500" className="cont">
        <div className="image">
          {
            arr.map((item, index) => {
                switch(Math.floor(Math.random() * 5)) {
                  case 0:
                    return <svg className="love" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M368 96h-48V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56v400c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24v-42.11l80.606-35.977C429.396 365.063 448 336.388 448 304.86V176c0-44.112-35.888-80-80-80zm16 208.86a16.018 16.018 0 0 1-9.479 14.611L320 343.805V160h48c8.822 0 16 7.178 16 16v128.86zM208 384c-8.836 0-16-7.164-16-16V144c0-8.836 7.164-16 16-16s16 7.164 16 16v224c0 8.836-7.164 16-16 16zm-96 0c-8.836 0-16-7.164-16-16V144c0-8.836 7.164-16 16-16s16 7.164 16 16v224c0 8.836-7.164 16-16 16z"/></svg>
                  case 1:
                    return <svg className="love" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"/></svg>
                  case 2:
                    return <svg className="love" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 512"><path d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"/></svg>
                  case 3:
                    return <svg className="love" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M372 64h-79c-10.7 0-16 12.9-8.5 20.5l16.9 16.9-80.7 80.7c-22.2-14-48.5-22.1-76.7-22.1C64.5 160 0 224.5 0 304s64.5 144 144 144 144-64.5 144-144c0-28.2-8.1-54.5-22.1-76.7l80.7-80.7 16.9 16.9c7.6 7.6 20.5 2.2 20.5-8.5V76c0-6.6-5.4-12-12-12zM144 384c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"/></svg>
                  case 4:
                    return <svg className="love" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm184 248c0 31.93-8.2 61.97-22.57 88.17L280 240.63V74.97c86.23 15.21 152 90.5 152 181.03zM216 437.03c-33.86-5.97-64.49-21.2-89.29-43.02L216 322.57v114.46zm64-114.46L369.29 394c-24.8 21.82-55.43 37.05-89.29 43.02V322.57zm-64-247.6v165.66L86.57 344.17C72.2 317.97 64 287.93 64 256c0-90.53 65.77-165.82 152-181.03z"/></svg>
                }
            })
          }
        </div>
        <div className="info">
          <h1>Luis <span>Huamani</span></h1>
          <ul>
            <li>Trabajo: Ingeniero minero.</li>
            <li>Hobbies: Proteger el medio ambiente, Hacer Porno, Salir con Venecas, Hacer sacapuntas con su jefe, Atascarse en embotellamientos.</li>
            <li>Religion: Encantador de serpientes.</li>
            <li>Apodos: El Destructor de la luz, Pastelito(solo su mama), El caballero de la noche.</li>
            <li>Discipulos: kim jong-un, El papa francisco, Chuck Norris, Steve Jobs(QEPD), Elon musk.</li>
            <li>Fortuna: Valorada en mas de mil trillones de greencoins.</li>
            <li>Personajes inspirados en el: Goku, Batman, James bond, Sheldon cooper, Bart Simpson, Thanos, Harry potter, Jack Bauer, Rambo, darth vader.</li>
            <li>Parejas conocidas: Scarlett Johanson, Kara delivigne, Mia Kalifa, la tigresa del oriente, El clan kardashian completo(incluyendo a la mama y al "papa" o lo que sea).</li>
            <li>Composiciones Musicales: Stairway to heaven, la quinta melodia de bethoben, despacito, todos los numero uno de los beatles y bob dylan, el intro del chavo del 8</li>
            <li>Frase Celebre: "Luke, Yo soy tu padre"</li>
          </ul>
        </div>
      </div>
      <style jsx>{`
        .cont{
          //display: flex;
          //flex-direction: column;
          min-height: 100vh;
        }
        .image{
          background: url(/static/luis.jpg)center center no-repeat;
          background-size: cover;
          width: 100%;
          height:calc(100vh * 70 / 100);
          position: relative;
        }
        .info{
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 .5rem;
        }
        .info h1{
          color: ${color.prim};
          font-weight: 900;
        }
        .info span{
          color: transparent;
          -webkit-text-stroke: 1px ${color.prim};
        }
        .info p{
          text-align: justify;
        }
        svg{
          width: 30px;
          height: 30px;
          fill: ${color.prim};
          position: absolute;
          bottom: 50%;
          left: 50%;
          //opacity: 0;
        }
        @media(min-width: 576px){
          .cont{
            display: flex;
            height: 80vh;
          }
          .image, .info{
            width: 50%;
            height: 100%;
            overflow: hidden;
          }
          .info{
            justify-content: center;
            padding: 1rem;
            align-items: flex-start;
          }
          svg{
            width: 50px;
            height: 50px;
          }
        }
      `}
      </style>
    </div>
  )
}

const Main = () => {
  const postVisible = useSelector(state => state.post.visible);
  return(
    <Layout>
      <Hero />
      <Embajada />
      <Events />
      <Ale />
      <GreenPost />
      { postVisible && <Post /> }
    </Layout>
  )
}

export default Main;
