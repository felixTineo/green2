import React, { useState, useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ON_GREEN_CREATOR, ON_STORE, ON_GREENPOST, ON_CONFIRM, ON_POST } from '../../store/actions';
import { Modal } from 'reactstrap';
import { color } from '../../layout/var';
import { Spinner } from 'reactstrap';
import Confirm from '../dialogs/confirm';
import axios from 'axios';

const Creator = () => {
  const visible = useSelector(state => state.greenpost.creator);
  const targetId = useSelector(state => state.nav.notifications.id);
  const [image, setImage] = useState('/static/random/r16.jpg');
  const [loader, setLoader] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [values, setValues] = useReducer((state, next) => ({ ...state, ...next }),{
    img: '',
    title: '',
    subTitle: '',
    history: '',
  })
  const dispatch = useDispatch();

  const onImg = (e) => {
    const img = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = ()=> {
      if(reader.result){
        setImage(reader.result);
        setValues({ img });
      } else {
        setImage('/static/random/r16.jpg');
      }
    };
    reader.readAsDataURL(img);
  };

  const onSubmit = async(e) =>{
    try{
      if(e.keyCode === 13 && !e.shiftKey || e.type === "submit"){
        e.preventDefault();
        setLoader(true);
        const { img, title, subTitle, history } = values;
        const data = new FormData();
        data.append('img', img);
        data.append('title', title);
        data.append('subTitle', subTitle);
        data.append('history', history);
        data.append('targetId', targetId);
        const res = await axios.post('/post/add', data);
        dispatch({ type: ON_POST, post: res.data });
        setLoader(false);
        setImage('/static/random/r16.jpg');
        setValues({ img: '', title: '', subTitle: '', history: '' });
      }
    }catch(err){
      console.log(err);
    }
  }

  return(
      <div className="main">
        <div className="img">
          <img src={image} alt=""/>
          <label title="Subir una foto" htmlFor="img">
            { loader && <Spinner color="success" /> }
            {
              !loader && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z" /></svg>
            }
            <input onChange={onImg} id="img" name="img" type="file"/>
          </label>
        </div>
        <div className="history">
          <form onSubmit={onSubmit}>
            <input id="title" value={values.title} onChange={(e) => setValues({ [e.currentTarget.id]: e.currentTarget.value })} disabled={loader} placeholder="Titulo" type="text" className="title"/>
            <input id="subTitle" value={values.subTitle} onChange={(e) => setValues({ [e.currentTarget.id]: e.currentTarget.value })} disabled={loader} placeholder="Sub-titulo opcional" type="text" className="sub-title"/>
            <textarea onKeyDown={onSubmit} id="history" value={values.history} onChange={(e) => setValues({ [e.currentTarget.id]: e.currentTarget.value })} disabled={loader} placeholder="Cuentanos tu historia!" />
            <button title="Crear post" disabled={loader} type="submit">Crear</button>
          </form>
        </div>
          <style jsx>{`
            .main{
              height: 60vh;
              display: flex;
              position: relative;
            }
            .img{
              width: 60%;
              display: flex;
              justify-content: center;
              align-items: center;
              position: relative;
            }
            .img img{
              width: 100%;
              height: 100%;
              object-fit: cover;
              object-positon: center;
              filter: ${loader ? 'blur(3px)' : 'none'};
            }
            label{
              width: 50px;
              height: 50px;
              position: absolute;
              top: calc(50% - 50px);
              left: calc(50% - 50px);
              display: flex;
              justify-content: center;
              align-items: center;
            }
            label svg{
              fill: ${color.light};
              transition: 250ms ease;
            }
            input[type="file"]{
              width:0;
              position: absolute;
              height:0;
              top: 0;
              left: 0;
            }
            label svg{
              width: 50px;
              height: 50px;
            }
            label svg:hover{
              cursor: pointer;
              fill: ${color.prim}
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
            input:focus, textarea:focus{
              outline: none;
            }
            input:disabled, textarea:disabled{
              color: rgba(0, 0, 0, .5);
              background: #fff;
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
            form button{
              position: absolute;
              bottom: .5rem;
              right: .5rem;
              transition: 250ms ease;
              background: ${loader ? color.prim : 'transparent'};
              border: 1px solid ${color.prim};
              color: ${loader ? color.light : color.prim};
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
      </div>
  )
};

export default Creator;
