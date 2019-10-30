import React, { useState } from 'react';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import Confirm from '../components/dialogs/confirm';

const Lab = () => {
  const [visible, setVisible] = useState(false);
  const foo = () => {
    alert('Confirmado');
  }
    return(
      <>
        <button onClick={()=> setVisible(!visible)}>Open</button>
      </>
    )
};

export default Lab;
