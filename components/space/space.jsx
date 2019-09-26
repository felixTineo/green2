import React from 'react';
import './space.scss';
import Nav from './nav';
import User from './user';
import Home from './home';

const Space = () => {

  return(
    <div className="space_main_cont">
      <Nav />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-4">
            <User />
          </div>
          <div className="col-12 col-md-8">
            <Home />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Space;
