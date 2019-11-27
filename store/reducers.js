import { combineReducers } from 'redux';
import { themeGreen, themeRed, themeBlue } from '../layout/main';
const themes = [themeGreen, themeRed, themeBlue];
import {
  ON_DOWN, ON_VIEW_NAV,
  navView,
  ON_NOTE,
  ON_NOTIFICATIONS,
  ON_LOADER,
  ON_LOGIN,
  ON_USER,
  ON_GIFT,
  ON_GREENINFO,
  ON_GREENPOST,
  ON_GREEN_CREATOR,
  ON_GREEN_LIKE,
  OFF_GREEN_LIKE,
  ON_GREEN_WISH_FOUND,
  ON_GREEN_COMMENT,
  ON_STORE,
  storeSections,
  ON_PRODUCTS,
  ON_POST_REGISTER,
  ON_WALLET,
  ON_UPDATE,
  ON_FLOAT,
  OFF_FLOAT,
  ON_VAULT,
  ON_VAULT_HOME,
  ON_VAULT_PRODUCT,
  ON_SPACE_HOME,
  ON_SPACE_WALL,
  ON_SPACE_CHAT,
  ON_SPACE_FRIENDS,
  ON_SPACE_EVENTS,
  spaceSections,
  ON_POST,
  ON_WALL_TOP,
  ON_WALL_POSTS,
  ON_CONFIRM,
  ON_WISH,
  ON_CHAT_FRIEND,
  ON_CHAT_PRIVATE,
  ON_CHAT_CLOSE,
  ON_CHAT_MINIMIZE,
  ON_CHAT_MSG,
  ON_CHAT_ALERT,
  ON_MAIN_NAV,
  ON_MAIN_THEME,
  ON_MAIN_LOGIN,
  ON_MAIN_REGISTER,
  ON_POST_VIEW,
} from './actions';

