import React, { useEffect, useState, useReducer, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ON_WALL_TOP, ON_WALL_POSTS } from '../../store/actions';
import { color, font, size } from '../../layout/var';
import uuid from 'uuid/v1';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare, faHome, faHeart, faGift, faComment,faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons';
//import './wall.scss';
import Creator from '../greenpost/creator';

const TopPost = ({ img, author, date, likes, comments, gifts })  => {

  return(
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
            <smal> +{likes.length}</smal>
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
  )
};

const CommentList = ({ comment, perfilImg, fullName }) => {
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
            border-left: 5px solid ${color.prim};
            color: ${color.dark};
            margin-left: .5rem;
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

const Comments = ({ pid, pComments }) => {
  const [comments, setComments] = useState(pComments);
  console.log(pComments);
  const [comment, setComment] = useState('');
  const commentRef = useRef(null);
  const commentsRef = useRef(null);
  const onSubmit = async(e) => {
    try{
      if(e.keyCode === 13 && e.shiftKey === false){
        e.preventDefault();
        const res = await axios.post(`/post/comment/${pid}`, { comment });
        setComment('');
        setComments([...comments, res.data]);
      }
    }catch(err){
      console.log(err);
    }
  }
  useEffect(() => {
    commentRef.current.focus();
    commentsRef.current.scrollTo(0, commentsRef.current.scrollHeight);
  })
  return(
    <div className="animated fadeIn">
      <ul ref={commentsRef}>
        {
          comments.map(comment => <CommentList key={uuid()} {...comment} />)
        }
      </ul>
      <form onSubmit={onSubmit}>
        <textarea onKeyDown={onSubmit} ref={commentRef} value={comment} onChange={(e) => setComment(e.currentTarget.value)} />
        <button type="submit">enviar</button>
      </form>
      <style jsx>{`
        div{
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        ul{
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          align-items: flex-start;
          flex-direction: column;
          overflow-y: scroll;
          flex-grow:1;
          height: 100%;
        }
        ul::-webkit-scrollbar{
          width: 0;
        }
        form{
          display: flex;
          //flex-direction: column;
          background: ${color.dark};
          padding: .5rem;
        }
        textarea{
          resize: none;
          margin: 0;
          flex-grow: 1;
        }
        form button{
          margin-left: .5rem;
          border: 2px solid ${color.light};
          color: ${color.light};
          background: transparent;
          text-transform: capitalize;
          transition: 252ms ease;
        }
        form button:focus{
          outline: none;
        }
        form button:hover{
          color: ${color.light};
          background: ${color.prim};
        }
      `}
      </style>
    </div>
  )
}

const RecentPost = ({ img, author, likes, comments, gifts, date, history, _id }) => {
  const [section, setSection] = useReducer((state, next) => ({ ...state, ...next }), {
    home: true,
    comments: false,
  });
  return(
    <div className="main_cont">
      <div className="main">
        <header>
          <div className="user">
            <img src={author.perfilImg} alt=""/>
            <ul>
              <li>
                <p>{author.fullName}</p>
              </li>
              <li className="date">
                <small>{new Date(date).toLocaleDateString('es-ES')}</small>
                <small> {new Date(date).toLocaleTimeString('en-EN')}</small>
              </li>
            </ul>
          </div>
          <div className="info">
            <ul>
              <li>
                <p><FontAwesomeIcon width="20" icon={faHeart} /></p>
                <smal> +{likes.length}</smal>
              </li>
              <li>
                <p><FontAwesomeIcon width="20" icon={faComment} /></p>
                <smal> +{comments.length}</smal>
              </li>
              <li>
                <p><FontAwesomeIcon width="20" icon={faGift} /></p>
                <smal> +{0}</smal>
              </li>
            </ul>
          </div>
        </header>
        <div className="body">
          { section.home && <p className="animated fadeIn">{history}</p> }
          { section.comments && <Comments pid={_id} pComments={comments} /> }
        </div>
        <footer className="footer_wall_post">
          <ul>
            <li>
              <button onClick={()=> setSection({ home: true, comments: false })}><FontAwesomeIcon icon={faHome} /></button>
            </li>
            <li>
              <button><FontAwesomeIcon icon={faHeart} /></button>
            </li>
            <li>
              <button onClick={()=> setSection({ home: false, comments: true })}><FontAwesomeIcon icon={faComment} /></button>
            </li>
            <li>
              <button><FontAwesomeIcon icon={faGift} /></button>
            </li>
            <li>
              <button><FontAwesomeIcon icon={faShare} /></button>
            </li>
            <li>
              <button><FontAwesomeIcon icon={faExpandArrowsAlt} /></button>
            </li>
          </ul>
        </footer>
      </div>
      <style jsx>{`
        .main_cont{
          border-top: 7px solid ${color.prim};
          border-bottom: 7px solid ${color.prim};
          width: 100%;
          height: 50vw;
          background: url('${img}')top center no-repeat;
          background-size: cover;
          margin: 1rem 0;
          color: ${color.light};
        }
        .main{
          background: linear-gradient(rgba(0, 0, 0, .4), transparent, rgba(0, 0, 0, .4))-55%, rgba(0, 0, 0, .3);
          width: 100%;
          height: 100%;
          transition: 250ms ease;
          opacity: 0;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .main:hover{
          opacity: 1;
        }
        header{
          padding: .5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          user-select: none;
        }
        header .user{
          display: flex;
          align-items: center;
        }
        header .user img{
          width: 4vw;
          height: 4vw;
          border-radius: 50%;
          object-fit: cover;
          object-position: center;
        }
        header .user ul{
          list-style: none;
          margin: 0;
          padding: 0;
          margin-left: .5rem;
        }
        header .user ul li p{
          margin: 0;
          text-transform: capitalize;
          font-weight: 550;
        }
        header .info ul{
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
        }
        header .info ul li{
          display: flex;
          align-items: center;
          margin-left: .5rem;
        }
        header .info ul li p{
          margin: 0;
          margin-right: .2rem;
        }
        .body{
          flex-grow: 1;
          overflow: hidden;
        }
        .body p {
          height: 100%;
          margin: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          user-select: none;
        }
        footer{
          padding: .5rem;
          background: ${color.dark};
        }
        footer ul{
          width: 100%;
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }
        footer ul button{
          background: transparent;
          color: #fff;
          height: 35px;
          width: 35px;
          border: none;
          border: 1px solid ${color.light};
          border-radius: 50%;
          transition: 250ms ease;
          margin-left: .5rem;
          font-size: .5rem;
        }
        footer ul button:focus{
          outline: none;
        }
        footer ul button:hover{
          background: ${color.light};
          color: ${color.prim};
        }
      `}
      </style>
    </div>
  )
}

const Wall = () => {
  const wall = useSelector(state => state.wall);
  const space = useSelector(state => state.space);
  const dispatch = useDispatch();

  const getPosts = async() => {
    try{
      const res = await axios.get('/post/posts/0');
      dispatch({ type: ON_WALL_POSTS, posts: res.data });
    }catch(err){
      console.log(err);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  /**********************************************************************************************
  Extraño comportamiento del sort, el segundo useEffect es una especie de fix hecho por mi mismo.
  **********************************************************************************************/
  console.log(wall)
  return(
    <div className="main">
      <h1>
        <p><span>Nuevo</span> Post</p>
      </h1>
      <div className="shadow">
        <Creator common />
      </div>
      <h1>
        <p><span>publicasiones</span> top</p>
      </h1>
      <div className="top">
        <ul>
          {
            wall.posts.sort((a, b) => { a = a.likes.length; b = b.likes.length; return a > b ? -1 : a < b ? 1 : 0 }).slice(0, 3).map(post => <li key={uuid()}><TopPost {...post} /></li>)
          }
        </ul>
      </div>
      <div className="recent">
        <h1>
          <p><span>publicasiones</span> recientes</p>
        </h1>
        <ul>
          {
            wall.posts.sort((a, b) => { a = a.date; b = b.date; return a > b ? -1 : a < b ? 1 : 0 }).map(post => <li key={uuid()}><RecentPost {...post} /></li>)
          }
        </ul>
      </div>
      <style jsx>{`
        h1{
          padding: .5rem;
          color: rgba(0, 0, 0, 0.2);
          border-bottom: 3px solid rgba(0, 0, 0, 0.2);
        }
        h1 p{
          margin: 1rem 0 0;
          text-transform: uppercase;
          font-family: ${font.text};
          font-weight: 550;
        }
        h1 span{
          color: ${color.prim};
        }
        .top ul{
          margin: 0;
          margin-top: 1rem;
          list-style: none;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
        }
        .recent ul{
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      `}
      </style>
    </div>
  )
};

export default Wall;
