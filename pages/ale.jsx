import React, { useState, useEffect } from 'react';
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
  const arr = Array(20).fill(0);
  useEffect(()=> {
    AOS.init;
    TweenMax.to('.love', 10, {
      x: ()=> Math.floor(Math.random() * 10) % 2 === 0 ? Math.random() * 300 : -(Math.random() * 300),
      y: ()=> -(Math.random() * 300),
      opacity: 1,
      repeat: -1,
    })
  },[])
  return(
    <div className="main">
      <Title word="La mas hermosa" />
      <div data-aos="fade-in" data-aos-delay="500" className="cont">
        <div className="image">
          {
            arr.map(item => (
              <svg className="love" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"/></svg>
            ))
          }
        </div>
        <div className="info">
          <h1>Alejandra <span>Rojas</span></h1>
          <p>La usuaria mas Hermosa de esta y de todas las redes sociales que puedan existir y mas importante que eso, la mujer mas hermosa del mundo en el corazón de felix tineo coo-creador de GreenLink. TE AMO!!</p>
        </div>
      </div>
      <style jsx>{`
        .cont{
          //display: flex;
          //flex-direction: column;
          height: 100vh;
        }
        .image{
          background: url(/static/alejandra.jpg)top center no-repeat;
          background-size: cover;
          width: 100%;
          height:70%;
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
          fill: red;
          position: absolute;
          bottom: 0;
          left: 50%;
          opacity: 0;
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
