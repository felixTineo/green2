import React from 'react';
import Layout from '../components/main/layout';
import Hero from '../components/main/hero';
import GreenPost from '../components/main/greenpost';
//import MainSection from '../components/main/main';
//import Embajadores from '../components/main/embajador';
import Embajada from '../components/main/embajada';
//      <Embajada />
const Main = () => {

  return(
    <Layout>
      <Hero />
      <Embajada />
      <GreenPost />
    </Layout>
  )
}

export default Main;
