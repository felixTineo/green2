import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
<<<<<<< HEAD
import { ON_STORE, storeSections, ON_PRODUCTS, ON_GREEN_CREATOR } from '../store/actions';
import Store from '../components/store/store';
import StoreCont from '../components/store/store-cont';
import GreenCreator from '../components/greenpost/creator';
=======
import { ON_STORE, storeSections, ON_PRODUCTS, ON_POST_REGISTER } from '../store/actions';
import Store from '../components/store/store';
import StoreCont from '../components/store/store-cont';
import PostRegister from '../components/postregister/postregister';
import '../node_modules/bootstrap/scss/bootstrap.scss';
>>>>>>> perfil

/*const Foo = () => {
  const dispatch = useDispatch();
  return(
    <div className="foo_main_cont">
      <button onClick={()=> dispatch({ type: ON_POST_REGISTER })}>PostRegister</button>
      <PostRegister />
    </div>
  )
};*/

const Foo = () => {
  const dispatch = useDispatch();
  return (
    <>
      <GreenCreator />
      <button onClick={()=> dispatch({ type: ON_GREEN_CREATOR })} >abrir</button>
    </>
  )
}

export default Foo;
