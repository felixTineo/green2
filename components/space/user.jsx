import React, { useReducer, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Popover, PopoverBody } from 'reactstrap';
import { ON_STORE, ON_UPDATE } from '../../store/actions';
import './user.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGift,
  faMapMarkerAlt,
  faDollarSign,
  faSchool,
  faMailBulk,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Info = () => {
  const { name, lastName, perfilImg, owner } = useSelector(state => state.user);
  const dispatch = useDispatch();

  return(
    <div className="user_info">
      <img src={perfilImg} alt=""/>
      <div className="user_name">
        <p><span>{name}</span>{" "}{lastName}</p>
        {!owner && <button onClick={()=> dispatch({ type: ON_STORE })} type="button" title="Enviar Regalo"><FontAwesomeIcon icon={faGift} /></button> }
      </div>
    </div>
  )
};

const ExtraInfo = () => {
  const { actualCity, job, primaryShool, mail, phone, owner } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const [pop, setPop] = useReducer((state, nextState) => ({ ...state, ...nextState }), {
    actualCity: false,
    job: false,
    primaryShool: false,
    mail: false,
    phone: false,
  });

  const [values, setValues] = useReducer((state, nextState) => ({ ...state, ...nextState }), {
    actualCity: '',
    job: '',
    primaryShool: '',
    mail: '',
    phone: '',
  })

  useEffect(()=> {
    setPop({ actualCity: false, job: false, primaryShool: false, mail: false, phone: false });
  },[mail]);

  const onPop = (id) => {
    for(let key  in pop) {
      if(id === key){
        console.log(key);
        setPop({ [key]: !pop[key] });
      } else {
        setPop({[key]: false});
      }
    }
  }

  const onUpdate = async(e) => {
    try{
      e.preventDefault();
      const data = { key: e.target.id, value: values[e.target.id] };
      await axios.post('/user/update', data);
      dispatch({ type: ON_UPDATE, payload: { [data.key]: data.value } });
      setPop({[data.key]: false});
      setValues({[data.key]: ''});
    }catch(err){
      console.log(err);
    }
  }

  return(
    <ul className="extrainfo_main_cont">
      <li>
        <button onClick={(e)=> onPop(e.currentTarget.id)} id="actualCity" title={owner ? "Cambiar ubicación" : null} disabled={!owner}>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <span> ubicacion: </span>
            <strong>{actualCity}</strong>
        </button>
        <Popover isOpen={pop.actualCity} placement="bottom" target="actualCity">
          <PopoverBody>
            <form id="actualCity" onSubmit={onUpdate}>
              <input value={values.actualCity} onChange={(e)=> setValues({ actualCity: e.currentTarget.value })} type="text"/>
              <button type="submit">enviar</button>
            </form>
          </PopoverBody>
        </Popover>
      </li>
      <li>
        <button onClick={(e)=> onPop(e.currentTarget.id)} id="job" title={owner ? "Cambiar trabajo" : null} disabled={!owner}>
          <FontAwesomeIcon icon={faDollarSign} />
          <span> trabajo: </span>
          <strong>{job || 'la psiencia'}</strong>
        </button>
        <Popover isOpen={pop.job} placement="bottom" target="job">
          <PopoverBody>
            <form id="job" onSubmit={onUpdate}>
              <input value={values.job} onChange={(e)=> setValues({ job: e.currentTarget.value })} type="text"/>
              <button type="submit">enviar</button>
            </form>
          </PopoverBody>
        </Popover>
      </li>
      <li>
        <button onClick={(e)=> onPop(e.currentTarget.id)} id="primaryShool" title={owner ? "Cambiar escuela" : null} disabled={!owner}>
          <FontAwesomeIcon icon={faSchool} />
          <span> escuela: </span>
          <strong>{primaryShool || 'De la vida'}</strong>
        </button>
        <Popover isOpen={pop.primaryShool} placement="bottom" target="primaryShool">
          <PopoverBody>
            <form id="primaryShool" onSubmit={onUpdate}>
              <input value={values.primaryShool} onChange={(e)=> setValues({ primaryShool: e.currentTarget.value })} type="text"/>
              <button type="submit">enviar</button>
            </form>
          </PopoverBody>
        </Popover>
      </li>
      <li>
        <button onClick={(e)=> onPop(e.currentTarget.id)} id="mail" title={owner ? "Cambiar mail" : null} disabled={true}>
          <FontAwesomeIcon icon={faMailBulk} />
          <span> mail: </span>
          <strong>{mail}</strong>
        </button>
        <Popover isOpen={pop.mail} placement="bottom" target="mail">
          <PopoverBody>
            <form id="mail" onSubmit={onUpdate}>
              <input value={values.mail} onChange={(e)=> setValues({ mail: e.currentTarget.value })} type="text"/>
              <button type="submit">enviar</button>
            </form>
          </PopoverBody>
        </Popover>
      </li>
      <li>
        <button onClick={(e)=> onPop(e.currentTarget.id)} id="phone" title={owner ? "Cambiar telefono" : null} disabled={!owner}>
          <FontAwesomeIcon icon={faPhone} />
          <span> telefóno: </span>
          <strong>{phone || '555-55-55-55'}</strong>
        </button>
        <Popover isOpen={pop.phone} placement="bottom" target="phone">
          <PopoverBody>
            <form id="phone" onSubmit={onUpdate}>
              <input value={values.phone} onChange={(e)=> setValues({ phone: e.currentTarget.value })} type="text"/>
              <button type="submit">enviar</button>
            </form>
          </PopoverBody>
        </Popover>
      </li>
    </ul>
  )
}

const User = () => {
  const user = useSelector(state => state.user);
  return(
    <div className="user_main_cont">
      <div id="user_space" className="shadow-sm rounded">
        <Info />
        <ExtraInfo />
      </div>
      <svg id="arrow_right" className="arrow_user d-none d-md-block" viewBox="0 0 45 70" width="45" height="70">
        <polyline strokeWidth="2px" stroke="#8bb940" fill="transparent" points="5,0 20,35 5,70" />
      </svg>
    </div>
  )
}

export default User;
