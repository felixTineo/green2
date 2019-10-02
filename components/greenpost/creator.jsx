import React, { useState, useReducer } from 'react';
import './creator.scss';
import { Modal } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { ON_GREEN_CREATOR } from '../../store/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import Store from '../store/store';
import axios from 'axios';

const GreenPost = ({ img, setImg, onImg, historyVisible, setHistoryVisible, onSubmit, history, setHistory }) => {
  return(
    <div style={{ backgroundImage: `url(${img})`}} className="creator_greenpost_main">
      <label htmlFor="green">
        <input id="green" name="green" onChange={onImg} type="file"/>
        <FontAwesomeIcon icon={faCamera} />
      </label>
      <div className="history_main_cont" style={{ transform: historyVisible ? 'translateX(0)' : 'translateX(100%)' }}>
        <div className="body">
          <header><h2>Agrega una historia</h2></header>
          <textarea onChange={(e)=> setHistory(e.currentTarget.value)} value={history} />
        </div>
        <footer>
          <button onClick={onSubmit}>crear</button>
        </footer>
      </div>
      <button onClick={()=> setHistoryVisible(!historyVisible)} title="Agregar historia" style={{ transform: historyVisible ? 'rotate(180deg)' : null }} className="arrow_history">
        <FontAwesomeIcon icon={faArrowCircleLeft} />
      </button>
    </div>
  )
}

const Creator = () => {
  const visible = useSelector(state => state.greenpost.creator);
  const dispatch = useDispatch();
  const [section, setSection] = useReducer((state, next) => ({ ...state, ...next }),{ green: true, store: false });
  const [historyVisible, setHistoryVisible] = useState(true);
  const [store, setStore] = useState(false);
  const [img, setImg]   = useState('/static/random/r16.jpg');
  const [history, setHistory] = useState('');

  const onImg = (e) => {
    const img = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = ()=> {
      if(reader.result){
        setImg(reader.result);
        setHistoryVisible(true);
      } else {
        setImg('/static/random/r16.jpg');
      }
    };
    reader.readAsDataURL(img);
  };

  const onSubmit = async() => {
    try{
      const data = {
        history,
        img,
      }
      await axios.post('/post/greenpost', data);
    }catch(err){
      console.log(err);
    }
  }

  return(
    <Modal isOpen={visible} style={{ maxWidth: '90vw' }}>
      <div className="creator_main_cont">
        <header>
          <p>GreenPost</p>
          <button onClick={()=> dispatch({ type: ON_GREEN_CREATOR })}>X</button>
        </header>
        <div className="body">
          { section.green && (
            <GreenPost
              onImg={onImg}
              img={img}
              setImg={setImg}
              historyVisible={historyVisible}
              setHistoryVisible={setHistoryVisible}
              history={history}
              setHistory={setHistory}
              />
            )
          }
          { section.store && <Store /> }
        </div>
      </div>
    </Modal>
  )
}

export default Creator;
