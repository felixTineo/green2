import React from 'react';
import './home.scss';
import { useSelector }  from 'react-redux';
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

const Home = () => {

  return(
    <div className="spacehome_main_cont">
      <header><h1><span>publicasiones</span> recientes</h1></header>
      <RecentPosts />
      <HomeNav />
      <div style={{ marginTop: '1rem' }} className="history_cont">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius natus velit molestias aut ipsam itaque excepturi quam, possimus dolorum libero. Eligendi placeat facilis odio unde quaerat architecto facere enim in.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius natus velit molestias aut ipsam itaque excepturi quam, possimus dolorum libero. Eligendi placeat facilis odio unde quaerat architecto facere enim in. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, magnam deserunt. Quia dignissimos, sunt nisi quod distinctio unde, alias nemo quos. Magnam quisquam explicabo odit, facilis atque dolor sint vero!</p>
      </div>
    </div>
  )
}

export default Home;
