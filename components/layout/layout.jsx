import Header from './header';
import '../../layout/base.scss';
import Head from 'next/head';

const Layout = ({ children }) => {
  return(
    <div className="lauout_main_cont">
      <Head>
        <link rel="stylesheet" href="/static/animate.min.css"/>
      </Head>
      <Header />
      {children}
      <div style={{ height: 3000 }} />
    </div>
  );
};

export default Layout;
