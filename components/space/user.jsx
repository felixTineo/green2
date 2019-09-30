import React from 'react';
import { useSelector } from 'react-redux';
import './user.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserPlus,
  faMapMarkerAlt,
  faDollarSign,
  faSchool,
  faMailBulk,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

const Info = () => {
  const { name, lastName, perfilImg } = useSelector(state => state.user);

  return(
    <div className="user_info">
      <img src={perfilImg} alt=""/>
      <div className="user_name">
        <p><span>{name}</span>{" "}{lastName}</p>
        <button type="button" title="Enviar solicitud de amistad"><FontAwesomeIcon icon={faUserPlus} /></button>
      </div>
    </div>
  )
};

const ExtraInfo = () => {
  const { actualCity, job, school, mail, phone } = useSelector(state => state.user);
  return(
    <ul className="extrainfo_main_cont">
      <li>
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        <span> ubicacion: </span>
        <strong>{actualCity}</strong>
      </li>
      <li>
        <FontAwesomeIcon icon={faDollarSign} />
        <span> trabajo: </span>
        <strong>{job || 'la psiencia'}</strong>
      </li>
      <li>
        <FontAwesomeIcon icon={faSchool} />
        <span> escuela: </span>
        <strong>{school || 'De la vida'}</strong>
      </li>
      <li>
        <FontAwesomeIcon icon={faMailBulk} />
        <span> mail: </span>
        <strong>{mail}</strong>
      </li>
      <li>
        <FontAwesomeIcon icon={faPhone} />
        <span> telefóno: </span>
        <strong>{phone || '555-55-55-55'}</strong>
      </li>
    </ul>
  )
}

const User = () => {
  const user = useSelector(state => state.user);
  return(
    <div className="user_main_cont">
      <Info />
      <ExtraInfo />
      <svg id="arrow_right" className="arrow_user d-none d-md-block" viewBox="0 0 60 70" width="60" height="70">
        <polyline strokeWidth="3px" stroke="#8bb940" fill="transparent" points="20,0 50,35 20,70" />
      </svg>
    </div>
  )
}

export default User;
