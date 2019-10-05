import React, { useEffect } from 'react';
import router, { useRouter } from 'next/router';
import Layout from '../components/layout/layout';
import GreenPost from '../components/greenpost/greenpost';
import { useDispatch } from 'react-redux';
import { ON_USER, ON_LOGIN, ON_GREENINFO, ON_POST_REGISTER, ON_LOADER, ON_GREENPOST } from '../store/actions';
import Space from '../components/space/space';

const Perfil = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(()=> {
    const user = router.query;
    if(typeof(user.posts) === 'string') user.posts = JSON.parse(user.posts);
    if(typeof(user.greenPost) === 'string') user.greenPost = JSON.parse(user.greenPost);
    if(typeof(user.firstTime) === 'string') user.firstTime = JSON.parse(user.firstTime);
    if(typeof(user.owner) === 'string') user.owner = JSON.parse(user.owner);
    //if(user.firstTime && user.owner) dispatch({ type: ON_POST_REGISTER });
    dispatch({ type: ON_LOADER, loader: 0 });
    dispatch({ type: ON_USER, user });
    dispatch({ type: ON_LOGIN, option: true });
    dispatch({ type: ON_GREENPOST, greenpost: user.greenPost[0] });
    dispatch({ type: ON_GREENINFO });
  }, [router.query]);

  return(
    <Layout>
      {console.log(router.query)}
      <GreenPost />
      <Space />
    </Layout>
  );
};

export default Perfil;
