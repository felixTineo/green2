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
  ON_GREEN_CREATOR,
  ON_STORE,
  storeSections,
  ON_PRODUCTS,
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
  greenpost:{
    info: false,
    creator: false,
  },
  store:{
    visible: true,
    current: {},
    home: false,
    product: false,
    music: true,
    ebook: false,
    toy: false,
    tv: false,
    jewel: false,
    candy: false,
    items: [],
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
    case ON_GREEN_CREATOR:
      return Object.assign({}, state, { creator: !state.creator });
    default:
      return state;
  }
};

const greenstore = (state = initialState.store, action) => {
  const { HOME, PRODUCT, MUSIC, TV, EBOOK, CANDY, TOY, JEWEL } = storeSections;
  switch(action.type){
    case ON_STORE:
      return Object.assign({}, state, { visible: !state.visible, home: true });
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
}

export const store = combineReducers({
  nav,
  user,
  greenpost,
  greenstore,
});
