import React from 'react';
import { useSelector } from 'react-redux';
import '../../node_modules/bootstrap/scss/bootstrap.scss';
import Head from 'next/head';
import Header from './header';
import Menu from './menu';

const Modal = () => {
  const menu = useSelector(state => state.main.nav.visible);
  return(
    <div className="modal">
      <style jsx>{`
        .modal{
          display: ${menu ? 'block' : 'none'};
          position: fixed;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background: rgba(0, 0, 0, .5);
          z-index: 150;
          content: " ";
          transition: 250ms ease;
        }
      `}
      </style>
    </div>
  )
}

const Layout = ({ children }) => {
  return(
    <div>
      <Head>
        <link rel="stylesheet" href="/static/animate.min.css"/>
      </Head>
      <main>
        <Header />
        {children}
      </main>
      <Menu />
      <Modal />
      <style jsx>{`
        div{
          display: flex;
          width: 100vw;
          position: relative;
        }
        main{
          width: 100%;
          position: relative;
          flex: 1 1 0;
          overflow: hidden;
        }
      `}
      </style>
    </div>
  )
}

export default Layout;
