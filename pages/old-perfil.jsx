import React, { useEffect, useCallback, useState } from 'react';
import router, { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../components/layout/layout';
import { ON_LOGIN, ON_USER, ON_GREENINFO } from '../store/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExpandArrowsAlt,
  faArrowCircleLeft,
  faUserPlus,
  faHeart,
  faGift,
  faComment,
  faHome,
  faShare,
  faMapMarkerAlt,
  faDollarSign,
  faSchool,
  faMailBulk,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import './perfil.scss';
import classnames from 'classnames';

const GreenInfo = () => {
  const router = useRouter();
  const info = useSelector(state => state.greenpost.info);
  const user = useSelector(state => state.user);
  const green = user.greenPost;

  return(
    <div className={classnames({ greeninfo_main_cont:true, greeninfo_visible: info })}>
      <div className="info_body">
        <div className="user_info">
          <img src={user.perfilImg} alt=""/>
          <ul className="user_name_info">
            <li><span>{user.name}</span> {user.lastName}</li>
            <li><button title="Enviar Solicitud De Amistad"><FontAwesomeIcon icon={faUserPlus} /></button></li>
          </ul>
          <p>Desarrollador web. Venezuela, Cumana</p>
          <ul className="post_info">
            <li style={{ marginLeft: 0 }}>
              <FontAwesomeIcon icon={faHeart} />
              <p>+{green.likes.length}</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faGift} />
              <p>+50</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faComment} />
              <p>+50</p>
            </li>
          </ul>
        </div>
      </div>
      <footer className="info_nav">
        <p>GreenPost</p>
        <ul>
          <li>
            <button title="Inicio"><FontAwesomeIcon icon={faHome} /></button>
          </li>
          <li>
            <button title="Deseo"><FontAwesomeIcon icon={faGift} /></button>
          </li>
          <li>
            <button title="Reaccionar"><FontAwesomeIcon icon={faHeart} /></button>
          </li>
          <li>
            <button title="Comentar"><FontAwesomeIcon icon={faComment} /></button>
          </li>
          <li>
            <button title="Compartir"><FontAwesomeIcon icon={faShare} /></button>
          </li>
          <li>
            <button title="Pantalla Completa"><FontAwesomeIcon icon={faExpandArrowsAlt} /></button>
          </li>
        </ul>
      </footer>
    </div>
  )
}

const BtnInfo = () => {
  const info = useSelector(state => state.greenpost.info);
  const dispatch = useDispatch();

  return(
    <button className={classnames({ btn_info: true, btn_info_rotate: info })} onClick={()=> dispatch({ type: ON_GREENINFO })}>
      <FontAwesomeIcon icon={faArrowCircleLeft} />
    </button>
  );
}

const GreenPost = () => {
  const green = useSelector(state => state.user.greenPost);
  //const green = posts.find(post => post.green === true);
  const info = useSelector(state => state.greenpost.info);

  return(
    <div className="greenpost_main_cont" style={{ background: `url(${green.img})top center no-repeat` }} >
      <BtnInfo />
      <GreenInfo />
    </div>
  );
};

const UserNav = () => {

  return(
    <ul>
      <li>
        <button>informacion</button>
        <div className="btn_line" />
      </li>
      <li>
        <button>publicasiones</button>
        <div className="btn_line" />
      </li>
      <li>
        <button>muro</button>
        <div className="btn_line" />
      </li>
      <li>
        <button>chat</button>
        <div className="btn_line" />
      </li>
      <li>
        <button>eventos</button>
        <div className="btn_line" />
      </li>
    </ul>
  )
}

const InfoCont = () => {
const user = useSelector(state => state.user);

  return(
    <div>
      <ul className="spaceinfo_main_cont">
        <li>
          <button title="Cambiar Ubicacion">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <span>Ubicacion: </span>
            <strong>{user.actualCity}</strong>
          </button>
        </li>
        <li>
          <button title="Cambiar Trabajo">
            <FontAwesomeIcon icon={faDollarSign} />
            <span>Trabajo: </span>
            <strong>{user.job || 'la pasiencia'}</strong>
          </button>
        </li>
        <li>
          <button title="Cambiar Escuela">
            <FontAwesomeIcon icon={faSchool} />
            <span>Escuela: </span>
            <strong>{user.school || 'escuela de la vida' }</strong>
          </button>
        </li>
        <li>
          <button title="Ocultar Correo">
            <FontAwesomeIcon icon={faMailBulk} />
            <span>Correo: </span>
            <strong>{user.mail}</strong>
          </button>
        </li>
        <li>
          <button title="Cambiar Telefono">
            <FontAwesomeIcon icon={faPhone} />
            <span>Telefono: </span>
            <strong>{user.phone || '555-55-55-55'}</strong>
          </button>
        </li>
      </ul>
    </div>
  )
};

const UserCont = () => {
  const user = useSelector(state => state.user);
  return(
    <div className="user_cont">
      <img src={user.perfilImg} alt=""/>
      <div className="user_fullname">
        <p>{user.name}</p>
        <span>{user.lastName}</span>
        <button title="Enviar Solicitud De Amistad"><FontAwesomeIcon icon={faUserPlus} /></button>
      </div>
      <InfoCont />
      <button className="follow_user">seguir</button>
      <svg id="arrow_right" className="arrow_right" viewBox="0 0 60 70" width="60" height="70">
        <polyline stroke="#8bb940" fill="transparent" points="20,0 50,35 20,70" />
      </svg>
      <svg id="arrow_right_resp" viewBox="0 0 60 70" width="60" height="70">
        <polyline stroke="#8bb940" fill="transparent" points="20,0 50,35 20,70" />
      </svg>
    </div>
  );
}

const HomeSection = () => {

  return(
    <div className="userspace_home">
      <header>
        <h1>publicasiones <span>recientes</span></h1>
      </header>
    </div>
  )
}

const UserSpace = () => {

  return(
    <main className="space_main_cont container-fluid">
      <div className="row">
        <nav className="space_nav col-12">
          <UserNav />
        </nav>
        <div className="main_user_info col-12 p-0 col-md-4" style={{ paddingLeft:0 }}>
          <UserCont />
        </div>
        <div className="sections_main_cont col-12 col-md-8">
          <HomeSection />
        </div>
      </div>
    </main>
  )
}

const Perfil = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const nav = useSelector(state => state.nav);
  useEffect(() => {
    const user = router.query;
    if(!Array.isArray(user.posts)) user.posts = JSON.parse(user.posts);
    if(typeof(user.greenPost) !== 'object') user.greenPost = JSON.parse(user.greenPost);
    dispatch({ type: ON_LOGIN, option: true });
    dispatch({ type: ON_USER, user });
    dispatch({ type: ON_GREENINFO });
  }, []);

  return(
    <Layout>
      <div className="perfil_main_cont">
        <GreenPost />
      </div>
    </Layout>
  );
}
/*
<GreenPost />
<UserSpace />
*/
export default Perfil;
