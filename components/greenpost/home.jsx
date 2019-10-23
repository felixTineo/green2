import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus,faUserCheck, faUserClock, faHeart, faGift, faComment, } from '@fortawesome/free-solid-svg-icons';
import './home.scss';
import axios from 'axios';

const GreenInfoIcon = ({ icon, info }) => {
  return(
    <li className="greenicon_info_cont">
      <FontAwesomeIcon icon={icon} />
      <p>{info}</p>
    </li>
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
      return <button onClick={cancelFriend} type="button" title="Eliminar amigo"><FontAwesomeIcon icon={faUserCheck} /></button>
    case 1:
      return <button onClick={cancelFriend} type="button" title="Cancelar solicitud de amistad"><FontAwesomeIcon icon={faUserClock} /></button>
    case 2:
      return <button onClick={acceptFriend} type="button" title="Aceptar solicitud de amistad">Aceptar</button>
    default:
      return <button onClick={sendFriend} type="button" title="Enviar solicitud de amistad"><FontAwesomeIcon icon={faUserPlus} /></button>
  }
}

const GreenHome = () => {
  const user = useSelector(state => state.user);
  const greenpost = useSelector(state => state.greenpost.current);
  const { name, lastName, perfilImg, _id } = user;
  return(
    <div className="greenhome_main_cont animated fadeIn">
      <div className="user_info">
        <img src={perfilImg} alt=""/>
        <div className="user_name">
          <p><span>{name}</span>{" "}{lastName}</p>
          {
            !user.owner && <BtnFriend />
          }
        </div>
        <ul>
          <GreenInfoIcon info={greenpost.likes.length} icon={faHeart} />
          <GreenInfoIcon info={greenpost.comments.length} icon={faComment} />
          <GreenInfoIcon info={greenpost.wish.found} icon={faGift} />
        </ul>
        <p>{user.greenPost.history}</p>
      </div>
    </div>
  )
};

export default GreenHome;
