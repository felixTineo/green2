import React, { Component } from 'react';
import './register-cont.scss';
import classnames from 'classnames';

class RegisterCont extends Component{
  constructor(props){
    super(props);
  }

  

  render(){
    const { isOpen, children } = this.props;
    return(
      <div 
      className={classnames({
        reigster_cont: true,
        slideInRight: isOpen,
        slideOutRight: !isOpen,
      })}>
        <h1>Registro</h1>
        {children}
      </div>
    );
  }
};

export default RegisterCont;
