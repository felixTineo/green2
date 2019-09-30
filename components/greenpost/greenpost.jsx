import React, {} from 'react';
import './greenpost.scss';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ON_GREENINFO, ON_GREEN_CREATOR } from '../../store/actions';
import classnames from 'classnames';
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
import GreenHome from './home';
import Creator from './creator';

const GreenNav = () => {

  return(
    <nav className="greennav_main_cont">
      <ul>
        <li>
          <button title="Inicio"><FontAwesomeIcon icon={faHome} /></button>
        </li>
        <li>
          <button title="Reaccionar"><FontAwesomeIcon icon={faHeart} /></button>
        </li>
        <li>
          <button title="Ver Deseo"><FontAwesomeIcon icon={faGift} /></button>
        </li>
        <li>
          <button title="Comentar"><FontAwesomeIcon icon={faComment} /></button>
        </li>
        <li>
          <button title="Compartir en mi perfil"><FontAwesomeIcon icon={faShare} /></button>
        </li>
        <li>
          <button title="Abrir en pantala completa"><FontAwesomeIcon icon={faExpandArrowsAlt} /></button>
        </li>
      </ul>
    </nav>
  )
}

const GreenInfo = () => {
  const info = useSelector(state => state.greenpost.info);
  const dispatch = useDispatch();

  return(
    <div className={classnames({
      greeninfo_main_cont: true,
      greeninfo_main_cont_visible: info,
    })}>
      <div className="section_main_cont">
        <GreenHome />
      </div>
      <footer>
        <button onClick={()=> dispatch({ type: ON_GREEN_CREATOR })} title="Crear Post">GreenPost</button>
        <GreenNav />
      </footer>
    </div>
  )
};

const BtnInfo = () => {
  const info = useSelector(state => state.greenpost.info);
  const green = useSelector(state => state.greenpost);
  const dispatch = useDispatch();
  return(
    <button
      title={ info ? "Ocultar" : "Ver" }
      onClick={()=> dispatch({ type: ON_GREENINFO })}
      className={classnames({
        btngreen_info: true,
        btngreen_info_rotate: info,
      })}
    >
      {console.log(green)}
      <FontAwesomeIcon icon={faArrowCircleLeft} />
    </button>
  )
}

const GreenPost = () => {
  const green = useSelector(state => state.user.greenPost);
  const img = green.img;
  return(
    <div style={{ backgroundImage: `url(${img})` }} className="greenpost_main_cont">
      <Creator />
      <GreenInfo />
      <BtnInfo />
    </div>
  )
}

export default GreenPost;