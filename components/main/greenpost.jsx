import React, { useState, useEffect } from 'react';
import { color, font, greenGradient, greenBackground } from '../../layout/main';
import uuid from 'uuid/v1';
import Title from './title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faHeart, faGift, faComment } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import '../../node_modules/aos/src/sass/aos.scss';
import BtnPost from '../layout/btn-post';
import axios from 'axios';

const Post = ({ post }) => {
  const { img, title, subTitle, date, history, author, index } = post;
  const { name, lastName, perfilImg, url, } = author;
  /*useEffect(()=> {
    AOS.init();
    return AOS.refresh();
  },[])*/
  return(
    <BtnPost post={post}>
    <div className="main shadow">
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
        <img src={img} alt=""/>
      </div>
      <footer>
        <div className="title">
          <p>{title}</p>
          <small>{subTitle}</small>
        </div>
        <ul className="info">
          <li>
            <FontAwesomeIcon icon={faHeart} />
            + 0
          </li>
          <li>
            <FontAwesomeIcon icon={faGift} />
            + 0
          </li>
          <li>
            <FontAwesomeIcon icon={faComment} />
            <span>+ 0</span>
          </li>
        </ul>
      </footer>
      <style jsx>{`
        .main{
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 60vh;
          flex-shrink: 0;
        }
        header{
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: .5rem;
          flex-shrink: 0;
          //color: #fff;
        }
        header .user{
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        header .user img{
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
          object-position: center;
        }
        header .user p{
          margin: 0;
        }
        header p{
          margin: 0;
        }
        .body{
          flex-grow: 1;
        }
        .body img{
          width: 100%;
          height:100%;
          object-fit: cover;
          object-position: center;
        }
        footer{
          display: flex;
          align-items: center;
          padding: .5rem;
          flex-shrink: 0;
        }
        footer p{
          margin: 0;
          //line-height: .5rem;
        }
        footer .title{
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }
        footer .info{
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          flex-grow: 1;
        }
        li{
          align-items: center;
          align-items: center;
          font-size: 1rem;
          flex-shrink: 0;
        }
        li:nth-child(2){
          margin: 0 1rem;
        }
      `}
      </style>
    </div>
    </BtnPost>
  )
}

const Main = ()=> {
  const [posts, setPosts] = useState([]);
  const onPosts = async()=> {
    try{
      const res = await axios.get('/green/all');
      setPosts(res.data);
    }catch(e){
      console.log(e)
    }
  }
  useEffect(()=> {
    onPosts();
    const interval = setInterval(function () {
      onPosts();
    }, 60000);
    return ()=> clearInterval(interval);
  },[]);
  return(
    <div className="main">
      {console.log(posts)}
      <Title word="top greenpost's" />
      <ul className="body">
        {
          posts.map((post, index) => <li><Post index={index} key={uuid()} post={post}/></li>)
        }
      </ul>
      <style jsx>{`
        .main{
          //height: 80vh;
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
        }
        .body{
          //flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          list-style: none;
          margin: 0;
          padding: 0;
          flex-shrink: 0;
        }
        li{
          //width: 30%;
          width: 80%;
          margin: 1rem 0;
          flex-shrink: 0;
        }
        @media(min-width: 768px){
          .main{
          }
          .body{
            padding: 3rem;
            flex-direction: row;
            flex-wrap: wrap;
          }
          li{
            margin 1.5rem 0;
            width: 31%;
          }
        }
      `}
      </style>
    </div>
  )
}


export default Main;
