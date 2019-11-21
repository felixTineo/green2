import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ON_POST_VIEW } from '../store/actions';
import { posts } from '../test/posts';
import Layout from '../components/layout/layout';
import BtnPost from '../components/layout/btn-post';

const Main = () => {
  const dispatch = useDispatch();
  const post = useSelector(state => state.post)
  return(
    <Layout>
      <BtnPost post={posts[0]}>
        <button style={{ marginTop: 500 }}>Post</button>
      </BtnPost>
    </Layout>
  )
}

export default Main;
