import React, { Component } from 'react';
import './social.scss';

class Share extends Component{
  constructor(props){
    super(props);
    this.state={
      shared: 0,
      myShare: false,
    }
    this.handleShare = this.handleShare.bind(this);
  }

  handleShare() {
    const { shared } = this.state;
    this.setState({ myShare: true, shared: shared + 1  });
  }

  render() {
    const { shared, myShare } = this.state;
    const { className } = this.props;
    return(
      <button title="Compartir" onClick={this.handleShare} className={`btn_social animated ${className}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={myShare ? { fill:"#ff6c1a" } : null}>
          <path d="M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z" />
        </svg>
        <span style={myShare ? { color:"#ff6c1a" } : null}> +{shared}</span>
      </button>
    );
  }

};

export default Share;
