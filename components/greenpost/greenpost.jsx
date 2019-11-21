import React, { useReducer, useState, useEffect } from 'react';
import './greenpost.scss';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ON_GREENINFO, ON_GREEN_CREATOR, ON_GREEN_LIKE, OFF_GREEN_LIKE } from '../../store/actions';
import classnames from 'classnames';
import {
  faUserCheck,
  faUserClock,
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
import Wish from './wish';
import Comment from './comment';
import Creator from './creator';
import axios from 'axios';
import { Modal } from 'reactstrap';

const GreenNav = ({ setVisible }) => {
  const uid = useSelector(state => state.nav.notifications.id);
  const pid = useSelector(state => state.greenpost.current._id);
  const likes = useSelector(state => state.greenpost.current.likes);
  const dispatch = useDispatch();
  const [like, setLike] = useState(false);

  useEffect(() => {
    const checkLike = likes.find(like => like._id === uid);
    if(checkLike) setLike(true);
  },[likes, uid]);

  const onReact = async() => {
    try{
      const res = await axios.get(`/green/like/${pid}`);
      if(!like){
        dispatch({ type: ON_GREEN_LIKE, like: res.data });
        setLike(true);
      } else {
        dispatch({ type: OFF_GREEN_LIKE, uid });
        setLike(false);
      }
    }catch(err){
      console.log(err);
    }
  }
  return(
    <nav className="greennav_main_cont">
      <ul>
        <li>
          <button onClick={()=>setVisible({ home: true, wish: false, comments: false })} title="Inicio"><FontAwesomeIcon icon={faHome} /></button>
        </li>
        <li>
          <button onClick={onReact} style={ like ? { background: "#8bb940", color: "#ffffff" } : { background: "transparent", color: "#ffffff" } } title="Reaccionar"><FontAwesomeIcon icon={faHeart} /></button>
        </li>
        <li>
          <button onClick={()=>setVisible({ home: false, wish: true, comments: false })} title="Ver Deseo"><FontAwesomeIcon icon={faGift} /></button>
        </li>
        <li>
          <button onClick={()=>setVisible({ home: false, wish: false, comments: true })} title="Comentar"><FontAwesomeIcon icon={faComment} /></button>
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

const BtnFriend = () => {
  const user = useSelector(state => state.user);
  const id = useSelector(state => state.nav.notifications.id);
  const [status, setStatus] = useState(0);

  const sendFriend = async() => {
    try{
      await axios.get(`/friend/send/${user._id}`);
      setStatus(1);
    }catch(err){
      console.log(err);
    }
  }

  const acceptFriend = async() => {
    try{
      await axios.get(`/friend/accept/${user._id}`)
      setStatus(0);
    }catch(err){
      console.log(err);
    }
  }

  const cancelFriend = async() => {
    try{
      await axios.get(`/friend/cancel/${user._id}`)
      setStatus(null);
    }catch(err){
      console.log(err);
    }
  }

  useEffect(()=> {
    const friend = user.friends.find(friend => friend._id === id);
    const status = friend ? friend.status : null;
    setStatus(status);
  },[id]);

  switch (status) {
    case 0:
      return <button onClick={cancelFriend} type="button" title="Eliminar amigo">Eliminar Amigo</button>
    case 1:
      return <button onClick={cancelFriend} type="button" title="Cancelar solicitud de amistad">Esparando Confirmacion</button>
    case 2:
      return <button onClick={acceptFriend} type="button" title="Aceptar solicitud de amistad">Aceptar</button>
    default:
      return <button onClick={sendFriend} type="button" title="Enviar solicitud de amistad">Agregar Amigo</button>
  }
}

const GreenInfo = () => {
  const info = useSelector(state => state.greenpost.info);
  const dispatch = useDispatch();
  const [visible, setVisible] = useReducer((state, next) => ({ ...state, ...next }),{
    home: true,
    wish: false,
    comments: false,
  })
  const user = useSelector(state => state.user);

  return(
    <div className={classnames({
      greeninfo_main_cont: true,
      greeninfo_main_cont_visible: info,
    })}>
      <div className="section_main_cont">
        { visible.home && <GreenHome /> }
        { visible.wish && <Wish /> }
        { visible.comments && <Comment /> }
      </div>
      <footer>
        { user.owner && <button onClick={()=> dispatch({ type: ON_GREEN_CREATOR })} title="Crear Post">GreenPost</button> }
        { !user.owner && <BtnFriend /> }
        <GreenNav
          setVisible={setVisible}
        />
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
      onClick={()=> dispatch({ type: ON_GREENINFO, option: !info })}
      className={classnames({
        btngreen_info: true,
        btngreen_info_rotate: info,
      })}
    >
      <FontAwesomeIcon icon={faArrowCircleLeft} />
    </button>
  )
}

const GreenPost = () => {
  const green = useSelector(state => state.greenpost.current);
  const greenCreator = useSelector(state => state.greenpost.creator);
  const img = green.img;
  return(
    <div style={{ backgroundImage: `url(${img})` }} className="greenpost_main_cont">
      <Modal style={{ minWidth: '80%' }} isOpen={greenCreator}>
        <Creator green />
      </Modal>
      <GreenInfo />
      <BtnInfo />
    </div>
  )
}

export default GreenPost;
