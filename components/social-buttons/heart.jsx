import React, { Component } from 'react';
import './social.scss';


const heart = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" /></svg>;

class Heart extends Component {
  constructor(props){
    super(props);
    this.state = {
      like: 0,
      myLike: false,
    }
    this.handleLike = this.handleLike.bind(this);
  }

  handleLike() {
    const { myLike, like } = this.state;
    if (myLike) {
      this.setState({ like: like - 1, myLike: false });
    } else {
      this.setState({ like: like + 1, myLike: true });
    }
  }
  render() {
    const { like, myLike } = this.state;
    const { className } = this.props;
    return(
      <button title="Amor" onClick={this.handleLike} className={`btn_social animated ${className}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={myLike ? { fill:"#ff6c1a" } : null}>
          <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
        </svg>
        <span style={myLike ? { color:"#ff6c1a" } : null}> +{like}</span>
      </button>
    );
  }
};

export default Heart;
