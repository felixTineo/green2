import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ON_GREEN_COMMENT } from '../../store/actions';
import uuid from 'uuid/v1';
import { color } from '../../layout/var';
import axios from 'axios';
import io from 'socket.io-client';

const CommentList = ({ comment, perfilImg, fullName }) => {
  const owner = useSelector(state => state.user.owner);
  return(
    <li className="shadow">
      <div>
        <img src={perfilImg} alt=""/>
        <small>{fullName}</small>
      </div>
      <p>{comment}</p>
      <style jsx>{`
          li{
            display: flex;
            margin-top: .5rem;
            align-items: center;
            background: #fff;
            min-width: 20%;
            border-left: 5px solid ${owner ? color.prim : "#bbb"};
          }
          p{
            margin: 0;
            padding: .3rem;
          }
          div{
            display: flex;
            flex-direction: column;
            align-items: center;
            background: ${color.dark};
            padding: .2rem;
          }
          small{
            margin-left: .2rem;
            color: ${color.light};
          }
          img{
            width: 25px;
            height: 25px;
            border-radius: 50%;
            object-fit: cover;
            object-position: center;
          }
      `}
      </style>
    </li>
  );
}

const Comment = () => {
  const dispatch = useDispatch();
  const comments = useSelector(state => state.greenpost.current.comments);
  const [value, setValue] = useState('');
  const [disable, setDisable] = useState(false);
  const input = useRef(null);
  const scroll = useRef(null);
  const pid = useSelector(state => state.greenpost.current._id);

  useEffect(()=> {
    const socket = io();
    socket.open();
    socket.on(`green:${pid}`, (newComment) => {
      console.log(newComment);
      dispatch({ type: ON_GREEN_COMMENT, comment: newComment });
      scroll.current.scrollTo(0, scroll.current.scrollHeight);
    });
    return ()=> socket.close();
  },[comments]);

  useEffect(()=> {
    scroll.current.scrollTo(0, scroll.current.scrollHeight);
    input.current.focus();
  },[comments]);

  const onSubmit = async(e) => {
    try{
      if(e.keyCode === 13 && e.shiftKey === false){
        e.preventDefault();
        setDisable(true);
        const data = {
          comment: value,
          pid,
        }
        const res = await axios.post('/green/comment/add', data);
        setDisable(false);
        setValue('');
        input.current.focus();
      }
    }catch(err){
      console.log(err);
    }
  }

  return(
    <div className="main_cont animated fadeIn">
      <ul ref={scroll}>
        {
          comments.map(comment => <CommentList {...comment} key={uuid()} />)
        }
      </ul>
      <form onSubmit={onSubmit}>
        <textarea disabled={disable} onKeyDown={onSubmit} ref={input} value={value} onChange={(e)=> setValue(e.currentTarget.value)} name="" id="" />
      </form>
      <style jsx>{`
        .main_cont{
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
        }
        ul{
          flex-grow: 1;
          list-style: none;
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          overflow-y: scroll;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 45px 20px 0px;
        }
        ul::-webkit-scrollbar{
          width: 0;
        }
        form{
          width: 100%;
          display: flex;
          flex-direction: column;
          background: ${color.prim};
          padding: .5rem;
        }
        textarea{
          resize: none;
          border-radius: 2px;
          border: 1px solid ${color.sec};
        }
        button{
          margin-top: .5rem;
          align-self: flex-end;
          background: transparent;
          border: 2px solid ${color.light};
          color: ${color.light};
          transition: 250ms ease;
        }
        button:focus{
          outline: none;
        }
        button:hover{
          background: ${color.sec};
        }
      `}
      </style>
    </div>
  )
}

export default Comment;
