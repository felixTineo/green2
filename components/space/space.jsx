import React from 'react';
import { useSelector } from 'react-redux';
import './space.scss';
import Nav from './nav';
import User from './user';
import Home from './home';
import Wall from './wall';
import Friends from '../chat/friends';

const Space = () => {
  const space = useSelector(state => state.space);
  return(
    <div className="space_main_cont">
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 p-0 m-0">
            <div className="row p-0 m-0">
              <div className="col-12 p-0">
                <Nav />
              </div>
              <div className="col-3 pl-0">
                <User />
              </div>
              <div className="col-9">
                { space.home && <Home /> }
                { space.wall && <Wall /> }
              </div>
            </div>
          </div>
          <div className="col-2 p-0 m-0">
            <Friends />
          </div>
        </div>
      </div>
{/*      <div>
        <div className="row">
          <div className="col-10" style={{ padding: 0 }}>
            <div style={{ padding: 0 }} className="col-12">
              <Nav />
            </div>
            <div style={{ paddingLeft:0 }} className="col-12 col-md-2">
              <User />
            </div>
            <div className="col-12 col-md-10">
              { space.home && <Home /> }
              { space.wall && <Wall /> }
            </div>
          </div>
          <div className="col-2" style={{ padding: 0 }}>
            <Friends />
          </div>
        </div>
      </div>
*/}    </div>
  )
}

export default Space;
