import Rect, { useEffect } from 'react';
import { color, font } from '../../layout/main';
import Title from './title';
import AOS from 'aos';
import persons from '../../test/persons';
import Link from 'next/link';
import uuid from 'uuid/v1';

const Embajadores = () => {

  return(
    <div className="main">
      <div data-aos="fade-in" data-aos-delay="350" className="info">
        <h1>salva el planeta</h1>
        <p>Participa en nuestros eventos, auspicia negocios locales, recibe regalos especiales. Se uno de nuestros embajadores como:</p>
        <ul>
          {
            persons(4).map(person => <li key={uuid()}><button><img src={person.perfilImg} alt=""/><p>{`${person.fullName}`}</p></button></li>)
          }
        </ul>
      </div>
      <div data-aos="fade-left" data-aos-delay="350" className="woman">
        <Link href="/login">
          <button>Registro</button>
        </Link>
        <img src="/static/cusco.png" alt=""/>
      </div>
      <div className="circle">
        <div className="inner_circle">
          <div className="inner_circle"></div>
        </div>
      </div>
    <style jsx>{`
      .main{
        display: flex;
        flex-direction: column;
        padding-top: 2rem;
        width: 100%;
        //height: 60vh;
        background: linear-gradient(rgba(0, 0, 0, .1), #fff);
        position: relative;
      }
      .circle{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 65vh;
        height: 65vh;
        border-radius: 50%;
        border: 1px solid rgba(0, 0, 0, .2);
        position: absolute;
        top: 0;
        left: 40%;
        z-index: -1;
      }
      .inner_circle{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50vh;
        width: 50vh;
        border-radius: 50%;
        border: 1px solid rgba(0, 0, 0, .2);
      }
      .inner_circle div{
        width: 30vh;
        height: 30vh;
      }
      .info{
        width: 100%;
        //flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
      }
      .info h1{
        text-transform: uppercase;
        font-family: ${font.title};
        margin: 0;
        //font-size: 5rem;
        font-size: 3.5rem;
        //width: 60%;
        text-align: center;
        width: 100%;
        color: ${color.dark};
        background: url(/static/cusco.jpg)center center no-repeat;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .info p{
        //width: 60%;
        width: 100%;
        text-align: center;
      }
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: left center;
      }
      .woman{
        //width: 50%;
        width: 100%;
        justify-content: flex-end;
        position: relative;
      }
      .woman button{
        position: absolute;
        right: 1rem;
        bottom: 1rem;
        transition: 250ms ease;
        background: transparent;
        border: 2px solid ${color.light};
        color: ${color.light};
        font-size: 1.5rem;
      }
      .woman button:focus{
        outline: none;
      }
      .woman button:hover{
        background: ${color.light};
        border-color: ${color.prim};
        color: ${color.prim};
      }
      .info ul{
        display: flex;
        justify-content: space-around;
        //justify-content: space-between;
        list-style: none;
        margin: 0;
        margin-bottom: 2rem;
        padding: 0;
        width: 100%;
      }
      .info ul button{
        background: transparent;
        border: none;
        color: ${color.dark};
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      .info ul button img{
        //width: 70px;
        //height: 70px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
        object-position: center;
      }
      .info ul button p{
        margin: 0;
        //width: 100px;
        font-size: 11px;
      }
      @media(min-width: 768px){
        .main{
          flex-direction: row;
          height: 60vh;
          padding-top: 0;
        }
      }
      @media(min-width: 992px){
        .info ul button img{
          width: 70px;
          height: 70px;
        }
      }
    `}
    </style>
    </div>
  )
}

const Main = () => {
  useEffect(()=> {
    AOS.init();
    return ()=> AOS.refresh();
  },[])
  return(
    <div className="main">
      <Title word="ebajadadores" />
      <Embajadores />
    </div>
  )
}

export default Main;
