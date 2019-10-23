import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from 'reactstrap';
import { ON_VAULT, ON_VAULT_HOME, ON_VAULT_PRODUCT } from '../../store/actions';
import uuid from 'uuid/v1';

const ProductList = ({ item }) => {

  return(
    <li>
      <button title={`enviado por ${item.sender.fullName}`} className="shadow" id={item._id}>
        <img id={item._id} src={item.sender.perfilImg} alt=""/>
      </button>
      <style jsx>{`
          li{
            margin: 1rem;
          }
          button{
            background: url(${item.img})center top no-repeat;
            background-size: cover;
            width: 200px;
            height: 220px;
            border: 1px solid #fff;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-end;
            transition: 250ms ease;
          }
          button:hover{
            border-color: #8bb940;
          }
          img{
            width: 50px;
            height: 50px;
            object-fit: cover;
            object-position: center;
            border-radius: 50%;
          }
      `}
      </style>
    </li>
  )
}

const Home = () => {
  const items = useSelector(state => state.nav.notifications.gifts.items);
  return(
    <div className="home">
      <ul>
        {
          items.map(item => <ProductList key={uuid()} item={item} />)
        }
      </ul>
      <style jsx>{`
        .home{
          padding: 1rem;
        }
        ul{
          margin: 0;
          padding: 0;
          list-style: none;
          display: flex;
          flex-wrap: wrap;
        }
      `}
    </style>
    </div>
  )
}

const Product = () => {
  const product = useSelector(state => state.vault.current);
  return(
    <div className="product_main">
      <div className="left">
        <img src={product.img} alt=""/>
      </div>
      <div className="right">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <div className="sender">

        </div>
      </div>
    </div>
  )
}

const Vault = () => {
  const vault = useSelector(state => state.vault)
  const dispatch = useDispatch();
  return(
    <Modal isOpen={vault.visible} style={{ minWidth: "95vw" }}>
      <div className="vault_main_cont">
        <header>
          <button onClick={()=> dispatch({ type: ON_VAULT_HOME })} >inicio</button>
          <button title="cerrar" onClick={()=> dispatch({ type: ON_VAULT })} >x</button>
        </header>
        <div className="body">
          {
            vault.home && <Home />
          }
          {
            vault.product && <Product />
          }
        </div>
      </div>
      <style jsx>{`
          header{
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          header button{
            background: transparent;
            border: none;
            transition: 250ms ease;
            text-transform: capitalize;
          }
          header button:focus{
            outline: none
          }
          header button:hover{
            color: #8bb940;
          }
      `}
      </style>
    </Modal>
  );
}

export default Vault;
