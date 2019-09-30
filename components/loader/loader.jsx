import React, { Component } from 'react';
import { TweenMax } from 'gsap';
import './loader.scss';

class Loader extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    TweenMax.to('#loader_line', 3.5, {
      strokeDashoffset: '-1000',
      repeat: -1,
      ease: Linear.easeNone
    });
  }

  render(){
    const { dark } = this.props;
    return(
      <svg className="green_loader" width="200" height="200" viewBox="0 0 200 200">
        <polyline
          id="loader_line"
          fill="none"
          stroke={dark ? "#669f09" : '#fff'}
          strokeWidth="10px"
          strokeDasharray="500"
          points="15,185 95,15 185,180 15,180"
        />
        <circle className="circle" id="circle-1" fill={dark ? "#669f09" : '#fff'} cx="20" cy="180" r="20" />
        <circle className="circle" id="circle-2" fill={dark ? "#669f09" : '#fff'} cx="95" cy="20" r="20" />
        <circle className="circle" id="circle-3" fill={dark ? "#669f09" : '#fff'} cx="180" cy="180" r="20" />
    </svg>
    )
  }
};

export default Loader;
