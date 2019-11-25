import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';
import {
  ON_SPACE_HOME,
  ON_SPACE_WALL,
  ON_SPACE_CHAT,
  ON_SPACE_FRIENDS,
  ON_SPACE_EVENTS,
} from '../../store/actions';
import './nav.scss';

const Nav = () => {
  const owner = useSelector(state => state.user.owner);
  const dispatch = useDispatch();
  const space = useSelector(state => state.space);
  const onSection = useCallback((section)=> {
    dispatch({ type: section });
  })
  return(
    <nav className="spacenav_main_cont">
      <ul>
        <li className={classnames({ space_btn_active: space.home })}>
          <button id={ON_SPACE_HOME} onClick={(e)=>onSection(e.currentTarget.id)}>inicio</button>
          <div className="line" />
        </li>
        {
          owner && (
            <li className={classnames({ space_btn_active: space.wall })}>
              <button id={ON_SPACE_WALL} onClick={(e)=>onSection(e.currentTarget.id)}>muro</button>
              <div className="line" />
            </li>
          )
        }
        <li className={classnames({ space_btn_active: space.friends })}>
          <button id={ON_SPACE_FRIENDS} onClick={(e)=>onSection(e.currentTarget.id)}>amigos</button>
          <div className="line" />
        </li>
        <li className={classnames({ space_btn_active: space.events })}>
          <button id={ON_SPACE_EVENTS} onClick={(e)=>onSection(e.currentTarget.id)}>eventos</button>
          <div className="line" />
        </li>
      </ul>
    </nav>
  )
}

export default Nav;
