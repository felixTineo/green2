import React, { useEffect, useState } from 'react';
import './floating-notes.scss';
import io from 'socket.io-client';
import MyLink from '../mylink/link';

const notification = {
  noteId: '123456789',
  type: 'Reaccion',
  msg: 'Reacciono a tu post',
  user: {
    perfilImg: '/static/random/r2.jpg',
    fullName: 'Green Star',
    id: '123456789',
  }
}

const Note = ({ note, rmNote }) => {
  const { type, user, msg } = note;
  return(
      <div className="floating_note_cont shadow animated fadeInLeft">
        <header>
          <p>{note.type}</p>
          <button id={note.noteId} onClick={rmNote} >x</button>
        </header>
        <MyLink>
          <div className="body">
            <img src={user.perfilImg} alt=""/>
            <div className="info">
              <p>{user.fullName}</p>
              <small>{msg}</small>
            </div>
          </div>
        </MyLink>
        <style jsx>{`
          div.floating_note_cont{
            width: 60%;
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
            align-items: center;
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
  const [notes, setNotes] = useState([notification]);
  const rmNote = (e) => {
    const newNotes = notes.filter(note => note.noteId !== e.target.id);
    setNotes(newNotes);
  }
  return(
    <div className="floating_main_cont">
      {
        notes.map(note => <Note note={note} rmNote={rmNote} />)
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
        flex-direction: column;
        justify-content: flex-end;
        z-index: 50;
      }
    `}
    </style>
    </div>
  )
}

export default FloatingNotes;
