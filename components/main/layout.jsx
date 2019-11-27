import React, { useState, useEffect, useReducer } from 'react';
import { useSelector } from 'react-redux';
import '../../node_modules/bootstrap/scss/bootstrap.scss';
import Head from 'next/head';
import Header from './header';
import Menu from './menu';
import Router from 'next/router';
import axios from 'axios';
import { Popover, PopoverBody, Spinner } from 'reactstrap';
import { color, font } from '../../layout/var';

const Login = () => {

  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const [mailPop, setMailPop] = useState(false);
  const [passPop, setPassPop] = useState(false);
  const [disable, setDisable] = useState(false);

  const onSubmit = async(e) => {
    try{
      e.preventDefault();
      setDisable(true);
      const data = {
        mail,
        pass
      }
      const res = await axios.post('/user/login', data);
      if(res.data === 'mail') {
         setMailPop(true);
         return setDisable(false);
      }
      if(res.data === 'pass'){
        setPassPop(true)
        return setDisable(false);
      };
      Router.push(`/perfil/${res.data}`);
    }catch(e){
      console.log(e);
    }
  }

  return(
    <form onSubmit={onSubmit} method="POST">
      <header><h1>Iniciar Sesion</h1></header>
      <div className="body">
        <label htmlFor="mail">
          <p>Usuario</p>
          <input disabled={disable} onFocus={()=> setMailPop(false)} value={mail} onChange={(e)=> setMail(e.currentTarget.value)} type="text" id="mail" name="mail"/>
          <Popover target="mail" placement="right" isOpen={mailPop}>
            <PopoverBody>El correo no es valido</PopoverBody>
          </Popover>
        </label>
        <label htmlFor="pass">
          <p>contraseña</p>
          <input disabled={disable} onFocus={()=> setPassPop(false)} value={pass} onChange={(e)=> setPass(e.currentTarget.value)} type="password" name="pass" id="pass"/>
          <Popover target="pass" placement="right" isOpen={passPop}>
            <PopoverBody>La contraseña no es valida</PopoverBody>
          </Popover>
        </label>
      </div>
      <footer>
        {
          disable ? <Spinner color="success" /> : <button disabled={disable} type="submit">Login</button>
        }
      </footer>
      <style jsx>{`
        form{
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          height: 100%;
        }
        header{
          color: ${color.prim};
          margin-top: .5rem;
        }
        .body{
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        label:nth-child(1){
          margin-bottom: 1rem;
        }
        label p{
          margin: 0;
          color: rgba(0, 0, 0, .2);
        }
        input{
          border: none;
          border-bottom: 2px solid rgba(0, 0, 0, .2);
        }
        input:focus{
          outline: none;
          border-color: ${color.prim};
        }
        footer{
          display: flex;
          width: 100%;
          justify-content: flex-end;
          padding: .5rem;
        }
        button{
          background: transparent;
          border: 2px solid ${color.prim};
          text-transform: uppercase;
          transition: 250ms ease;
          color: ${color.prim};
        }
        button:focus{
          outline: none;
        }
        button:hover{
          background: ${color.prim};
          color: #fff;
        }
      `}
      </style>
    </form>
  )
}

