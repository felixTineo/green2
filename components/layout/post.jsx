import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ON_POST_VIEW } from '../../store/actions';
import { Modal } from 'reactstrap';
import { color } from '../../layout/var';

const Home = ({ title, subTitle, history }) => {

  return(
    <div className="main">
      <div className="home">
        <h1>{title}</h1>
        <p>{subTitle}</p>
        <p>{history}</p>
      </div>
      <style jsx>{`
        p{
          margin: 0;
        }
      `}
      </style>
    </div>
  )
}

const Info = ({ visible }) => {
  const post = useSelector(state => state.post);
  const { perfilImg, name, lastName } = post.current.author;
  const { date } = post.current;
  return(
    <div className="main">
      <header>
        <div className="user">
          <img src={perfilImg} alt=""/>
          <p>{`${name} ${lastName}`}</p>
        </div>
        <div className="date">
          <p>{new Date(date).toLocaleDateString()}</p>
          <small>{new Date(date).toLocaleTimeString()}</small>
        </div>
      </header>
      <div className="body">
        <Home {...post.current} />
      </div>
      <nav>
        <ul>
          <li>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"/></svg>
            </button>
          </li>
          <li>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"/></svg>
            </button>
          </li>
          <li>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"/></svg>
            </button>
          </li>
          <li>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"/></svg>
            </button>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        .main{
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          right: ${visible ? '0' : '-100%'};
          background: rgba(0, 0, 0, .5);
          display: flex;
          flex-direction: column;
          transition: 300ms ease;
        }
        header{
          color: #fff;
          display: flex;
          justify-content: space-between;
          padding: 2rem .5rem 0;
        }
        p{
          margin: 0;
        }
        .user{
          display: flex;
          align-items: center;
        }
        .user img{
          margin-right: .5rem;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          object-fit: cover;
          object-position: center;
        }
        .body{
          flex-grow: 1;
          color: #fff;
          padding: 5%;
        }
        nav{
          background: ${color.dark};
        }
        nav ul{
          list-style: none;
          margin: 0;
          padding: 0;
          padding: .5rem;
          display: flex;
          justify-content: flex-end;
        }
        li button{
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: transparent;
          border: 1px solid #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: 250ms ease;
        }
        li button:focus{
          outline: none;
        }
        li button:hover{
          background: #fff;
        }
        li button:hover svg{
          fill: ${color.prim};
        }
        li svg{
          transition: 250ms ease;
          width: 20px;
          height: 20px;
          fill: #fff;
        }
        li:nth-child(odd){
          margin: 0 .5rem;
        }
        @media(min-width: 992px){
          .main{
            width: 50%;
          }
        }
      `}
      </style>
    </div>
  )
}

const BtnInfo = ({ onClick, visible }) => {

  return(
    <button onClick={()=> onClick(!visible)}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm28.9-143.6L209.4 288H392c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24H209.4l75.5-72.4c9.7-9.3 9.9-24.8.4-34.3l-11-10.9c-9.4-9.4-24.6-9.4-33.9 0L107.7 239c-9.4 9.4-9.4 24.6 0 33.9l132.7 132.7c9.4 9.4 24.6 9.4 33.9 0l11-10.9c9.5-9.5 9.3-25-.4-34.3z"/></svg>
      <style jsx>{`
        button{
          position: absolute;
          top: 50%;
          right: .5rem;
          z-index: 10;
          background: transparent;
          border: none;
          transform: ${visible ? 'rotate(180deg)' : 'rotate(0)'};
        }
        button:focus{
          outline: none;
        }
        svg{
          transition: 250ms ease;
          width: 30px;
          height: 30px;
          fill: #fff;
        }
        button:hover svg{
          fill: ${color.danger};
        }
        @media(min-width: 576px){
          svg{
            width: 50px;
            height: 50px;
          }
        }
      `}
      </style>
    </button>
  )
}

const Main = () => {
  const post = useSelector(state => state.post);
  const dispatch = useDispatch();
  const [info, setInfo] = useState(false);
  useEffect(()=> {
    const timeout = setTimeout(()=> setInfo(true), 500);
    return ()=> clearTimeout(timeout);
  },[])
  return(
    <Modal isOpen={post.visible} style={{ maxWidth: '95vw' }}>
      <div className="main">
        <button className="btn_close" onClick={()=> dispatch({ type: ON_POST_VIEW, post: {} })}>X</button>
        <img src={post.current.img} alt=""/>
        <BtnInfo visible={info} onClick={setInfo} />
        <Info visible={info} />
        <style jsx>{`
          .main{
            height: 92vh;
            position: relative;
            overflow: hidden;
          }
          .main img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
          }
          .btn_close{
            width: 25px;
            height: 25px;
            color: #fff;
            text-align: center;
            position: absolute;
            top: .2rem;
            right: .5rem;
            background: transparent;
            transition: 250ms ease;
            border: 1px solid #fff;
            border-radius: 50%;
            z-index: 15;
          }
          .btn_close:focus{
            outline: none;
          }
          .btn_close:hover{
            color: ${color.prim};
            background: #fff;
          }
        `}
        </style>
      </div>
    </Modal>
  )
}

export default Main;
