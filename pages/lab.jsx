import React, { useState } from 'react';
import Layout from '../components/layout/layout';
import Friends from '../components/chat/friends';

const Lab = () => {
    return(
      <Layout>
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
      </Layout>
    )
};

export default Lab;
