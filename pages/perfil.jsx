import React, { useEffect } from 'react';
import router, { useRouter } from 'next/router';
import Layout from '../components/layout/layout';
import GreenPost from '../components/greenpost/greenpost';
import { useDispatch } from 'react-redux';
import { ON_USER, ON_LOGIN, ON_GREENINFO } from '../store/actions';
import Space from '../components/space/space';

const Perfil = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(()=> {
    const user = router.query;
    if(typeof(user.posts) === 'string') user.posts = JSON.parse(user.posts);
    if(typeof(user.greenPost) === 'string') user.greenPost = JSON.parse(user.greenPost);
    dispatch({ type: ON_USER, user });
    dispatch({ type: ON_LOGIN, option: true });
    dispatch({ type: ON_GREENINFO });
  }, []);

  return(
    <Layout>
      <GreenPost />
      <Space />
    </Layout>
  );
};

export default Perfil;
