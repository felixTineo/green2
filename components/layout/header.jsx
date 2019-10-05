import React, { useEffect, useCallback, useState } from 'react';
import Logo from './logo';
import Router from 'next/router';
import './header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faGift, faHeart, faUser, faCog, faCoins, faBell } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { navView, ON_VIEW_NAV, ON_LOADER, ON_NOTIFICATIONS, ON_LOGIN } from '../../store/actions';
import axios from 'axios';
import Link from 'next/link';
import { Popover, PopoverBody } from 'reactstrap';
import uuid from 'uuid/v1';
import io from 'socket.io-client';
import MyLink from '../mylink/link';

const DownBar = () => {
  const [down, setDown] = useState(false);

  useEffect(()=> {
    window.onscroll = () => {
      if(window.scrollY > 30){
        setDown(true);
      } else {
        setDown(false);
      }
    }
  }, []);

  const [sm, setSm] = useState(false);
  useEffect(()=> {
    if(window.innerWidth < 576){
      setSm(true);
    }
  },[])

  return <div className="down_bar" style={{ height: down || sm ? 40 : 0 }} />
};

const SearchBar = () => {
  const testList = ["felix", "luis", "maximiliano", "francisco", 'teresa', 'yleana'];
  const [suggest, setSuggest] = useState([]);

  const onSuggest = async (e) => {
    const value = e.target.value;
    if(value){
      value.toLocaleLowerCase();
      const res = await axios.get(`/user/search/${value}`);
      setSuggest(res.data);
    } else{
      setSuggest([]);
    }
  }

  return(
    <div className="searchbar_main_cont">
      <div className="search_cont">
        <input onChange={onSuggest} type="text"/>
        <p><FontAwesomeIcon icon={faSearch} /></p>
      </div>
      <ul style={{ padding: suggest.length > 0 ? '.2rem' : '0' }} className="sugesstlist">
        {
          suggest.map(item => (
            <li key={uuid()}>
              <MyLink id={item._id}>
                <div className="user_search_cont">
                  <img src={item.perfilImg} alt=""/>
                  <p>{item.fullName}</p>
                </div>
              </MyLink>
            </li>
          ))
        }
      </ul>
    </div>
  )
};

const Gift = () => {
  const gifts = useSelector(state => state.nav.notifications.gifts);
  const dispatch = useDispatch();
  const onView = useCallback(()=> {
    dispatch({ type: ON_VIEW_NAV, note: navView.GIFT });
  })

  return(
    <div className="btnicon_cont">
      <button
        id="gift"
        onClick={onView}
        style={
          gifts.view && gifts.length > 0
            ? { background: "#fff", color: "#ff6c1a" }
            : { background: "transparent", color: "#fff" }
        }
        className="btnicon_nav"
      >
        <FontAwesomeIcon icon={faGift} />
      </button>
      <span
        style={
          gifts.view && gifts.length > 0
          ? { color: "#ff6c1a" }
          : { color: "#fff" }
        }
      >
        +{gifts.items.length}
      </span>
    </div>
  );
}

const Note = () => {
  const notes = useSelector(state => state.nav.notifications.notes);
  const dispatch = useDispatch();
  const onView = useCallback(()=> {
    dispatch({ type: ON_VIEW_NAV, note: navView.NOTES });
  });
  const [pop, setPop] = useState(false);
  const handleView = () => {
    onView();
    setPop(!pop);
  };
  const handleViewOut = () =>{
    setPop(false)
  }

  return(
    <div className="btnicon_cont">
      <button
        id="note"
        onClick={handleView}
        style={
          notes.view && notes.length > 0
            ? { background: "#fff", color: "#ff6c1a" }
            : { background: "transparent", color: "#fff" }
        }
        className="btnicon_nav"
      >
        <FontAwesomeIcon icon={faBell} />
      </button>
      <span
        style={
          notes.view && notes.length > 0
          ? { color: "#ff6c1a" }
          : { color: "#fff" }
        }
      >
        +{notes.items.length}
      </span>
      <Popover target="note" isOpen={pop} placement="bottom">
          <PopoverBody>
            <ul onClick={handleViewOut}>
              {
                notes.items.map(item => (
                  <li key={uuid()}>
                    {item.id}
                  </li>
                ))
                }
            </ul>
          </PopoverBody>
        </Popover>
    </div>
  )
}

