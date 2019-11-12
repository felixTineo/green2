import React, { useState, useEffect } from 'react';
import { color, font } from '../../layout/main';
import uuid from 'uuid/v1';
import TweenMax from 'gsap';
import { posts as myPosts } from '../../test/posts';
import AOS from 'aos';

const Word = ({ word, id }) => {
  useEffect(()=> {
    //TweenMax.to(`#${id}`, 2, { x: "50px", opacity: 1 });
  },[])
  return (
    <>
      <li id={id} className="animated slideInLeft">{word}</li>
      <style jsx>{`
        li{
          flex-shrink: 0;
          margin: 0 1rem;
          transition: 250ms ease;
        }
      `}
      </style>
    </>
  )
}

const Title = () => {
  const [queque, setQueque] = useState(Array(15).fill("GREENPOST'S"));
  return(
    <div className="shadow">
      <ul id="cartext">
        {
          queque.map((word, i) => <li className="cartext">{word}</li>)
        }
      </ul>
      <style jsx >{`
        ul{
          margin: 0;
          padding: 1rem;
          color: ${color.prim};
          display: flex;
          align-items: center;
          transition: 250ms ease;
          animation-name: myAni;
          animation-duration: 15s;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          transform: translateX(-100px);
        }
        li{
          flex-shrink: 0;
          margin: 0 1rem;
          transition: 250ms ease;
        }
        @keyframes myAni{
          0%{
            transform: translateX(-100px);
          }
          50%{
            transform: translateX(-3px);
          }
          100%{
            transform: translateX(-100px);
          }
        }
      `}
      </style>
    </div>
  )
}

const Post = ({ img, title, subTitle, history }) => {

  return(
    <div className="main">
      <div className="cont shadow">
        <div data-aos="fade-right" className="image">
          <img src={img} alt=""/>
        </div>
        <div data-aos="fade-left" className="info">
          <div className="info_cont">
            <header>
              <h3 data-aos="fade-in">{title}</h3>
              <small>{subTitle}</small>
            </header>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, adipisci! Quis dolor ratione minima recusandae illum vel quibusdam nemo ut magni minus consequatur omnis aspernatur autem, quia ea repudiandae officiis.</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .main{
          height: 100vh;
          padding: 2.5rem 0;
          display: flex;
          scroll-snap-type: y;
        }
        .cont{
          display: flex;
        }
        .info{
          width: 40%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 70%;
        }
        .info_cont{
          width: 80%;
        }
        .info h3{
          color: ${color.prim};
          //line-height: 1rem;
          margin: 0;
          font-size: 2.5rem;
        }
        .image{
          width: 60%;
        }
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
      `}
      </style>
    </div>
  )
}

const Main = () => {
  const [posts, setPosts] = useState(myPosts);
  useEffect(()=> {
    const aos = AOS;
    aos.init({
      delay: 250,
    });
    return ()=> aos.refresh();
  },[])
  return(
    <div>
      <Title />
      {
        posts.map(post => <Post key={uuid()} {...post} />)
      }
      <style jsx>{`
        div{

        }
      `}
      </style>
    </div>
  )
}

export default Main;
