import React, { useState, useEffect } from 'react';
import './home.scss';
import { useSelector, useDispatch }  from 'react-redux';
import { ON_UPDATE } from '../../store/actions';
import { color } from '../../layout/var';
import axios from 'axios';
import uuid from 'uuid/v1';
import MyLink  from '../mylink/link';
import BtnPost from '../layout/btn-post';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare, faHome, faHeart, faGift, faComment,faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons';

const TopPost = ({ post })  => {
  const { img, author, date, likes, comments, gifts }  = post;
  return(
    <BtnPost post={post}>
    <button title="Abrir">
      <div className="main">
        <header>
          <small>{new Date(date).toLocaleDateString('en-EN')}</small>
          <small>{new Date(date).toLocaleTimeString('en-EN')}</small>
        </header>
        <div className="body">
          <img src={author.perfilImg} alt=""/>
          <p>{author.fullName}</p>
          <footer id="top_post_footer">
            <FontAwesomeIcon width="30px" icon={faHeart} />
            <small> +{likes.length}</small>
          </footer>
        </div>
      </div>
      <style jsx>{`
        button{
          height: 20vw;
          width: 20vw;
          border: none;
          background: url('${img}')top center no-repeat;
          background-size: cover;
          border-top: 7px solid ${color.prim};
          border-bottom: 7px solid ${color.prim};
          padding: 0;
          color: #fff;
          margin: .4rem;
        }
        div.main{
          opacity: 0;
          background: rgba(0, 0, 0, .5);
          width: 100%;
          height: 100%;
          transition: 250ms ease;
        }
        .main:hover{
          opacity: 1;
        }
        div.main img{
          width: 80px;
          height: 80px;
          border-radius: 50%;
          object-fit: cover;
          object-position: center;
        }
        header{
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding: 0 .2rem;
          color: #fff;
          border: none;
        }
        .body{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100%;
        }
        .body p{
          margin: 0;
        }
        footer{

        }
      `}
      </style>
    </button>
    </BtnPost>
  )
};

const RecentPosts = () => {
  const posts = useSelector(state => state.user.posts);
  return(
    <ul>
      {console.log(posts)}
      {
        posts.slice(0, 10).map(post => <li><img src={post.img} alt=""/></li>)
      }
      <style jsx>{`
        ul{
          list-style: none;
          margin: 0;
          padding: 0;
          padding-top: 1rem;
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          justify-content: space-between;
          align-items: center;
        }
        li{
          width: 25%;
          height: 35%;
        }
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
      `}
      </style>
    </ul>
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

const Friend = ({ fullName, perfilImg, url, _id, }) => {
  const onFriend = async() => {
    try {
      await axios.get(`/friend/send/${_id}`);
      onCancel(_id);
    } catch (e) {
      console.log(e)  ;
    }
  }

  return(
    <li className="shadow-sm">
      <header>
        <MyLink url={url} callback={()=> null}>
          <p style={{ color: "#fff" }}>{fullName}</p>
        </MyLink>
      </header>
      <style jsx>{`
        li{
          background: url(${perfilImg})top center no-repeat;
          background-size: cover;
          height: 100%;
          width: 30%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex-shrink: 0;
          margin-left: .5rem;
        }
        header{
          display: flex;
          justify-content: space-between;
          color: #fff;
          align-items: center;
          border: none;
        }
        header p {
          margin: 0;
          text-transform: capitalize;
        }
        header button{
          width: 25px;
          height: 25px;
          background: transparent;
          border: 1px solid #fff;
          border-radius: 50%;
          color: #fff;
          transition: 250ms ease;
        }
        header button:hover{
          background: #fff;
          color: ${color.prim};
        }
        button:focus{
          outline: none;
        }
        button{
          align-self: flex-end;
          background: transparent;
          color: #fff;
          border: 2px solid #fff;
          margin: .5rem;
          transition: 250ms ease;
        }
        button:hover{
          background: #fff;
          color: ${color.prim};
        }
      `}
      </style>
    </li>
  )
}

const CommonFriends = () => {
  const [friends, setFriends] = useState([]);
  const tid = useSelector(state => state.user._id);
  const onFriends = async() => {
    try {
      const res = await axios.get(`/friend/commonFriends/${tid}`);
      setFriends(res.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(()=> {
    onFriends();
  },[tid])

  return(
    <ul>
      {
        friends.map(friend => <Friend key={uuid()} {...friend} />)
      }
      <style jsx>{`
        ul{
          list-style: none;
          width: 100%;
          height: 40vh;
          display: flex;
          margin: 0;
          padding: 0;
          padding-top: 1rem;
          overflow: hidden;
          flex-wrap: no-wrap;
          transition: 250ms ease;
        }
      `}
      </style>
    </ul>
  )
}

const Home = () => {
  const owner = useSelector(state => state.user.owner);
  const posts = useSelector(state => state.user.posts);
  return(
    <div className="spacehome_main_cont">
      <header><h1><span>Amigos en</span> Comun</h1></header>
      <CommonFriends />
      <header><h1><span>Top</span> Publicaciones</h1></header>
      <ul>
        {
          posts.sort((a, b) => { a = a.likes.length; b = b.likes.length; return a > b ? -1 : a < b ? 1 : 0 }).slice(0, 3).map(post => <li key={uuid()}><TopPost post={post} /></li>)
        }
        <style jsx>{`
          ul{
            list-style: none;
            padding: 0;
            margin: 0;
          }
        `}
        </style>
      </ul>
      {/*<RecentPosts />*/}
      <HomeNav />
      <History />
    </div>
  )
}

export default Home;
