import { combineReducers } from 'redux';
import { ON_DOWN, ON_VIEW_NAV, navView, ON_NOTE, ON_NOTIFICATIONS, ON_LOADER } from './actions';

export const initialState = {
  nav:{
    loader:0,
    login: false,
    down: false,
    wallet: 0,
    notifications: {
      id: '',
      notes: {
        view: false,
        items: [],
      },
      gifts: {
        view: false,
        items: [],
      },
      friendReq:{
        view: false,
        items: [],
      },
    },
  },
  user:{
    id: '',
    owner: false,
    mail: '',
    pass: '',
    name: '',
    lastName: '',
    birthday: '',
    greenPost: '',
    perfilImg: '',
    originCity: '',
    actualCity: '',
    primaryShool: '',
    secondarySchoool: '',
    university: '',
    job: '',
    interest: [],
    events: [],
    friends: [],
  },
};

const nav = (state= initialState.nav, action) => {
  switch(action.type){
    case ON_DOWN:
      return Object.assign({}, state, { down: action.option });
    case ON_NOTIFICATIONS:
      return Object.assign({}, state, { notifications: action.notifications });
    case ON_LOADER:
      return Object.assign({}, state, { loader: action.loader });
    case ON_VIEW_NAV:
      if(action.note === navView.GIFT){
        return Object.assign({}, state, {
          notifications: Object.assign({}, state.notifications, {
            gifts: Object.assign({}, state.notifications.gifts, { view: true }),
          })
        });
      }
      if(action.note === navView.NOTES){
        return Object.assign({}, state, {
          notifications: Object.assign({}, state.notifications, {
            notes: Object.assign({}, state.notifications.notes, { view: true }),
          })
        });
      }
      if(action.note === navView.FRIEND){
        return Object.assign({}, state, {
          notifications: Object.assign({}, state.notifications, {
            friendReq: Object.assign({}, state.notifications.friendReq, { view: true }),
          })
        });
      }
    case ON_NOTE:
      if(action.payload.note === navView.GIFT){
        return Object.assign({}, state, {
          notifications: Object.assign({}, state.notifications, {
            gifts: Object.assign({}, state.notifications.gifts, {
              view: false,
              items: action.payload.items,
            })            
          })
        })
      }
      if(action.payload.note === navView.NOTES){
        return Object.assign({}, state, {
          notifications: Object.assign({}, state.notifications, {
            notes: Object.assign({}, state.notifications.notes, {
              view: false,
              items: action.payload.items,
            })            
          })
        })
      }
      if(action.payload.note === navView.FRIEND){
        return Object.assign({}, state, {
          notifications: Object.assign({}, state.notifications, {
            friendReq: Object.assign({}, state.notifications.friendReq, {
              view: false,
              items: action.payload.items,
            })            
          })
        })
      }
    default:
      return state;
  }
};

const user = (state= initialState.user, action) => {
  switch(action.type){
    default:
      return state;
  }
};

export const store = combineReducers({
  nav,
  user,
});
