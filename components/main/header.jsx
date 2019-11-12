import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ON_MAIN_NAV } from '../../store/actions';
import { color, font } from '../../layout/main';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Logo = ({ header }) => {
  return(
    <Link href="/main">
      <a href="" title="Inicio">
        <p>GREEN</p>
        <span>LINK</span>
      <style jsx>{`
        a, a:hover{
          text-decoration: none;
          color: ${header ? color.prim : color.light};
          margin-left: 1rem;
        }
        a{
          display: flex;
          font-family: ${font.title};
          font-size: ${header ? '1rem' : '2rem'};
          transition: 250ms ease;
        }
        p{
          margin: 0;
        }
        span{
          color: transparent;
          -webkit-text-stroke: 1px ${header ? color.prim : color.light};
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
  const [header, setHeader] = useState(false);
  useEffect(()=> {
    if(window.scrollY > 10){
      setHeader(true);
    }
  })
  useEffect(()=> {
    window.onscroll = () => {
      if(window.scrollY > 10){
        setHeader(true);
      } else {
        setHeader(false);
      }
    }
  },[]);
  return(
    <header className="animated fadeIn">
      <Logo header={header} />
      <button  onClick={()=> dispatch({ type: ON_MAIN_NAV })}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <style jsx>{`
        header{
          background: ${header ? '#fff' : 'transparent'};
          padding: .8%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 150;
          transition: height 250ms linear;
          box-shadow: 0 2px 15px rgba(0, 0, 0, .3);
        }
        button{
          background: transparent;
          width: ${header ? '35px' : '45px'};
          height: ${header ? '35px' : '45px'};
          border: none;
          color: ${header ? color.prim : 'rgba(255, 255, 255, .7)'};
          transition: 250ms ease;
          border: ${header ? `1px solid ${color.prim}` : 'none'};
        }
        button:focus{
          outline: none;
        }
        button:hover{
          color: #fff;
          background: ${header ? color.prim : ''};
        }
      `}
      </style>
    </header>
  )
}

export default Header;
