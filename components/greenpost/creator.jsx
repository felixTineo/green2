import React, { useState } from 'react';
import './creator.scss';
import { Modal } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { ON_GREEN_CREATOR } from '../../store/actions';

const GreenPost = () => {

  return(
    <div style={{ backgroundImage: "url('/static/random/r16.jpg')" }} className="creator_greenpost_main">
      <label htmlFor="green">
        <input type="file"/>
      </label>
    </div>
  )
}

const Creator = () => {
  const visible = useSelector(state => state.greenpost.creator);
  const dispatch = useDispatch();
  const [green, setGreen] = useState(true);
  const [store, setStore] = useState(false);

  return(
    <Modal isOpen={visible} style={{ maxWidth: '90vw' }}>
      <div className="creator_main_cont">
        <header>
          <p>GreenPost</p>
          <button onClick={()=> dispatch({ type: ON_GREEN_CREATOR })}>X</button>
        </header>
        <div className="body">
          { green && <GreenPost /> }
        </div>
        <footer>

        </footer>
      </div>
    </Modal>
  )
}

export default Creator;
