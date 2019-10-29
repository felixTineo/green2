import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ON_GREEN_CREATOR } from '../store/actions';
import { Modal } from 'reactstrap';
import { color } from '../layout/var';
import '../node_modules/bootstrap/scss/bootstrap.scss';

const Creator = () => {
  const visible = useSelector(state => state.greenpost.creator);
  const [image, setImage] = useState('/static/random/r16.jpg');
  const dispatch = useDispatch();
  return(
    <Modal style={{ minWidth: '80%' }} isOpen={visible}>
      <div className="main">
        <div className="img">
          <label htmlFor="img">
            <input type="file"/>
          </label>
        </div>
        <div className="history">
          <form>
            <input placeholder="Titulo" type="text" className="title"/>
            <input placeholder="Sub-titulo opcional" type="text" className="sub-title"/>
            <textarea placeholder="Cuentanos tu historia!" />
            <button type="submit">Crear</button>
          </form>
        </div>
        <button title="Crear post" onClick={()=>dispatch({ type: ON_GREEN_CREATOR })} title="Cancelar" className="btn_close" type="button">X</button>
      </div>
      <style jsx>{`
        .main{
          height: 60vh;
          display: flex;
          position: relative;
        }
        .img{
          width: 60%;
          background-image: url(${image});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        .history{
          width: 40%;
          height: 100%;
          padding: 1rem .5rem 0;
          color: ${color.prim};
          display: flex;
          flex-direction: column;
          position: relative;
        }
        form{
          color: ${color.dark};
          flex-grow: 1;
          margin-top: 1.5rem;
        }
        form input{
          width: 100%;
          padding: 0;
          line-height: 0;
          border: none;
        }
        input:focus{
          outline: none;
        }
        .title{
          font-size: 2rem;
        }
        .sub-title{
          font-size: 1.2rem;
        }
        textarea{
          margin-top: 1rem;
          resize: none;
          width: 100%;
          border: none;
          font-size: .8rem;
          height: 70%;
        }
        textarea:focus{
          outline:none;
        }
        form button{
          position: absolute;
          bottom: .5rem;
          right: .5rem;
          transition: 250ms ease;
          background: transparent;
          border: 1px solid ${color.prim};
          color: ${color.prim};
        }
        from button:focus{
          outline: none;
        }
        form button:hover{
          background: ${color.prim};
          color: ${color.light}
        }
        .btn_close{
          position: absolute;
          top: .5rem;
          right: .5rem;
          background: transparent;
          border: none;
          transition: 250ms ease;
          border: 1px solid ${color.dark};
          border-radius: 50%;
          width: 30px;
          height: 30px;
        }
        .btn_close:focus{
          outline: none;
        }
        .btn_close:hover{
          color: ${color.light};
          background: ${color.prim};
          border-color: ${color.light};
        }

      `}
      </style>
    </Modal>
  )
};

const Lab = () => {
  const dispatch = useDispatch();
  return(
    <>
      <button onClick={()=> dispatch({ type: ON_GREEN_CREATOR })}>open</button>
      <Creator />
    </>
  )
};

export default Lab;
