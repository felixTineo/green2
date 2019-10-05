import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faHeart, faGift, faComment, } from '@fortawesome/free-solid-svg-icons';
import './home.scss';

const GreenInfoIcon = ({ icon, info }) => {
  return(
    <li className="greenicon_info_cont">
      <FontAwesomeIcon icon={icon} />
      <p>{info}</p>
    </li>
  )
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
          <button type="button" title="Enviar solicitud de amistad"><FontAwesomeIcon icon={faUserPlus} /></button>
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
