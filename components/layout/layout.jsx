import Header from './header';
import '../../layout/base.scss';
import Head from 'next/head';
import Router from 'next/router';
import PostRegister from '../postregister/postregister';

const Layout = ({ children }) => {
  return(
    <div className="lauout_main_cont">
      <Head>
        <link rel="stylesheet" href="/static/animate.min.css"/>
      </Head>
      <Header />
      <PostRegister />
      {children}
      <div style={{ height: 0 }} />
    </div>
  );
};

export default Layout;