const Register = () => {
  const [value, setValue] = useReducer((state, next) => ({ ...state, ...next }),{
    name: '',
    lastName: '',
    mail: '',
    pass: '',
    birthday: '',
    genre: 'Mujer',
  })
  const [disable, setDisable] = useState(false);
  const [mailPop, setMailPop] = useState(false);

  const onSubmit = async(e) => {
    try{
      e.preventDefault();
      const data = value;
      const res = await axios.post('/user/register', data);
      if(res.data === 'mail'){
        setMailPop(true);
        return setDisable(false);
      }
      Router.push(`/perfil/${res.data}`);
    }catch(e){
      console.log(e);
    }
  }

  return(
    <form onSubmit={onSubmit} method="POST">
      <header><h1>Registro</h1></header>
      <div className="body">
        <div className="fullName">
          <input disabled={disable} value={value.name} onChange = {(e)=> setValue({ name: e.currentTarget.value })} type="text" id="name" placeholder="Nombre"/>
          <input disabled={disable} value={value.lastName} onChange = {(e)=> setValue({ lastName: e.currentTarget.value })} type="text" id="lastName" placeholder="Apellido"/>
        </div>
        <input disabled={disable} value={value.mail} onChange = {(e)=> setValue({ mail: e.currentTarget.value })} onFocus={()=> setMailPop(false)} type="text" id="mail" placeholder="Correo electrónico"/>
        <Popover placement="bottom" target="mail" isOpen={mailPop}>
          <PopoverBody>Ya existe una cuenta con este correo</PopoverBody>
        </Popover>
        <input disabled={disable} value={value.pass} onChange = {(e)=> setValue({ pass: e.currentTarget.value })} type="password" id="pass" placeholder="contraseña"/>
        <div className="birth_sex">
          <label htmlFor="birthday">
            <p>Cumpleaños</p>
            <input disabled={disable} value={value.birthday} onChange = {(e)=> setValue({ birthday: e.currentTarget.value })} type="date" name="birthday" id="birthday"/>
          </label>
          <label htmlFor="genre">
            <p>Genero</p>
            <select disabled={disable} value={value.genre} onChange = {(e)=> setValue({ genre: e.currentTarget.value })} name="genre" id="genre">
              <option value="mujer">Mujer</option>
              <option value="hombre">Hombre</option>
              <option value="otro">Otro</option>
            </select>
          </label>
        </div>
      </div>
      <footer>
        <button type="button" onClick={()=> Object.keys(value).forEach(val => setValue({ [val]: '' }))}>cancelar</button>
        <button type="submit">Enviar</button>
      </footer>
      <style jsx>{`
        form{
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          height: 100%;
        }
        header{
          color: ${color.prim};
        }
        .body{
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          height: 100%;
          padding: .5rem;
        }
        input{
          font-size: 12px;
          width: 100%;
          margin-bottom: 1rem;
          padding-left: .5rem;
        }
        input[type="date"]{
          border: 1px solid rgba(0, 0, 0, .2);
        }
        .fullName{
          display: flex;
          width: 100%;
          justify-content: center;
          align-items: center;
        }
        .fullName input{
        }
        .fullName input:nth-child(2){
          margin-left: .5rem;
        }
        .birth_sex{
          display: flex;
          justify-content: space-around;
          width: 100%;
        }
        footer{
          display: flex;
          justify-content: flex-end;
          align-items: center;
          width: 100%;
          padding: .5rem;
        }
        button{
          background: transparent;
          color: ${color.prim};
          border: 2px solid ${color.prim};
          transition: 250ms ease;
          margin-left: .5rem;
        }
        button:focus{
          outline: none;
        }
        button:hover{
          color: #fff;
          background: ${color.prim};
        }
      `}
      </style>
    </form>
  )
}

const LogReg = ({ children }) => {

  return(
    <div className="main_cont">
      <div className="main">
        <div className="publish">
        </div>
        <div className="cont">
          {children}
        </div>
      </div>
      <style jsx>{`
        .main_cont{
          height: 100vh;
          width: 70%;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }
        .main{
          height: 50%;
          width: 80%;
          background: #fff;
          animation: down 600ms ease-in-out;
          animation-fill-mode: forwards;
          display: flex;
        }
        .publish{
          width: 50%;
          height: 100%;
          background: url('/static/random/r16.jpg')top center no-repeat;
          background-size: cover;
        }
        .cont{
          width: 50%;
        }
        @keyframes down{
          0%{
            opacity: 0;
            transform: translateY(-100%);
          }
          50%{
            transform: translateY(50px);
          }
          100%{
            opacity: 1;
            transform: translateY(0px);
          }
        }
      `}
      </style>
    </div>
  )
}

const Modal = () => {
  const menu = useSelector(state => state.main.nav.visible);
  const main = useSelector(state => state.main.nav);
  const { login, register } = main;
  return(
    <div className="modal">
      {
        login && <LogReg><Login /></LogReg>
      }
      {
        register && <LogReg><Register /></LogReg>
      }
      <style jsx>{`
        .modal{
          display: ${menu ? 'block' : 'none'};
          position: fixed;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background: rgba(0, 0, 0, .5);
          z-index: 150;
          content: " ";
          transition: 250ms ease;
        }
      `}
      </style>
    </div>
  )
}

const Layout = ({ children }) => {
  return(
    <div>
      <Head>
        <link rel="stylesheet" href="/static/animate.min.css"/>
        <link rel="stylesheet" href="/static/aos.css"/>
        <link href="https://fonts.googleapis.com/css?family=Archivo+Black|Open+Sans|Pacifico&display=swap" rel="stylesheet"/>
      </Head>
      <main>
        <Header />
        {children}
      </main>
      <Menu />
      <Modal />
      <style jsx>{`
        div{
          display: flex;
          width: 100%;
          position: relative;
        }
        main{
          width: 100%;
          position: relative;
          flex: 1 1 0;
          overflow: hidden;
        }
      `}
      </style>
    </div>
  )
}

export default Layout;
