import React, { useState, useEffect, useRef, useReducer } from 'react';
import { color, font, greenGradient } from '../../layout/main';
import Title from './title';
import { TweenMax } from 'gsap';

const images = [
  {
    img: '/static/bakery.jpg',
    msg: 'influye'
  },
  {
    img: '/static/market.jpg',
    msg: 'auspicia',
  },
  {
    img: '/static/drug.jpg',
    msg: 'beneficiate'
  }
];

const Cont = ({ img, msg, id }) => {

  return(
    <div id={id} className="main animated slideInRight">
      <h1>{msg}</h1>
      <style jsx>{`
        .main{
          height: 100%;
          background: url(${img})top center no-repeat;
          background-size: cover;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: flex-end;
        }
        h1{
          font-size: 8rem;
          color: #fff;
          margin: 0;
          font-family: ${font.title};
          //text-shadow: 0 0 15px ${color.prim};
          position: relative;
        }
      `}
      </style>
    </div>
  )
}

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useReducer((state, next) => ({ ...state, ...next }),{
    bakery: true,
    market: false,
    drug: false,
  })
  useEffect(()=> {
    const interval = setInterval(function () {
      if(index === 0){
        document.getElementById('bakery').classList.remove('slideInRight');
        document.getElementById('bakery').classList += ' slideOutLeft';
        setVisible({ market: true });
        setTimeout(()=> setVisible({ bakery: false }), 1000);
        setIndex(1)
      } else if(index === 1){
        document.getElementById('market').classList.remove('slideInRight');
        document.getElementById('market').classList += ' slideOutLeft';
        setVisible({ drug: true });
        setTimeout(()=> setVisible({ market: false }), 1000);
        setIndex(2)
      } else {
        document.getElementById('drug').classList.remove('slideInRight');
        document.getElementById('drug').classList += ' slideOutLeft';
        setVisible({ bakery: true });
        setTimeout(()=> setVisible({ drug: false }), 1000);
        setIndex(0)
      }
      console.log(index);
    }, 5000);
    return ()=> clearInterval(interval);
  },[visible])
  const { bakery, market, drug } = visible;
  return(
    <div className="main">
      { bakery && <Cont id="bakery" {...images[0]} /> }
      { market && <Cont id="market" {...images[1]} /> }
      { drug && <Cont id="drug" {...images[2]} /> }
      <div className="girl">
        <img src='/static/embajadora.png' alt=""/>
        { index === 0 && <h1 className="animated fadeIn delay-1s">in<span>flu</span>ye</h1> }
        { index === 1 && <h1 className="animated fadeIn delay-1s">au<span>spi</span>cia</h1> }
        { index === 2 && <h1 className="animated fadeIn delay-1s">ben<span>efi</span>ciate</h1> }
      </div>
      <button className="btn_register">registro</button>
      <style jsx>{`
        .main{
          position: relative;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
        .girl{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: flex-end;
        }
        img{
          width: 30%;
          position: absolute;
          bottom: 0;
          margin: auto;
          left: -25%;
          right: -25%;
        }
        h1{
          font-size: 8rem;
          color: #fff;
          margin: 0;
          font-family: ${font.title};
          position: relative;
          z-index: 50;
          color: transparent;
        }
        h1 span{
          color: #fff;
          text-shadow: 0 0 15px ${color.prim};
        }
        button.btn_register{
          background: ${color.prim};
          border: 2px solid ${color.prim};
          color: #fff;
          font-size: 2rem;
          text-transform: uppercase;
          transition: 250ms ease;
          position: absolute;
          right: 1rem;
          top: 1rem;
          z-index: 50;
          font-weight: 300;
        }
        button.btn_register:focus{
          outline: none;
        }
        button.btn_register:hover{
          border-color: ${color.light};
          color: ${color.light};
        }
      `}
      </style>
    </div>
  )
}

const Main = () => {

  return(
    <div className="main">
      <header>
        <Title word="embajadores" />
      </header>
      <div className="body">
        <Carousel />
      </div>
      <style jsx>{`
        .main{
          height: 70vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border-top: 3px solid ${color.prim};
          border-bottom: 3px solid ${color.prim};
        }
        .body{
          position: relative;
          flex-grow: 1;
        }
      `}
      </style>
    </div>
  )
}

export default Main;
