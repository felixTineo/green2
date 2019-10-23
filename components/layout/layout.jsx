import Header from './header';
import '../../layout/base.scss';
import Head from 'next/head';
import Router from 'next/router';
import PostRegister from '../postregister/postregister';
import StoreCont from '../store/store-cont';
import Store from '../store/store';
import FloatingNotes from '../floating-notes/floating-notes';
import Vault from '../vault/vault';

const Layout = ({ children }) => {
  return(
    <div className="lauout_main_cont" style={{ position: 'relative' }}>
      <Head>
        <link rel="stylesheet" href="/static/animate.min.css"/>
      </Head>
      <Header />
      <PostRegister />
      <StoreCont><Store /></StoreCont>
      <FloatingNotes />
      <Vault />
      {children}
      <div style={{ height: 0 }} />
    </div>
  );
};

export default Layout;
