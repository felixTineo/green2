import Header from './header';
import '../../layout/base.scss';
import Head from 'next/head';
import Router from 'next/router';
import PostRegister from '../postregister/postregister';
import StoreCont from '../store/store-cont';
import Store from '../store/store';

const Layout = ({ children }) => {
  return(
    <div className="lauout_main_cont">
      <Head>
        <link rel="stylesheet" href="/static/animate.min.css"/>
      </Head>
      <Header />
      <PostRegister />
      <StoreCont><Store /></StoreCont>
      {children}
      <div style={{ height: 0 }} />
    </div>
  );
};

export default Layout;
