import React from 'react';
import { useSelector } from 'react-redux';
import './space.scss';
import Nav from './nav';
import User from './user';
import Home from './home';
import Wall from './wall';

const Space = () => {
  const space = useSelector(state => state.space);
  return(
    <div className="space_main_cont">
      <Nav />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-4">
            <User />
          </div>
          <div className="col-12 col-md-8">
            { space.home && <Home /> }
            { space.wall && <Wall /> }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Space;
