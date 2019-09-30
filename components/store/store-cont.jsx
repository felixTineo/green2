import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ON_STORE, storeSections } from '../../store/actions';
import './store-cont.scss';
import { Modal } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const StoreCont = ({ children }) => {
  const visible = useSelector(state => state.greenstore.visible);
  const dispatch = useDispatch();

  return(
    <Modal isOpen={visible} style={{ maxWidth: '95vw' }} >
      <div className="storecont_main_cont">
        <header>
          <nav>
            <button onClick={()=> dispatch({ type: storeSections.HOME })} >inicio</button>
            <div className="storesearch_cont">
              <div>
                <input type="text"/>
                <p><FontAwesomeIcon icon={faSearch} /></p>
              </div>
              <ul>

              </ul>
            </div>
          </nav>
          <button title="cerrar" onClick={()=> dispatch({ type: ON_STORE })}>X</button>
        </header>
        {children}
      </div>
    </Modal>
  )
};

export default StoreCont;
