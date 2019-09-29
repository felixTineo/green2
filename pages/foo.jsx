import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ON_STORE, storeSections, ON_PRODUCTS } from '../store/actions';
import Store from '../components/store/store';
import StoreCont from '../components/store/store-cont';

const Foo = () => {
  const dispatch = useDispatch();
  const visible = useSelector(state => state.greenstore.visible);
  return(
    <div className="foo_main_cont">
      <StoreCont><Store /></StoreCont>
      <button onClick={()=> dispatch({ type: ON_STORE })} >store</button>
      {console.log(visible)}
    </div>
  )
};

export default Foo;
