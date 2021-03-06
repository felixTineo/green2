import React, { useState, useEffect, useReducer } from 'react';
import './login.scss';
import Layout from '../components/layout/layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import Logo from '../components/layout/logo';
import { TweenMax } from 'gsap';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { ON_LOADER } from '../store/actions';
import { Popover, PopoverBody } from 'reactstrap';
import Router from 'next/router';
import { ON_LOGIN } from '../store/actions';

const LoginForm = ({ setLogin }) => {
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const [popMail, setPopMail] = useState(false);
  const [popPass, setPopPass] = useState(false);
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const onSubmit = async (e) => {
    try{
      e.preventDefault();
      let count = 0;
      setActive(true);
      let interval = setInterval(()=> {
        count = count + 15;
        if(count >= 75){
          clearInterval(interval);
          dispatch({ type: ON_LOADER, loader: 99 });
        } else{
          dispatch({ type: ON_LOADER, loader: count });
        }
      }, 1000);
      const data = { mail, pass };
      const res = await axios.post('/user/login', data);
      clearInterval(interval);
      if(res.data === 'mail'){
        setActive(false);
        dispatch({ type: ON_LOADER, loader: 0 });
        return setPopMail(true);
      }
      if(res.data === 'pass'){
        setActive(false);
        dispatch({ type: ON_LOADER, loader: 0 });
        return setPopPass(true);
      }
      dispatch({ type: ON_LOADER, loader: 100 });
      Router.push(`/perfil/${res.data}`);
      dispatch({ type: ON_LOADER, loader: 100 });
    }catch(err){
      console.log(err);
      dispatch({ type: ON_LOADER, loader: 0 });
    }
  }


return(
  <div className="login_register_cont animated fadeIn">
    <header>
        <h1>Inicio de sessión</h1>
    </header>
    <form onSubmit={onSubmit}>
      <label htmlFor="mail">
        <p>usuario</p>
        <input disabled={active} autoComplete="false" onBlur={()=> setPopMail(false)} onFocus={()=> setPopMail(false)} id="mail" value={mail} onChange={(e)=> setMail(e.currentTarget.value)} type="text"/>
        <Popover isOpen={popMail} target="mail" placement="bottom">
          <PopoverBody>
            <span>El correo no es correcto, por favor verifiquelo e intentelo de nuevo</span>
          </PopoverBody>
        </Popover>
      </label>
      <label htmlFor="pass">
        <p>contraseña</p>
        <input disabled={active} onBlur={()=> setPopPass(false)} onFocus={()=> setPopPass(false)} id="pass" value={pass} onChange={(e)=> setPass(e.currentTarget.value)} type="password"/>
        <Popover isOpen={popPass} target="pass" placement="bottom">
          <PopoverBody>
            <span>El correo no es correcto, por favor verifiquelo e intentelo de nuevo</span>
          </PopoverBody>
        </Popover>
      </label>
      <footer className="login_register_cont">
        <button disabled={active} onClick={()=>setLogin(false)} className="btn_loogin_register btn_inactive" type="button">registro</button>
        <button disabled={active} className="btn_loogin_register btn_active" type="submit">login</button>
      </footer>
    </form>
  </div>
)
}

const RegisterForm = ({ setLogin }) => {
  const dispatch = useDispatch();
  const [mailPop, setMailPop] = useState();
  const [values, setValues] = useReducer((state, newState) => ({...state, ...newState}),{
    name: '',
    lastName: '',
    mail: '',
    pass: '',
    birthday: '',
    sex: '',
  });

  const onSubmit = async (e) => {
    try{
      e.preventDefault();
      let count = 0;
      const interval = setInterval(()=> {
        count = count + 15;
        dispatch({ type: ON_LOADER, loader: count });
      }, 1000);
      const data = {
        name: values.name,
        lastName: values.lastName,
        mail: values.mail.toLocaleLowerCase(),
        pass: values.pass,
        birthday: values.birthday,
        sex: values.sex,
      };
      const res = await axios.post('/user/register', data);
      clearInterval(interval);
      if(res.data === 'mail'){
        dispatch({ type: ON_LOADER, loader: 0 });
        setMailPop(true);
      } else {
        dispatch({ type: ON_LOADER, loader: 100 });
        console.log(res.data);
        Router.push(`/perfil/${res.data}`);
      }
    }catch(err){
      console.log(err);
    }
  }

  return(
    <div className="register_login_cont animated fadeIn">
      <header>
        <h1>registro</h1>
        <p>Gratis, facil y rapido</p>
      </header>
      <form onSubmit={onSubmit}>
        <div className="fullName">
          <input
            id="name"
            type="text"
            placeholder="Nombre"
            value={values.name}
            onChange={(e)=> setValues({ name: e.currentTarget.value })}
          />
          <input
            style={{ marginLeft:".5rem" }}
            id="lastName"
            type="text"
            placeholder="Apellido"
            value={values.lastName}
            onChange={(e)=> setValues({ lastName: e.currentTarget.value })}
          />
        </div>
        <input
          id="mail"
          type="text"
          placeholder="Correo electrónico"
          value={values.mail}
          onFocus={()=>setMailPop(false)}
          onChange={(e)=> setValues({ mail: e.currentTarget.value })}
        />
      <Popover placement="bottom" target="mail" isOpen={mailPop}>
        <PopoverBody>
          <span>El correo ya fue usado para crear otra cuenta</span>
        </PopoverBody>
      </Popover>
        <input
          id="pass"
          type="password"
          placeholder="Contraseña"
          value={values.pass}
          onChange={(e)=> setValues({ pass: e.currentTarget.value })}
        />
        <div className="birth_sex_main">
          <div className="birthday_sex">
            <p>Cumpleaños</p>
            <input
              id="birthday"
              type="date"
              placeholder="Correo electrónico"
              value={values.birthday}
              onChange={(e)=> setValues({ birthday: e.currentTarget.value })}
            />
          </div>
          <div className="birthday_sex" style={{ marginLeft: '1rem' }}>
            <p>Sexo</p>
            <select onChange={(e)=> setValues({ sex: e.currentTarget.value })} name="sex" id="sex">
              <option value="female">Mujer</option>
              <option value="male">Hombre</option>
              <option value="otro">Otro</option>
            </select>
          </div>
        </div>
        <footer className="login_register_cont">
          <button className="btn_loogin_register btn_active" type="submit">registro</button>
          <button onClick={()=> setLogin(true)} className="btn_loogin_register btn_inactive" type="button">login</button>
        </footer>
      </form>
    </div>
  )
}


const Login = () => {
  const [login, setLogin] = useState(true);
  return(
    <Layout>
      <div className="login_main_cont">
        <div className="login_cont shadow">
          <div className="green_cont">
            <header><Logo url='/'/></header>
            <div className="green_logo">
              <h1><FontAwesomeIcon icon={faGift} /></h1>
              <p>Comparte, disfruta... Ayuda el planeta</p>
              <button type="button">¿quieres saber mas?</button>
            </div>
            <small>Comparte con los seres que amas y ayuda a el planeta.</small>
          </div>
          {
            login && <LoginForm setLogin={setLogin} />
          }
          {
            !login && <RegisterForm setLogin={setLogin} />
          }
        </div>
      </div>
    </Layout>
  )
};

export default Login;
