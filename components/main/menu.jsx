import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ON_MAIN_NAV, ON_MAIN_LOGIN, ON_MAIN_REGISTER } from '../../store/actions';
import { color, font } from '../../layout/main';
import axios from 'axios';
import Link from 'next/link';

const Menu = () => {
  const dispatch = useDispatch();
  const visible = useSelector(state => state.main.nav.visible);
  const [perfil, setPerfil] = useState('');
  const onTest = async()=> {
    try{
      const res = await axios.get('/user/testLogin');
      setPerfil(res.data);
    }catch(e){
      console.log(e);
    }
  }
  useEffect(()=> {
    onTest();
  },[])
  return(
    <nav>
      <header>
        <p>Menu</p>
        <button title="Cerrar" onClick={()=> dispatch({ type: ON_MAIN_NAV })}>X</button>
      </header>
      <ul>
        <li>
          {
            perfil ? <Link href={`/perfil/${perfil._id}`}><a href={`/perfil/${perfil._id}`}>Perfil</a></Link> : <button onClick={()=> dispatch({ type: ON_MAIN_LOGIN })}>Login</button>
          }
        </li>
        <li>
          <button onClick={()=> dispatch({ type: ON_MAIN_REGISTER })}>Registro</button>
        </li>
        <li>
          <Link href='/landing'><a href="/landing">¿Que es GreenLink?</a></Link>
        </li>
        <li>
          <button>option</button>
        </li>
        <li>
          <button>option</button>
        </li>
      </ul>
      <style jsx>{`
        nav{
          background: ${color.gray};
          color: ${color.dark};
          width: ${visible ? '30%' : '0'};
          height: 100vh;
          transition: 500ms ease;
          overflow: hidden;
          position: relative;
          z-index: 160;
          flex: 2 0 1;
          position: sticky;
          top: 0;
          //top: 0;
          //right: 0;
        }
        header{
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: ${font.title};
          padding: 1rem;
        }
        header p{
          margin: 0;
          margin-left: 1rem;
          user-select: none;
        }
        button{
          background: transparent;
          border: none;
          color: ${color.dark};
        }
        button:focus{
          outline: none;
        }
        header button{
          font-size: 1.5rem;
          text-align: right;
        }
        ul{
          width: 100%;
          list-style: none;
          margin: 0;
          padding: 0;
          border-bottom: 1px solid #E6EAEA;
        }
        li button, a{
          width: 100%;
          border-top: 1px solid #E6EAEA;
          height: 70px;
          text-align: left;
          font-size: 1.4rem;
          padding-left: 2rem;
          transition: 250ms ease;
          text-decoration: none;
          color: #333;
          display: flex;
          align-items: center;
        }
        li button:hover, a:hover{
          background: ${color.light};
        }
        @media(max-width: 576px){
          nav{
            width: ${visible ? '100%' : '0'};
          }
        }
      `}
      </style>
    </nav>
  );
}

export default Menu;
