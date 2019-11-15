import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ON_CHAT_CLOSE, ON_CHAT_MINIMIZE, ON_CHAT_MSG, ON_CHAT_ALERT } from '../../store/actions';
import uuid from 'uuid/v1';
import persons from '../../test/persons';
import { color } from '../../layout/var';
import axios from 'axios';
import io from 'socket.io-client';

const Chat = ({ fullName, perfilImg, _id, minimize, chatHistory, privates, anAlert }) => {
  const dispatch = useDispatch();
  const cuid = useSelector(state => state.nav.notifications.id);
  const [msg, setMsg] = useState([]);
  const inputRef = useRef(null);
  const chatRef = useRef(null);
  const current = useSelector(state => state.chat.current);
  const [chat, setChat] = useState([]);
  const onChat = async() => {
    try{
      const res = await axios.get(`/chat/private/${_id}`);
      setChat(res.data);
      chatRef.current.scrollTo(0, chatRef.current.scrollHeight);
    }catch(e){
      console.log(e);
    }
  }
  useEffect(()=> {
    onChat();
  },[]);
  useEffect(()=> {
    chatRef.current.scrollTo(0, chatRef.current.scrollHeight);
    inputRef.current.focus();
  },[chat])

  useEffect(()=> {
    const socket = io();
    try{
      socket.open();
      socket.on(`private:${cuid}`, (payload) => {
        setChat([...chat, payload.msg]);
        chatRef.current.scrollTo(0, chatRef.current.scrollHeight);
        inputRef.current.focus();
      });
    } catch(e){
      console.log(e);
    }
    return ()=> socket.close();
  },[chat]);

  const onMinimize = () => {
    const isMin = privates.find(user => user._id === _id);
    if(isMin.minimize){
      dispatch({ type: ON_CHAT_MINIMIZE, _id, option: false });
      dispatch({ type: ON_CHAT_ALERT, _id, option: false });
    } else {
      dispatch({ type: ON_CHAT_MINIMIZE, _id, option: true });
    }
  };

  const onSubmit = async(e) => {
    try{
      if(e.keyCode === 13 && !e.shiftKey || e.type === "submit"){
        e.preventDefault();
        const newMsg = {
            id: cuid,
            pm: msg,
        }
        const data = {
          tid: _id,
          msg: newMsg,
        }
        setMsg('');
        setChat([...chat, newMsg]);
        await axios.post('/chat/send', data);
      }
    }catch(err){
      console.log(err);
    }
  }
  return(
    <li className="main shadow">
      {console.log(chat)}
      <header>
        <button onClick={onMinimize} className="name" >
          <img src={perfilImg} alt=""/>
          {fullName}
        </button>
        <button onClick={()=> dispatch({ type: ON_CHAT_CLOSE, _id })}>X</button>
      </header>
      <ul className="body" ref={chatRef}>
        {
          chat.map(msg => (
            <li key={uuid()} style={{ alignSelf: cuid === msg.id ? 'flex-end' : 'flex-start' }}>
              {cuid !== msg.id && <img src={perfilImg} alt=""/>}
              <p style={{ background: cuid === msg.id ? color.prim : 'rgba(0, 0, 0, .050)', color: cuid === msg.id ? color.light : color.dark }}>{msg.pm}</p>
            </li>
          ))
        }
      </ul>
      <form onSubmit={onSubmit}>
        <textarea id={_id} value={msg} onChange={(e)=> setMsg(e.currentTarget.value)} onKeyDown={onSubmit} ref={inputRef} />
      </form>
      <footer></footer>
      <style jsx>{`
        li.main{
          width: 25%;
          border: 1px solid ${color.sec};
          position: relative;
          top: ${minimize ? '-43px' : '-343px'};
          margin-right: 1rem;
          border-radius: 3px 3px 0 0;
        }
        header{
          display: flex;
          align-items: center;
          background: ${anAlert ? color.danger : color.prim};
        }
        header button{
          transition: 250ms ease;
          border: none;
          font-size: 1rem;
          color: rgba(255, 255, 255, .7);
          text-transform: capitalize;
          background: transparent;
        }
        header button:focus{
          outline: none;
        }
        header button:hover{
          color: #fff;
        }
        .name{
          flex-grow: 1;
          text-align: left;
          display: flex;
          align-items: center;
          font-weight: 550;
        }
        .name img{
          width: 40px;
          height: 40px;
          object-fit: cover;
          object-position: center;
          border-radius: 50%;
          margin-right: .3rem;
        }
        ul{
          list-style: none;
          marign: 0;
          padding: 0;
          height: 250px;
          overflow-y: scroll;
          display: flex;
          flex-direction: column;
          background: #fff;
        }
        ul::-webkit-scrollbar{
          width: 0;
        }
        ul li{
          margin: .5rem;
          display: flex;
          align-items: center;
          align-self: flex-start;
        }
        ul li img{
          width: 25px;
          height: 25px;
          object-fit: cover;
          object-position: center;
          border-radius: 50%;
        }
        ul li p{
          margin: 0;
          background: rgba(0, 0, 0, .050);
          padding: .1rem .2rem;
          margin-left: .5rem;
          border-radius: 3px;
          border: 1px solid rgba(0, 0, 0, .080);
        }
        form{
          width: 30px;
          width: 100%;
          margin: 0;
          padding: 0;
          display: flex;
        }
        form textarea{
          resize: none;
          width: 100%;
          height: 100%;
          margin: 0;
          font-size: 11px;
        }
        footer{
          height: 10px;
          background: ${color.prim};
        }
      `}
      </style>
    </li>
  )
}

const Private = () => {
  const [chats, setChats] = useState([]);
  const privates = useSelector(state => state.chat.privates);
  useEffect(()=> {
    setChats(privates);
  },[privates.length]);

  return(
    <div>
      <ul>
        {
          privates.map((chat)=> <Chat key={uuid()} {...chat} privates={privates} />)
        }
      </ul>
      <style jsx>{`
        ul{
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: flex-end;
        }
      `}
      </style>
    </div>
  )
};

export default Private;
