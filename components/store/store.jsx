import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { storeSections, ON_PRODUCTS } from '../../store/actions';
import './store.scss';
import products from '../../test/products';
import axios from 'axios';
import uuid from 'uuid/v1';

const Home = () => {
  const dispatch = useDispatch();
  return(
    <div className="storehome_main_cont">
      <div className="cont_left">
        <button onClick={()=> dispatch({ type: storeSections.MUSIC })} id="music">
          <img src="/static/store/ms.jpg" alt=""/>
          <span>musica</span>
        </button>
      </div>
      <div className="cont_right">
        <button onClick={()=> dispatch({ type: storeSections.CANDY })} id="candy">
          <img src="/static/store/gol.jpg" alt=""/>
          <span>golosinas</span>
        </button>
        <button onClick={()=> dispatch({ type: storeSections.JEWEL })} className="four" id="jewel">
          <img src="/static/store/bis.jpg" alt=""/>
          <span>bisuteria</span>
        </button>
        <button onClick={()=> dispatch({ type: storeSections.TOY })} className="four" id="toy">
          <img src="/static/store/ty.jpg" alt=""/>
          <span>juguetes</span>
        </button>
        <button onClick={()=> dispatch({ type: storeSections.EBOOK })} className="four" id="ebook">
          <img src="/static/store/eb.jpg" alt=""/>
          <span>ebook's</span>
        </button>
        <button onClick={()=> dispatch({ type: storeSections.TV })} className="four" id="tv">
          <img src="static/store/tv.jpg" alt=""/>
          <span>tv's</span>
        </button>
      </div>
    </div>
  )
}

const Category = ({ tag }) => {
  const items = useSelector(state => state.greenstore.items);
  const products = items.filter(product => product.tag === tag);
  const dispatch = useDispatch();

  const onProduct = (e) => {
    const product = products.find(product => product.id === e.target.id);
    dispatch({ type: storeSections.PRODUCT, product })
  }

  return(
    <div className="category_main_cont">
      <ul>
        {
          products.map(product => (
            <li>
              <button onClick={onProduct} id={product.id} className="shadow">
                <img id={product.id} src={product.img} alt=""/>
                <footer id={product.id}>
                  <p id={product.id}>{product.name}</p>
                  <p id={product.id}>${product.price}</p>
                </footer>
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

const Product = () => {
  const product = useSelector(state => state.greenstore.current);
  const dispatch = useDispatch();
  const owner = useSelector(state => state.user.owner);
  return(
    <div className="product_main_cont">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="img_cont">
            <img src={product.img} alt=""/>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="description_cont">
            <h1>{product.name}</h1>
            <p>precio: ${product.price}</p>
            <p>{product.description}</p>
          </div>
          <form>
            <textarea />
            <footer>
              <button onClick={()=> dispatch({ type: product.tag })}>atrás</button>
              <button>{ owner ? 'agregar' : 'enviar' }</button>
            </footer>
          </form>
        </div>
      </div>
    </div>
  )
}

const Store = () => {
  const store = useSelector(state => state.greenstore);
  const dispatch = useDispatch();
  const onProducts = async ()=> {
    try{
      //const res = await axios.get('/products');
      //dispatch({ type: ON_PRODUCTS, products: res.data });
      dispatch({ type: ON_PRODUCTS, products });
    }catch(err){
      console.log(err);
    }
  };
  useEffect(()=> {
    onProducts();
  },[])

  return(
    <div className="store_main_cont">

      {
        store.home && <Home />
      }
      {
        store.music && <Category tag={storeSections.MUSIC} />
      }
      {
        store.candy && <Category tag={storeSections.CANDY} />
      }
      {
        store.jewel && <Category tag={storeSections.JEWEL} />
      }
      {
        store.toy && <Category tag={storeSections.TOY} />
      }
      {
        store.ebook && <Category tag={storeSections.EBOOK} />
      }
      {
        store.tv && <Category tag={storeSections.TV} />
      }
      {
        store.product && <Product />
      }
    </div>
  )
};

export default Store;
