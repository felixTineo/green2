import React, { useState, useEffect } from 'react';
import './home.scss';
import { useSelector, useDispatch }  from 'react-redux';
import { ON_UPDATE } from '../../store/actions';
import { color } from '../../layout/var';
import axios from 'axios';
import uuid from 'uuid/v1';

const RecentPosts = () => {
  const posts = useSelector(state => state.user.posts);
  //const recents = posts.slice(0, 5);
  const foo = [1, 2, 3, 4, 5];
  return(
    <div className="recenposts_main_cont">
      <ul>
        {
          foo.map(post => (
            <li key={uuid()}>
              <button title="Abrir"><img src={`/static/random/r${Math.floor(Math.random() * 16 + 1)}.jpg`} alt=""/></button>
            </li>
          ))
        }
      </ul>
    </div>
  )
};


const HomeNav = () => {

  return(
    <nav className="space_home_nav">
      <ul>
        <li>
          <button>historia</button>
        </li>
        <li>
          <button>intereses</button>
        </li>
        <li>
          <button>deseos</button>
        </li>
      </ul>
    </nav>
  )
}

const History = () => {
  const user = useSelector(state => state.user);
  const cid = useSelector(state => state.nav.notifications.id);
  const [disable, setDisable] = useState(true);
  const [history, setHistory] = useState('');
  const dispatch = useDispatch();
  const isCurrent = user._id === cid ? true : false;

  useEffect(()=> {
    setHistory(user.history);
  },[user]);

  const onHistory = async() => {
    try{
      setDisable(true);
      const res = await axios.post('/user/update', { key: 'history', value: history });
      dispatch({ type: ON_UPDATE, payload: { history } });
      console.log(res.data);
    }catch(e){
      console.log(e)
    }
  }
  const onCancel = () => {
    setDisable(true);
    setHistory(user.history);
  }
  return(
    <div className="main">
    {console.log(history)}
      <textarea title={isCurrent && "Agrega tu historia"} onClick={isCurrent ? ()=> setDisable(false) : null} disable={disable} value={history} onChange={(e) => setHistory(e.currentTarget.value)} />
      {
        isCurrent && !disable && (
          <footer>
            <button onClick={onCancel}>cancelar</button>
            <button onClick={onHistory}>Enviar</button>
          </footer>
        )
      }
    <style jsx>{`
      .main{
        display: flex;
        flex-direction: column;
        min-height: 50vh;
        padding-top: 1rem;
      }
      textarea{
        flex-grow: 1;
        resize: none;
        border: none;
      }
      textarea:disable{
        color: ${color.dark};
      }
      textarea:hover{
        cursor: ${isCurrent && 'pointer'};
      }
      textarea:focus{
        cursor: auto;
        outline: none;
      }
      footer{
        text-align: right;
      }
      footer button{
        background: transparent;
        border: 2px solid ${color.prim};
        text-transform: uppercase;
        color: ${color.prim};
        transition: 250ms ease;
      }
      footer button:focus{
        outline: none;
      }
      footer button:hover{
        color: ${color.light};
        background: ${color.prim};
      }
      footer button:nth-child(2){
        margin-left: 1rem;
      }
    `}
    </style>
    </div>
  )
}

const Home = () => {

  return(
    <div className="spacehome_main_cont">
      <header><h1><span>publicasiones</span> recientes</h1></header>
      <RecentPosts />
      <HomeNav />
      <History />
    </div>
  )
}

export default Home;