export const initialState = {
  nav:{
    loader:0,
    login: false,
    down: false,
    wallet: 0,
    notifications: {
      id: '',
      wallet: 0,
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
    greenPost: [{
      _id:'',
    }],
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
  greenpost:{
    _id: '',
    info: false,
    creator: false,
    current:{
      likes:[],
      comments: [],
      wish: {},
    },
  },
  store:{
    postType: '',
    visible: false,
    current: {},
    home: false,
    product: false,
    music: false,
    ebook: false,
    toy: false,
    tv: false,
    jewel: false,
    candy: false,
    items: [],
  },
  vault:{
    visible: false,
    home: true,
    product: false,
    current: {},
    items: [],
  },
  postregister: false,
  floatingnotes:[],
  space:{
    home: true,
    wall: false,
    chat: false,
    friends: false,
    envents: false,
  },
  wall:{
    top:[],
    posts:[],
  },
  confirm:{
    visible: false,
    current:{},
  },
  chat:{
    friends:[],
    privates:[],
    current:'',
  },
  main:{
    nav:{
      visible: false,
      login: false,
      register: false,
    },
    theme: 0,
  },
  post: {
    visible: false,
    current: {},
  }
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
    case ON_WALLET:
      return Object.assign({}, state, {
        notifications: Object.assign({}, state.notifications, { wallet: state.notifications.wallet + action.coin })
      });
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
      const { gifts, notes, friendReq } = state.notifications;

      if(action.payload.note === navView.GIFT){
        return Object.assign({}, state, {
          notifications: Object.assign({}, state.notifications, {
            gifts: Object.assign({}, state.notifications.gifts, {
              view: false,
              items: [action.payload.user, ...gifts.items],
            })
          })
        })
      }
      if(action.payload.note === navView.NOTES){
        return Object.assign({}, state, {
          notifications: Object.assign({}, state.notifications, {
            notes: Object.assign({}, state.notifications.notes, {
              view: false,
              items: [action.payload.user, ...notes.items],
            })
          })
        })
      }
      if(action.payload.note === navView.FRIEND){
        return Object.assign({}, state, {
          notifications: Object.assign({}, state.notifications, {
            friendReq: Object.assign({}, state.notifications.friendReq, {
              view: false,
              items: [action.payload.user, ...friendReq.items],
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
    case ON_UPDATE:
      return Object.assign({}, state, { ...action.payload });
    default:
      return state;
  }
};

const greenpost = (state = initialState.greenpost, action) => {
  switch (action.type) {
    case ON_GREENINFO:
      return Object.assign({}, state, { info: action.option });
    case ON_GREEN_CREATOR:
      return Object.assign({}, state, { creator: !state.creator });
    case ON_GREENPOST:
      return Object.assign({}, state, { current: action.greenpost });
    case ON_GREEN_LIKE:
      return Object.assign({}, state, {
        current: Object.assign({}, state.current, { likes: [action.like, ...state.current.likes] })
      });
    case ON_WISH:
      return Object.assign({}, state, {
        current: Object.assign({}, state.current, { wish: action.wish })
      })
    case OFF_GREEN_LIKE:
      const nextState = state.current.likes.filter(like => like._id !== action.uid);
      return Object.assign({}, state, {
        current: Object.assign({}, state.current, { likes: nextState })
      });
    case ON_GREEN_WISH_FOUND:
      return Object.assign({}, state, {
        current: Object.assign({}, state.current, {
          wish: Object.assign({}, state.current.wish, {
            found: state.current.wish.found + action.found
          })
        })
      });
    case ON_GREEN_COMMENT:
      return Object.assign({}, state, {
        current: Object.assign({}, state.current, { comments: [...state.current.comments, action.comment] })
      })
    default:
      return state;
  }
};

const greenstore = (state = initialState.store, action) => {
  const { HOME, PRODUCT, MUSIC, TV, EBOOK, CANDY, TOY, JEWEL } = storeSections;
  switch(action.type){
    case ON_STORE:
      return Object.assign({}, state, { visible: !state.visible, home: true, postType: action.payload || '', });
    case ON_PRODUCTS:
      return Object.assign({}, state, { items: action.products });
    case PRODUCT:
      return Object.assign({}, state, {
        current: action.product,
        product: true,
        home: false,
        jewel: false,
        ebook: false,
        music: false,
        toy: false,
        tv: false,
        candy: false,
      });
    case HOME:
      return Object.assign({}, state, {
        product: false,
        home: true,
        jewel: false,
        ebook: false,
        music: false,
        toy: false,
        tv: false,
        candy: false,
      });
    case MUSIC:
      return Object.assign({}, state, {
        product: false,
        home: false,
        jewel: false,
        ebook: false,
        music: true,
        toy: false,
        tv: false,
        candy: false,
      });
    case TV:
      return Object.assign({}, state, {
        product: false,
        home: false,
        jewel: false,
        ebook: false,
        music: false,
        toy: false,
        tv: true,
        candy: false,
      });
    case JEWEL:
      return Object.assign({}, state, {
        product: false,
        home: false,
        jewel: true,
        ebook: false,
        music: false,
        toy: false,
        tv: false,
        candy: false,
      });
    case TOY:
      return Object.assign({}, state, {
        product: false,
        home: false,
        jewel: false,
        ebook: false,
        music: false,
        toy: true,
        tv: false,
        candy: false,
      });
    case CANDY:
      return Object.assign({}, state, {
        product: false,
        home: false,
        jewel: false,
        ebook: false,
        music: false,
        toy: false,
        tv: false,
        candy: true,
      });
    case EBOOK:
      return Object.assign({}, state, {
        product: false,
        home: false,
        jewel: false,
        ebook: true,
        music: false,
        toy: false,
        tv: false,
        candy: false,
      });
    default:
      return state
  }
};

const postregister = (state = initialState.postregister, action) => {
  if(action.type === ON_POST_REGISTER){
    return !state;
  }
  return state;
};

const floatingnotes = (state = initialState.floatingnotes, action) => {
  if(action.type === ON_FLOAT){
    return [...state, action.payload];
  }
  if(action.type === OFF_FLOAT){
    const nextState = state.filter(note => note.id !== action.id);
    return nextState;
  }
  return state;
};

const vault = (state = initialState.vault, action) => {
  switch (action.type) {
    case ON_VAULT:
      return Object.assign({}, state, { visible: !state.visible });
    case ON_VAULT_HOME:
      return Object.assign({}, state, { home: true, product: false });
    case ON_VAULT_PRODUCT:
      return Object.assign({}, state, { home: false, product: true, current: action.product })
    default:
      return state;
  }
};

const space = (state = initialState.space, action) => {
  switch (action.type) {
    case ON_SPACE_HOME:
      return Object.assign({}, state, { home: true, wall: false, chat: false, friends: false, events: false });
    case ON_SPACE_WALL:
      return Object.assign({}, state, { home: false, wall: true, chat: false, friends: false, events: false });
    case ON_SPACE_CHAT:
      return Object.assign({}, state, { home: false, wall: false, chat: true, friends: false, events: false });
    case ON_SPACE_FRIENDS:
      return Object.assign({}, state, { home: false, wall: false, chat: false, friends: true, events: false });
    case ON_SPACE_EVENTS:
      return Object.assign({}, state, { home: false, wall: false, chat: false, friends: false, events: true });
    default:
      return state;
  }
};
const wall = (state = initialState.wall, action) => {
  switch (action.type) {
    case ON_POST:
      return Object.assign({}, state, { posts: [action.post, ...state.posts] });
    case ON_WALL_TOP:
      return Object.assign({}, state, { top: action.posts });
    case ON_WALL_POSTS:
      return Object.assign({}, state, { posts: action.posts });
    default:
      return state;
  }
};

const confirm = (state = initialState.confirm, action) => {
  switch (action.type) {
    case ON_CONFIRM:
      return Object.assign({}, state, { visible: !state.visible, current: action.current });
    default:
      return state;
  }
}

const chat = (state = initialState.chat, action) => {
  const { privates } = state;
  switch (action.type) {
    case ON_CHAT_PRIVATE:
      //const nextArr = privates.length === 4 ?  privates.slice(0, 3) : privates;
      return Object.assign({}, state, { privates: [action.user, ...privates.slice(3)] });
    case ON_CHAT_CLOSE:
      return Object.assign({}, state, { privates: privates.filter(user => user._id !== action._id) });
    case ON_CHAT_MINIMIZE:
      return Object.assign({}, state, { privates: privates.map(user => user._id !== action._id ? user : Object.assign({}, user, { minimize: action.option })) });
    case ON_CHAT_MSG:
      return Object.assign({}, state, { privates: privates.map(user => user._id !== action._id ? user : Object.assign({}, user, { history: [ ...user.history, action.msg ] })), current: action._id });
    case ON_CHAT_ALERT:
      return Object.assign({}, state, { privates: privates.map(user => user._id !== action._id ? user : Object.assign({}, user, { anAlert: action.option })) });
    default:
      return state;
  }
}

const main = (state = initialState.main, action) => {
  switch (action.type) {
    case ON_MAIN_NAV:
      const { visible } = state.nav;
      return Object.assign({}, state, { nav: Object.assign({}, state.nav, { visible: !visible, login: false, register: false }) });
    case ON_MAIN_THEME:
      return Object.assign({}, state, { theme: action.index });
    case ON_MAIN_LOGIN:
      return Object.assign({}, state, {
        nav: Object.assign({}, state.nav, { register: false, login: true })
      })
    case ON_MAIN_REGISTER:
      return Object.assign({}, state, {
        nav: Object.assign({}, state.nav, { register: true, login: false })
      })
    default:
      return state;
  }
}

const post = (state = initialState.post, action) => {
  switch (action.type) {
    case ON_POST_VIEW:
      return Object.assign({}, state, { current: action.post, visible: !state.visible });
    default:
      return state;
  }
}

export const store = combineReducers({
  nav,
  user,
  greenpost,
  greenstore,
  postregister,
  floatingnotes,
  vault,
  space,
  wall,
  confirm,
  chat,
  main,
  post,
});
