import React, { useState, useEffect, useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ON_EVENT } from '../../store/actions';
//import '../../node_modules/bootstrap/scss/bootstrap.scss';
import './base.scss';
import Head from 'next/head';
import Header from './header';
import Menu from './menu';
import Router from 'next/router';
import axios from 'axios';
import { Popover, PopoverBody, Spinner, Modal } from 'reactstrap';
import { color, font } from '../../layout/var';
import Title from '../main/title';

const Login = ({ prim, title, event, setDonate, setLogin }) => {

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
      if(event){
        setLogin(false);
        setDonate(true);
      } else {
        Router.push(`/perfil/${res.data}`);
      }
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
          disable ? <Spinner color={ title === 'siembra' ? 'main-green' : title === 'ayuda' ? 'main-red' : 'main-blue' } /> : <button disabled={disable} type="submit">Login</button>
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
          color: ${prim || color.prim};
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
          border-color: ${prim || color.prim};
        }
        footer{
          display: flex;
          width: 100%;
          justify-content: flex-end;
          padding: .5rem;
        }
        button{
          background: transparent;
          border: 2px solid ${prim || color.prim};
          text-transform: uppercase;
          transition: 250ms ease;
          color: ${prim || color.prim};
        }
        button:focus{
          outline: none;
        }
        button:hover{
          background: ${prim || color.prim};
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

const MyModal = () => {
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

const EventHome = ({ current, setDonate }) => {

  return(
    <>
      <header>
        <div>
          <h1>{current.title}</h1>
          <p className="subTitle">{current.subTitle}</p>
        </div>
      </header>
      <div className="body">
        <p>{current.description}</p>
      </div>
      <footer>
        <button>Participar</button>
        <button onClick={()=> setDonate(true)}>Donar</button>
      </footer>
      <style jsx>{`
        header{
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }
        header div{
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          margin: 5rem 0 1rem;
        }
        h1, p{
          max-width: 100%;
        }
        header h1, .subTitle{
          margin:0;
          color: ${current.prim};
          text-transform: uppercase;
        }
        button{
          background: transparent;
          border: 2px solid ${current.prim};
          color: ${current.prim};
          transition: 250ms ease;
        }
        button:focus{
          outline: none;
        }
        button:hover{
          background: ${current.prim};
          color: #fff;
        }
        .body{
          flex-grow: 1;
        }
        footer{
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }
        footer button{
          margin-left: 1rem;
        }
      `}
      </style>
    </>
  )
}

const Donate = ({ current }) => {
  const [login, setLogin] = useState(false);
  const [donate, setDonate] = useState(false);
  const [welcome, setWelcome] = useState(false);
  const [loader, setLoader] = useState(false);
  const [mount, setMount] = useState(0);
  const [user, setUser] = useState({ fullName: 'star green', perfilImg: '/static/random/r5.jpg' });
  const onTest = async()=> {
    try{
      const res = await axios.get('/user/testLogin');
      if(res.data){
        setLoader(false);
        setUser(res.data);
        setDonate(true);
      }
    }catch(e){
      console.log(e);
      setLoader(false);
      setLogin(true);
    }
  }
    useEffect(()=> {
      onTest();
    },[login])

    const onDonate = async(e) => {
      try{
        e.preventDefault();
        setDonate(false);
        setLoader(true);
        setTimeout(()=>{
          setLoader(false);
          setWelcome(true);
        },2000);
      }catch(e){
        console.log(e);
      }
    }
  const { perfilImg, fullName, wallet } = user;
  return(
    <div className="main">
      {
        loader && <div className="loader"><Spinner color={ current.title === 'siembra' ? 'main-green' : current.title === 'ayuda' ? 'main-red' : 'main-blue' } /></div>
      }
      {
        login && <div event className="login"><Login event setDonate={setDonate} setLogin={setLogin} prim={ current.prim } title={current.title} /></div>
      }
      {
        donate && (
          <div className="main_donate animated fadeIn">
            <header>
              <div className="user animated fadeIn delay-1s">
                <img src={perfilImg} alt=""/>
                <p>{fullName}</p>
              </div>
              <div className="found animated flipInX delay-2s">
                <img src="/static/greencoin.svg" alt=""/>
                <p>{wallet}</p>
              </div>
            </header>
            <div className="animated fadeIn delay-2s">
              <h1>Donar</h1>
              <p>Ingresa un monto en greencoins, los mismos seran descontados de su cuenta y seran recibidos por las oganizaciones que apoyan esta causa.</p>
              <form method="POST" onSubmit={onDonate}>
                <input value={mount} onChange={(e)=> setMount(e.currentTarget.value)} type="number"/>
                <button type="submit">donar</button>
              </form>
            </div>
          </div>
        )
      }
      {
        welcome && (
          <div className="welcome animated fadeIn">
            <h1>Felicidades, ya eres embajador de este evento</h1>
            <p>Podras seguir lo que hacemos con tu colaboracion en el siguiente <a href="#">Enlace.</a></p>
            <p>De igual manera las actualizaciones del evento seran publicadas en tu muro.</p>
          </div>
        )
      }
      <style jsx>{`
        .main{
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        header{
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 2rem;
        }
        header p{
          margin: 0;
        }
        .loader{
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .login{
          height: 60%;
        }
        .main_donate h1{
          color: ${current.prim};
        }
        .user img{
          width: 80px;
          height: 80px;
          object-fit: cover;
          object-position: center;
          border-radius: 50%;
        }
        .found{
          display: flex;
          align-items: center;
        }
        .found img{
          width: 30px;
          height: 30px;
          object-fit: cover;
          object-position; center;
        }
        input{
          width: 60px;
        }
        .welcome h1, a{
          color: ${current.prim};
        }
        .welcome a{
          font-wight: 550;
        }
        .welcome p{
          margin: 0;
        }
      `}
      </style>
    </div>
  )
}

const Events = () => {
  const events = useSelector(state => state.events);
  const dispatch = useDispatch();
  const { visible, current } = events;
  const [donate, setDonate] = useState(false);
  useEffect(()=> setDonate(true),[visible]);
  return(
    <Modal isOpen={visible} style={{ minWidth: '95vw' }}>
      <div className="main">
        <button title="Cerrar" onClick={()=> dispatch({ type: ON_EVENT, eventType: null })}>X</button>
        <div className="img">
          <img src={current.img} alt=""/>
        </div>
        <div className="info">
          {
            donate ? <Donate current={current} /> : <EventHome current={current} setDonate={setDonate} />
          }
        </div>
        <style jsx>{`
          .main{
            //height: 80vh;
            height: 100vh;
            display: flex;
            flex-direction: column;
            position: relative;
          }
          .img, .info{
            //width: 50%;
            //height: 100%;
            height: 50%;
          }
          img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: ${current.prim === "#03a7f0" ? 'top' : 'bottom' };
          }
          .info{
            padding: .5rem .5rem .5rem 1rem;
            height: 100%;
            display: flex;
            flex-direction: column;
          }
          button{
            background: transparent;
            border: 2px solid ${current.prim};
            color: ${current.prim};
            transition: 250ms ease;
            position: absolute;
            top: .5rem;
            right: .5rem;
          }
          button:focus{
            outline: none;
          }
          button:hover{
            background: ${current.prim};
            color: #fff;
          }
          @media(min-width: 768px){
            .main{
              height: 80vh;
              flex-direction: row;
            }
            .img, .info{
              width: 50%;
              height: 100%;
            }
          }
        `}
        </style>
      </div>
    </Modal>
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
        <Events />
      </main>
      <Menu />
      <MyModal />
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
