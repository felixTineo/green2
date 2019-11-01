import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ON_CHAT_FRIEND, ON_CHAT_PRIVATE, ON_CHAT_MINIMIZE, ON_CHAT_ALERT } from '../../store/actions';
import { color } from '../../layout/var';
import uuid from 'uuid/v1';
import persons from '../../test/persons';
import io from 'socket.io-client';
import axios from 'axios';

//const friends = persons(8);

const Friend = ({ perfilImg, fullName, _id, url, chatHistory  }) => {
  const dispatch = useDispatch();
  const privates = useSelector(state => state.chat.privates);
  const cuid = useSelector(state => state.nav.notifications.id);
  useEffect(()=> {
    console.log('friend');
    const user = {
      perfilImg,
      fullName,
      _id,
      url,
      chatHistory,
      minimize: false,
      anAlert: false,
    }
    const socket = io();
    socket.open();
    socket.on(`notification:${cuid}`, (_id) =>{
      const isOpen = privates.find(user => user._id === _id);
      console.log(_id);
      if(isOpen && isOpen.minimize ){
        dispatch({ type: ON_CHAT_ALERT, _id, option: true });
      } else{
        dispatch({ type: ON_CHAT_PRIVATE, user  });
      }
    });
  },[])

  const onPrivate = () => {
    try{
      const user = {
        perfilImg,
        fullName,
        _id,
        url,
        chatHistory,
        minimize: false,
        anAlert: false,
      }
      const isOpen = privates.find(user => user._id === _id);
      if(isOpen){
        dispatch({ type: ON_CHAT_MINIMIZE, _id, option: false });
      } else {
        dispatch({ type: ON_CHAT_PRIVATE, user });
      }
      setTimeout(()=> document.getElementById(_id).focus(), 200);
    }catch(err){
      console.log(err);
    }
  }
  return(
    <button onClick={onPrivate} type="button">
      <div>
        <img src={perfilImg} alt=""/>
      </div>
      <p>{fullName}</p>
      <style jsx>{`
        button{
          background: transparent;
          border: none;
          transition: 250ms ease;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding: 0;
          border: 1px solid rgba(139, 185, 64, .4);
          width: 100%;
          text-transform: capitalize;
        }
        button:outline{
          outline: none;
        }
        button:hover{
          background: ${color.prim};
          color: ${color.light};
          border-color: ${color.sec};
        }
        p{
          margin: 0;
          color: ${color.dark};
          margin-left: .5rem;
        }
        div{
          background: ${color.dark};
          width: 55px;
          height: 45px;
          border-left: 8px solid rgba(255, 255, 255, .4);
        }
        img{
          width: 40px;
          height: 40px;
          object-fit: cover;
          object-position: center;
          border-radius: 50%;
        }
      `}
      </style>
    </button>
  );
}

const Friends = () => {
  const [friends, setFriends] = useState([]);

  const all = async() => {
    try {
      const res = await axios.get('/chat/all');
      setFriends(res.data);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    all();
  },[])
  return(
    <div className="main">
      <header>chat</header>
      <ul>
        {
          friends.map((friend) => <li key={uuid()}><Friend {...friend} /></li>)
        }
      </ul>
      <style jsx>{`
        .main{
          height: calc(100vh - 40px);
          background: rgba(0, 0, 0, 0.070);
          position: sticky;
          top: 42px;
        }
        header{
          color: rgba(255, 255, 255, 0.7);
          font-weight: 550;
          background: ${color.prim};
          padding: .5rem;
          text-align: center;
          text-transform: uppercase;
        }
        ul{
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          height: calc(100% - 40px);
          overflow: hidden;
          overflow-y: scroll;
          border-left: 2px solid ${color.sec};
        }
      `}
      </style>
    </div>
  );
}

export default Friends;
