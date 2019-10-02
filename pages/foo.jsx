import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ON_STORE, storeSections, ON_PRODUCTS, ON_POST_REGISTER } from '../store/actions';
import Store from '../components/store/store';
import StoreCont from '../components/store/store-cont';
import PostRegister from '../components/postregister/postregister';
import '../node_modules/bootstrap/scss/bootstrap.scss';

const Foo = () => {
  const dispatch = useDispatch();
  return(
    <div className="foo_main_cont">
      <button onClick={()=> dispatch({ type: ON_POST_REGISTER })}>PostRegister</button>
      <PostRegister />
    </div>
  )
};

export default Foo;