const Friend = () => {
  const friend = useSelector(state => state.nav.notifications.friendReq);
  const dispatch = useDispatch();
  const onView = useCallback(()=> {
    dispatch({ type: ON_VIEW_NAV, note: navView.FRIEND });
  });

/*  const [list, setList] = useState([]);
  useEffect(()=> {
    setList(friend.items);
  },[friend.items]);*/

  const [pop, setPop] = useState(false);
  const handleView = () => {
    onView();
    setPop(!pop);
  }

  const handleViewOut = () =>{
    setPop(false)
  }

  return(
    <div className="btnicon_cont">
      <button
        id="friend"
        onClick={handleView}
        style={
          friend.view && friend.length > 0
            ? { background: "#fff", color: "#ff6c1a" }
            : { background: "transparent", color: "#fff" }
        }
        className="btnicon_nav"
      >
        <FontAwesomeIcon icon={faUser} />
      </button>
      <span
        style={
          friend.view && friend.length > 0
          ? { color: "#ff6c1a" }
          : { color: "#fff" }
        }
      >
        +{friend.items.length}
      </span>
      <Popover target="friend" isOpen={pop} placement="bottom">
          <PopoverBody>
            <ul onMouseLeave={handleViewOut}>
              {
                friend.items.map(item => (
                  <li key={uuid()}>
                    {item.name}
                  </li>
                ))
                }
            </ul>
          </PopoverBody>
        </Popover>
    </div>
  )
}

const Option = () => {
  const [pop, setPop] = useState(false);
  const dispatch = useDispatch();
  const onLogout = useCallback(async ()=> {
    try{
      await axios.get('/user/logout');
      dispatch({ type: ON_LOGIN, option: false });
      Router.push('/login');
    }catch(err){
      console.log(err);
    }
  })

  return(
    <div className="btnicon_cont">
      <button id="option" onClick={()=> setPop(!pop)} className="btnicon_nav">
        <FontAwesomeIcon icon={faCog} />
      </button>
      <Popover target="option" isOpen={pop} placement="bottom">
        <PopoverBody style={{ padding:0 }}>
          <ul className="option_list" onMouseLeave={()=> setPop(false)}>
            <li><button>perfil</button></li>
            <li><button onClick={onLogout}>salir</button></li>
          </ul>
        </PopoverBody>
      </Popover>
    </div>
  )
}

const Wallet = () => {
  const wallet = useSelector(state => state.nav.notifications.wallet);

  return (
  <div className="btnicon_cont">
    <p className="wallet_cont"><FontAwesomeIcon icon={faCoins} /></p>
    <span style={{ fontSize: 16 }}>+{wallet}</span>
  </div>
  )
}

const Notifications = () => {

  return(
    <ul className="notifications_main_cont">
      <li><Gift /></li>
      <li><Note /></li>
      <li><Friend /></li>
      <li><Option /></li>
      <li><Wallet /></li>
    </ul>
  );
}

const BarLoader = () => {
  const loader = useSelector(state => state.nav.loader);
  const dispatch = useDispatch();
  const onLoader = useCallback((loader)=> dispatch({ type: ON_LOADER, loader }));

  return <div className="barloader" style={{ width: `${loader}%`, opacity: loader > 0 ? 1 : 0 }} />
}


const Header = () => {
  const nav = useSelector(state => state.nav);
  const [width, setWidth] = useState(0);
  const dispatch = useDispatch();
  const onNotifications = async () => {
    try{
      if(nav.login){
        const res = await axios.get(`/user/notifications`);
        dispatch({ type: ON_NOTIFICATIONS, notifications: res.data });
      }
    }catch(err){
      console.log(err);
    }
  };

  useEffect(() => {
    const socket = io();
    socket.open();
    socket.on(`nav:${nav.notifications.id}`, (payload) => {
      let items = nav.notifications[payload.note].items;
      console.log(items);
      items = [payload.user, ...nav.notifications[payload.note].items];
      console.log(items);
      const reduxPayload = { note: payload.action, items }
      dispatch({ type: 'ON_NOTE', payload: reduxPayload });
    });
    return () => socket.close();
  },[nav.notifications]);

  useEffect(()=> {
    onNotifications();
  },[nav.login]);

  useEffect(()=> {
    setWidth(window.innerWidth);
  },[]);

  return(
    <header className="header_main_cont">
        <BarLoader />
        <nav>
        <DownBar />
        <div className="logo_search">
          <Logo url='/' />
          { nav.login && width > 992 && <SearchBar /> }
        </div>
        { !nav.login && <Link href="/login"><button className="btn_login">login</button></Link> }
        { nav.login && <Notifications /> }
        </nav>
        { width < 576 && nav.login && <SearchBar /> }
    </header>
  )
};

export default Header;
