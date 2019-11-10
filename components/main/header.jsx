import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ON_MAIN_NAV } from '../../store/actions';
import { color, font } from '../../layout/main';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Logo = () => {
  return(
    <Link href="/main">
      <a href="" title="Inicio">
        <p>GREEN</p>
        <span>LINK</span>
      <style jsx>{`
        a, a:hover{
          text-decoration: none;
          color: ${color.light};
          margin-left: 1rem;
        }
        a{
          display: flex;
          font-family: ${font.title};
          font-size: 2rem;
        }
        p{
          margin: 0;
        }
        span{
          color: transparent;
          -webkit-text-stroke: 1px ${color.light};
        }
      `}
      </style>
      </a>
    </Link>
  )
}

const Header = () => {
  const bars = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"/></svg>
  const dispatch = useDispatch();
  return(
    <header className="animated fadeIn">
    {console.log('render')}
      <Logo />
      <button  onClick={()=> dispatch({ type: ON_MAIN_NAV })}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <style jsx>{`
        header{
          background: transparent;
          padding: .8%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 150;
        }
        button{
          background: transparent;
          width: 45px;
          height: 45px;
          border: none;
          color: rgba(255, 255, 255, .7);
          transition: 250ms ease;
        }
        button:focus{
          outline: none;
        }
        button:hover{
          color: #fff;
        }
      `}
      </style>
    </header>
  )
}

export default Header;
