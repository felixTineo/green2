  import Header from './header';
import { useSelector } from 'react-redux';
import '../../layout/base.scss';
import Head from 'next/head';
import Router from 'next/router';
import PostRegister from '../postregister/postregister';
import StoreCont from '../store/store-cont';
import Store from '../store/store';
import FloatingNotes from '../floating-notes/floating-notes';
import Vault from '../vault/vault';
import Confirm from '../dialogs/confirm';
import Private from '../chat/private'
import Post from './post';

const Layout = ({ children }) => {
  const post = useSelector(state => state.post);
  return(
    <div className="lauout_main_cont" style={{ position: 'relative' }}>
      <Head>
        <link rel="stylesheet" href="/static/animate.min.css"/>
        <link href="https://fonts.googleapis.com/css?family=Sansita|Open+Sans|Pacifico&display=swap" rel="stylesheet"/>
      </Head>
      <Header />
      <PostRegister />
      <StoreCont><Store /></StoreCont>
      <FloatingNotes />
      <Vault />
      <Confirm />
      { post.visible && <Post /> }
      {children}
      <footer className="col-10 p-0">
        <Private />
      </footer>
      <style jsx>{`
        footer{
          position: fixed;
          width: 100%;
          bottom: -28px;
          background: #8bb940;
          height: 28px;
        }
      `}
      </style>
    </div>
  );
};

export default Layout;
