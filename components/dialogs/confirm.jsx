import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ON_CONFIRM } from '../../store/actions';
import { Modal } from 'reactstrap';
import { color } from '../../layout/var';

const Confirm = () => {
  const confirmation = useSelector(state => state.confirm);
  const { onConfirm, msg1, msg2} = confirmation.current;
  const dispatch = useDispatch();
  const onNext = () => {
    dispatch({ type: ON_CONFIRM, current: {} });
    onConfirm();
  }
  return(
    <Modal isOpen={confirmation.visible}>
      <div className="main">
        <header>
          <button title="Cancelar" onClick={()=> dispatch({ type: ON_CONFIRM, current: {} })}>X</button>
        </header>
        <div className="body">
          <p>{msg1}</p>
          <p>{msg2}</p>
          <button onClick={onNext}>Aceptar</button>
        </div>
        <style jsx>{`
          div.main{
            height: 25vh;
            display: flex;
            flex-direction: column;
          }
          button{
            transition: 250ms ease;
          }
          button:focus{
            outline: none;
          }
          header{
            display:flex;
            justify-content: flex-end;
            background: ${color.prim};
            border-radius: 3px;
          }
          header button{
            background: transparent;
            border: none;
            color: ${color.light};
          }
          .body{
            padding: .5rem;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .body p{
            margin: 0;
            color: ${color.dark};
            width: 80%;
            text-align: center;
          }
          .body button{
            border: 1px solid ${color.prim};
            color: ${color.prim};
            background: transparent;
            margin-top: 1rem;
          }
          .body button:hover{
            background: ${color.prim};
            color: ${color.light};
          }
        `}
        </style>
      </div>
    </Modal>
  )
};

export default Confirm;
