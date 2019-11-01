import React from 'react';
import { useDispatch } from 'react-redux';
import { ON_LOADER } from '../../store/actions';
import Router from 'next/router';
import axios from 'axios';

const MyLink = ({ url, children, cb }) => {
  const dispatch = useDispatch();
  const onLink = async() => {
    let loader = 0;
    const interval = setInterval(()=> {
      loader += 15;
      dispatch({ type: ON_LOADER, loader });
    },1000);
    if(loader >= 75){
      dispatch({ type: ON_LOADER, loader: 97 });
      clearInterval(interval);
    }
    try{
      clearInterval(interval);
      callbback();
      Router.replace(url);
      dispatch({ type: ON_LOADER, loader: 100 });
    }catch(err){
      console.log(err);
      clearInterval(interval);
    }
  }

  return (
    <button onClick={onLink} type="button">
      {children}
      <style jsx>{`
          button{
            background: transparent;
            border: none;
            padding: 0;
            margin: 0;
            outline: none;
          }
          button:focus{
            outline: none;
          }
        `}
      </style>
    </button>
  )
}

export default MyLink;
