import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ON_WALLET, ON_GREEN_WISH_FOUND } from '../../store/actions';
import { ON_STORE } from '../../store/actions';
import './wish.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Wish = () => {
  const wish = useSelector(state => state.greenpost.current.wish);
  const user = useSelector(state => state.user);
  const pid = useSelector(state => state.greenpost.current._id);
  const [tip, setTip] = useState(0);
  const dispatch = useDispatch();
  const [found, setFound] = useState(wish.found);
  const inputTip = useRef();
  const onSubmit = async(e) => {
    try{
      e.preventDefault();
      setFound(wish.found + parseInt(tip, 10));
      const res = await axios.get(`/green/tip/${pid}/${tip}`);
      const parseTip = parseInt(tip, 10);
      dispatch({ type: ON_WALLET, coin: -parseTip });
      dispatch({ type: ON_GREEN_WISH_FOUND, found: parseTip });
    }catch(err){
      console.log(err);
    }
  }
  return(
    <div className="wish_main_cont animated fadeIn">
      {
        !wish.name && (
          <div className="nowish_main_cont">
            <button onClick={()=> dispatch({ type: ON_STORE })} disabled={!user.owner}>
              <FontAwesomeIcon icon={faGift} />
              {
                user.owner
                  ? <p>Elige un deseo, podria concederse muy pronto.</p>
                  : <p>{user.name} aun no a elegido un deseo</p>
              }
            </button>
          </div>
        )
      }
      {
        wish.name && (
          <div className="wish_cont shadow">
            <img src={wish.img} alt=""/>
            {
              found !== wish.price && (
                <form onSubmit={onSubmit}>
                  <input value={tip} onChange={(e)=> setTip(e.currentTarget.value > wish.price - found ? wish.price - found : e.currentTarget.value)} type="number" />
                  <button type="submit">enviar</button>
                </form>
              )
            }
            <div className="wish_loader_cont">
              <div
                className="wish_loader"
                style={{ width: `${(found * 100)/wish.price}%` }}
              />
            </div>
            <footer>
              <p>{wish.name}</p>
              <p>${wish.price}</p>
            </footer>
          </div>
        )
      }
    </div>
  );
}

export default Wish;
