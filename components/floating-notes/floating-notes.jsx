import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { OFF_FLOAT } from '../../store/actions'
import './floating-notes.scss';
import io from 'socket.io-client';
import MyLink from '../mylink/link';
import uuid from 'uuid/v1';

const Note = ({ note }) => {
  const dispatch = useDispatch();
  const { user } = note;
  useEffect(()=> {
    setTimeout(() => {
      dispatch({ type: OFF_FLOAT, id: note.id })
    }, 6000)
  },[note]);
  const date = new Date(Date.now());
  return(
      <div id={note.id} className="floating_note_cont shadow animated">
        <header>
          <p>
            {
              (()=> {
                switch (note.type) {
                  case 'ACCEPT':
                    return 'Nuevo Amigo'
                  case 'REACTION':
                    return 'Reaccion';
                  case 'FRIEND':
                    return 'Solicitud'
                  case 'COMMENT':
                    return 'Comentario'
                  case 'GIFT':
                    return 'Regalo'
                  case 'TRANSACTION':
                    return 'Transacción'
                }
              })()
            }
          </p>
          <button onClick={()=> dispatch({ type: OFF_FLOAT, id: note.id })} >x</button>
        </header>
        <MyLink id={user.url}>
          <div className="body">
            <img src={note.type === 'GIFT' ? user.img : user.perfilImg} alt=""/>
            <div className="info">
              <p>{note.type === 'GIFT' ? user.name : user.fullName}</p>
              <small>
                {
                  (()=> {
                    switch (note.type) {
                      case 'ACCEPT':
                        return 'Acepto tu solicitud de amistad';
                      case 'REACTION':
                        return 'Reacciono a uno de tus posts';
                      case 'FRIEND':
                        return 'Quiere Ser Tu Amigo'
                      case 'COMMENT':
                        return 'Comento uno de tus posts'
                      case 'GIFT':
                        return 'Has recibido un regalo'
                      case 'TRANSACTION':
                        return 'Has realizado una transaccion'
                    }
                  })()
                }
              </small>
            </div>
          </div>
        </MyLink>
        <style jsx>{`
          div.floating_note_cont{
            width: 65%;
            background: #fff;
            position: relative;
            left: 100%;
            margin: .5rem;
            z-index: 50;
            border-radius: 3px;
          }
          header{
            padding: .2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #8bb940;
          }
          header p{
            margin: 0;
          }
          header button{
            background: transparent;
            transition: 250ms ease;
            border: none;
            color: #333;
          }
          header button:focus{
            outline: none;
          }
          header button:hover{
            color: #fff;
          }
          div.body{
            padding: .2rem;
            margin: 0;
            display: flex;
          }
          .body p {
            margin: 0;
          }
          .body .info{
            margin-left: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
          }
          small{
            font-size: 11px;
            margin: 0;
          }
          img{
            width: 60px;
            height: 60px;
            border-radius: 50%;
            object-fit: cover;
            object-position: center;
          }
        `}
        </style>
      </div>
  )
}

const FloatingNotes = () => {
  const notes = useSelector(state => state.floatingnotes);
  return(
    <div className="floating_main_cont">
      {
        notes.map((note, i) => <div className="animated fadeInLeft"><Note key={uuid()} note={note} /></div>)
      }
      <style jsx>{`
        .floating_main_cont{
          position: fixed;
          top: 0;
          left: -30%;
          border: 1px solid red;
          width: 30%;
          height: 100vh;
          display: flex;
          flex-direction: column-reverse;
          z-index: 50;
        }
      `}
      </style>
    </div>
  )
}

export default FloatingNotes;
