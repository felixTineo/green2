import { combineReducers } from 'redux';
import {
  ON_DOWN, ON_VIEW_NAV,
  navView,
  ON_NOTE,
  ON_NOTIFICATIONS,
  ON_LOADER,
  ON_LOGIN,
  ON_USER,
  ON_GREENINFO,
} from './actions';

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
  greenpost:{
    info: false,
  },
  user:{
    id: '',
    owner: false,
    mail: '',
    pass: '',
    name: '',
    lastName: '',
    birthday: '',
    greenPost: {
      likes:[],
      comments: [],
      wish: {},
    },
    perfilImg: '',
    originCity: '',
    actualCity: '',
    primaryShool: '',
    secondarySchoool: '',
    university: '',
    job: '',
    posts: [{
      green:true,
      img: '',
      date: '',
      author: '',
      _id: '',
      history: '',
      comments: [],
      likes: [],
      wish:{
        id: '123456789',
        name: 'Oreo',
        img: '/static/store/products/gol-1.jpg',
        tag: 'gol', price: 100,
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, cumque atque, dolore qui, tempora delectus provident saepe dicta minus iusto iste autem? Aut, ipsum. Ipsam illo perspiciatis optio architecto cumque!'
      }
    }],
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
    case ON_LOGIN:
      return Object.assign({}, state, { login: action.option });
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
    case ON_USER:
      return Object.assign({}, state, action.user);
    default:
      return state;
  }
};

const greenpost = (state = initialState.greenpost, action) => {
  switch (action.type) {
    case ON_GREENINFO:
      return Object.assign({}, state, { info: !state.info });
    default:
      return state;
  }
}

export const store = combineReducers({
  nav,
  user,
  greenpost,
});
