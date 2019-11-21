import React from 'react';
import { useDispatch } from 'react-redux';
import { ON_POST_VIEW } from '../../store/actions';

const Main = ({ children, post }) => {
  const dispatch = useDispatch();
  return(
    <button onClick={()=> dispatch({ type: ON_POST_VIEW, post })}>
      {children}
      <style jsx>{`
        button{
          background: transparent;
          border: none;
        }
        button:focus{
          outline
        }
      `}
      </style>
    </button>
  )
}

export default Main;
