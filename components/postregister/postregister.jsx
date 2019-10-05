import React, { useReducer, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ON_POST_REGISTER, ON_GREEN_CREATOR, ON_UPDATE, ON_WALLET } from '../../store/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Modal } from 'reactstrap';
import './postregister.scss';
import Logo from '../layout/logo';
import axios from 'axios';
import Loader from '../loader/loader';


const BtnUpload = () => {

  return(
    <div className="btnUpload_main_cont">
      <label htmlFor="img">
        <div className="img_cont">
          <img src="" alt=""/>
          <FontAwesomeIcon icon={faUser} />
        </div>
        <input id="img" name="img" type="file"/>
      </label>
    </div>
  )
};

const Welcome = () => {

  return(
    <div className="welcome_main_cont">
      <h1>Bienvenido a <span>Greenlink!</span></h1>
      <p>Completa el registro agregando informacion adicional y creando tu primer <strong>GreenPost,</strong> de esta manera podras ser encontrado por otros usuarios ademas de recibir obsequios. Recuerda, mietras mas preciso seas mas facil sera que tus seres queridos contacten contigo.</p>
    </div>
  )
};

const Congratulations = () => {
  const user = useSelector(state => state.user);
  return(
    <div className="welcome_main_cont">
      <h1>Felicidades {user.name}</h1>
      <p>No olvides crear tu primer<strong>GreenPost,</strong></p>
    </div>
  )
};

const UserInfo = ({ values, setValues, onImg }) => {
  const user = useSelector(state => state.user);
  return(
    <div className="user_postregister_cont">
      <label htmlFor="perfilImg">
        {
          !values.perfilImgFrontEnd && <FontAwesomeIcon icon={faUser} />
        }
        {
          values.perfilImgFrontEnd && <img src={values.perfilImgFrontEnd} alt=""/>
        }
        <input onChange={onImg} type="file" name="perfilImg" id="perfilImg"/>
      </label>
      <p>Elige una foto de perfil</p>
      {
        user.name === 'Green' && (
          <>
          <input value={values.name} onChange={(e)=> setValues({ name: e.currentTarget.value })} placeholder="Nombre" type="text"/>
          <input value={values.lastName} onChange={(e)=> setValues({ lastName: e.currentTarget.value })} placeholder="Apellido" type="text"/>
          <div className="birth_sex_main">
              <p>Cumpleaños</p>
              <input
                type="date"
                value={values.birthday}
                onChange={(e)=> setValues({ birthday: e.currentTarget.value })}
              />
            <div className="birthday_sex" style={{ marginLeft: '1rem' }}>
              <p>Sexo</p>
              <select onChange={(e)=> setValues({ sex: e.currentTarget.value })} name="sex" id="sex">
                <option value="female">Mujer</option>
                <option value="male">Hombre</option>
                <option value="otro">Otro</option>
              </select>
            </div>
          </div>
          </>
        )
      }
    </div>
  )
};

const PostRegister = () =>{
const dispatch = useDispatch();
const [values, setValues] = useReducer((state, next) => ({ ...state, ...next }),{
  name: '',
  lastName: '',
  birthday: '',
  sex: '',
  perfilImgFrontEnd:'',
  perfilImg: '',
});
const user = useSelector(state => state.user);
const onImg = (e) => {
  const img = e.target.files[0];
  const reader = new FileReader();
  reader.onloadend = () => {
    if(reader.result){
      setValues({ perfilImgFrontEnd: reader.result, perfilImg: img });
    } else {
      setValues({ perfilImgFrontEnd: null, perfilImg: null });
    }
  }
  reader.readAsDataURL(img);
  console.log(perfilImg);
  console.log(img);
}

  const [section, setSection] = useReducer((state, next) => ({ ...state, ...next }), {
    welcome: true,
    info: false,
    loader: false,
    congratulations: false,
  })
  const visible = useSelector(state => state.postregister);

  const onSubmit = async() => {
    try{
      const { name, lastName, birthday, sex, perfilImg } = values;
      const data = new FormData();
      setSection({ info: false, loader: true });
      if(user.name === 'Green'){
        data.append('name', name);
        data.append('lastName', lastName);
        data.append('birthday', birthday);
        data.append('sex', sex);
      }
      data.append('perfilImg', perfilImg);
      const res = await axios.post('/user/postregister', data);
      dispatch({ type: ON_UPDATE, payload: res.data });
      dispatch({ type: ON_WALLET, coin: 50 });
      setSection({ loader: false, congratulations: true });
      setTimeout(()=> {
        dispatch({ type: ON_POST_REGISTER });
      }, 3000)
    }catch(err){
      console.log(err);
    }
  }

  return(
    <Modal className="my_modal" isOpen={visible}>
      <div className="postregister_main_cont">
        <header><Logo dark url="/"/></header>
        <div className="body">
          {
            section.welcome && <Welcome />
          }
          {
            section.info && <UserInfo values={values} setValues={setValues} onImg={onImg} />
          }
          {
            section.loader && <Loader dark />
          }
          {
            section.congratulations && <Congratulations />
          }
        </div>
        <footer>
          {
            section.welcome && <button onClick={()=> setSection({ welcome: false, info: true })}>siguiente</button>
          }
          {
            section.info && <button onClick={onSubmit}>enviar</button>
          }
        </footer>
      </div>
    </Modal>
  )
}

export default PostRegister;
