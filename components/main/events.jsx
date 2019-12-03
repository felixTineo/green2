import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { eventType, ON_EVENT } from '../../store/actions';
import { color, font, themeBlue, themeRed } from '../../layout/main';
import Title from './title';
import AOS from 'aos';

const Main = () => {
  const [width, setWidth] = useState(0);
  const dispatch = useDispatch();
  useEffect(()=> {
    AOS.init();
    setWidth(window.innerWidth);
    return ()=> AOS.refresh();
  },[])
  return(
    <div className="main">
      <Title word="eventos" />
      <ul className="events">
        <li data-aos="fade-in" data-aos-delay={width > 768 ? '500' : ''} className="tree">
          <header>
            <h2>siembra</h2>
            <p>Regalale vida al planeta.</p>
          </header>
          <button onClick={()=> dispatch({ type: ON_EVENT, eventType: eventType.TREE })}>
            <span>participar</span>
            <div className="circle" />
          </button>
        </li>
        <li data-aos="fade-in" data-aos-delay={width > 768 ? '1000' : ''} className="cold">
        <header>
          <h2>ayuda</h2>
          <p>Las zonas andinas necesitan un corazon calido.</p>
        </header>
        <button onClick={()=> dispatch({ type: ON_EVENT, eventType: eventType.COLD })}>
          <span>participar</span>
          <div className="circle" />
        </button>
        </li>
        <li data-aos="fade-in" data-aos-delay={width > 768 ? '1500' : ''} className="angel">
        <header>
          <h2>adopta</h2>
          <p>Un angel llega en cualquier forma.</p>
        </header>
        <button onClick={()=> dispatch({ type: ON_EVENT, eventType: eventType.DOG })}>
          <span>participar</span>
          <div className="circle" />
        </button>
        </li>
      </ul>
      <style jsx>{`
        .main{
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background: linear-gradient(rgba(0, 0, 0, .1), #fff);
        }
        .events{
          list-style: none;
          height: 100%;
          margin: 0;
          padding: 0;
          flex-grow: 1;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        li{
          height: 80vh;
          //width: 30%;
          width: 100%;
          box-shadow: 5px 5px 15px rgba(0, 0, 0, .5);
          position: relative;
        }
        li header{
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: .5rem;
          color: #fff;
        }
        li:nth-child(2){
          margin: 2rem 0;
        }
        button{
          font-size: 1.5rem;
          background: transparent;
          border: none;
          color: #fff;
          position: absolute;
          bottom: .5rem;
          right: .5rem;
          text-transform: uppercase;
          transition: 250ms ease;
          overflow: hidden;
        }
        button span{
          position: relative;
          z-index: 2;
        }
        .circle{
          transition: 250ms ease;
          width: 0px;
          height: 0px;
          border-radius: 50%;
          background: rgba(0, 0, 0, .150);
          position: absolute;
          right: -40px;
          bottom: -40px;
        }
        button:focus{
          outline: none;
        }
        button:hover .circle{
          width: 100px;
          height:100px;
        }
        button:active{
          transform: scale(.98);
        }
        button:active .circle{
          width: 500px;
          height: 500px;
        }
        h2{
          text-transform: uppercase;
          font-family: ${font.title};
        }
        .tree{
          background: url(/static/arbol.jpg);
          background-size: cover;
          background-position: bottom center;
          background-repeat: no-repeat;
        }
        .tree h2, .tree p{
          background: ${color.prim};
        }
        .tree button{
          background: ${color.prim};
        }
        .cold{
          background: url(/static/calido.jpg);
          background-size: cover;
          background-position: bottom center;
          background-repeat: no-repeat;
        }

        .cold h2, .cold p{
          background: ${themeRed.prim};
        }
        .cold button{
          background: ${themeRed.prim};
        }
        .angel{
          background: url(/static/angel.jpg);
          background-size: cover;
          background-position: top center;
          background-repeat: no-repeat;
        }
        .angel h2, .angel p{
          background: ${themeBlue.prim};
        }
        .angel button{
          background: ${themeBlue.prim};
        }
        @media(min-width: 768px){
          .main{
            min-height: 80vh;
          }
          .events{
            flex-direction: row;
            height: 100%;
          }
          li{
            width: 30%;
            height: 78vh;
          }
          li:nth-child(2){
            margin: 0;
          }
        }
        @media(min-width: 992px){
          .main{
            min-height: 80vh;
            height: 80vh;
          }
          .events{
            flex-direction: row;
            height: 100%;
          }
          li{
            width: 30%;
            height: 100%;
          }
          li:nth-child(2){
            margin: 0;
          }
        }
      `}
      </style>
    </div>
  )
}


export default Main;
