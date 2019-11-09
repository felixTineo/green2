import React, { useState } from 'react';
import Layout from '../components/layout/layout';
import Friends from '../components/chat/friends';
import { color } from '../layout/var';

const Lab = () => {
  return(
    <Layout>
      <main className="container-fluid p-0">
        <div className="row p-0 m-0">
          <div className="col-2 p-0">
            <div className="publicity">
              <h1>Anuncios</h1>
            </div>
          </div>
          <div className="col-8">
          </div>
          <div className="col-2 p-0">
            <div className="friend_cont">
              <Friends />
            </div>
          </div>
        <div style={{ height: 1200 }} />
        </div>
      </main>
      <style jsx>{`
        main{
          background: rgba(139, 185, 64, .130);
        }
        .publicity{
          position: sticky;
          top: 42px;
          height: calc(100vh - 42px);
          border-right: 2px solid ${color.prim};
        }
        .friend_cont{
          margin-top: 40px;
          height: calc(100% - 40px);
        }
      `}
      </style>
    </Layout>
  )
};

export default Lab;

/*
<main className="container-fluid p-0">
  <div className="row p-0 m-0">
    <div className="col-10">
    </div>
    <div className="col-2 p-0">
      <div className="friend_cont">
        <Friends />
      </div>
    </div>
  <div style={{ height: 1200 }} />
  </div>
</main>
<style jsx>{`
  main{
    background: rgba(139, 185, 64, .130);
  }
  .friend_cont{
    margin-top: 40px;
    height: calc(100% - 40px);
  }
`}
</style>
*/
