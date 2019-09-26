import Header from './header';
import '../../layout/base.scss';
import Head from 'next/head';
import Router from 'next/router';

const Layout = ({ children }) => {
  return(
    <div className="lauout_main_cont">
      <Head>
        <link rel="stylesheet" href="/static/animate.min.css"/>
      </Head>
      <Header />
      {children}
      <div style={{ height: 0 }} />
    </div>
  );
};

export default Layout;
