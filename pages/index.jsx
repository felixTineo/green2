import React from 'react';
import { useSelector } from 'react-redux';
import Layout from '../components/main/layout';
import Hero from '../components/main/hero';
import GreenPost from '../components/main/greenpost';
//import MainSection from '../components/main/main';
//import Embajadores from '../components/main/embajador';
//      <Embajada />
import Embajada from '../components/main/embajada';
import Events from '../components/main/events';
import Post from '../components/layout/post';

const Main = () => {
  const postVisible = useSelector(state => state.post.visible);
  return(
    <Layout>
      <Hero />
      <Embajada />
      <Events />
      <GreenPost />
      { postVisible && <Post /> }
    </Layout>
  )
}

export default Main;
