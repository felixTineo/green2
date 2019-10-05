import React from 'react';
import { useDispatch } from 'react-redux';
import { ON_LOADER } from '../../store/actions';
import Router from 'next/router';
import axios from 'axios';

const MyLink = ({ id, children }) => {
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
      const res = await axios.get(`/user/perfil/${id}`);
      dispatch({ type: ON_LOADER, loader: 100 });
      clearInterval(interval);
      res.data.greenPost = JSON.stringify(res.data.greenPost);
      Router.push({pathname: `/perfil`, query: res.data}, `/perfil/${id}`, { shallow: true });
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
