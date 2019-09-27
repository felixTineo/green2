import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ON_STORE, storeSections, ON_PRODUCTS } from '../store/actions';
import Store from '../components/store/store';

const Perfil = () => {
  const dispatch = useDispatch();

  return(
    <div className="foo_main_cont">
      <button onClick={()=> dispatch({  })} >store</button>
    </div>
  )
};

export default Perfil;
