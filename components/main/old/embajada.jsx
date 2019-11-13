import React, { useState, useEffect, useRef, useReducer } from 'react';

const images = [
  {
    tag: 'bakery',
    img: '/static/bakery.jpg',
    msg: 'influye'
  },
  {
    tag: 'market',
    img: '/static/market.jpg',
    msg: 'auspicia',
  },
  {
    tag: 'drug',
    img: '/static/drug.jpg',
    msg: 'beneficiate'
  }
];

const Cont = ({ msg, img, index, ref, className }) => {
  return(
    <div style={{ animationTimingFunction: 'linear' }} ref={ref} className={`main animated ${className}`}>
        <h1>{msg}</h1>
      <style jsx>{`
        .main{
          background: url(${img})top center no-repeat;
          background-size: cover;
          /*display: flex;
          justify-content: center;
          align-items: center;*/
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        h1{
          color: #fff;
          font-size: 8rem;
          text-transform: uppercase;
        }
      `}
      </style>
    </div>
  )
}


const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useReducer((state, next) => ({...state, ...next}), {
    bakery: true,
    market: false,
    drug: false,
  });
  const bakeryRef = useRef(null);
  const marketRef = useRef(null);
  const drugRef = useRef(null);

  useEffect(()=> {

    const next = (current + 1) % images.length;
    const id = setTimeout(()=> setCurrent(next), 5000);
    setVisible({ [images[current].tag] : true });
    if(current > 0) {
      setTimeout(()=> setVisible({ [images[current - 1].tag] : false }), 1000);
    } else {
      setTimeout(()=> setVisible({ [images[2].tag] : false }), 1000);
    }
    return ()=> clearTimeout(id);
  },[current])
  const { bakery, market, drug } = visible;
  return(
    <div className="main">
      {console.log(images[current].tag, visible[images[current].tag])}
      { bakery && <Cont className={current === 1 ? 'slideOutLeft' : 'slideInRight'} {...images[0]} /> }
      { market && <Cont className={current === 2 ? 'slideOutLeft' : 'slideInRight'} {...images[1]} /> }
      { drug && <Cont className={current === 0 ? 'slideOutLeft' : 'slideInRight'} {...images[2]} /> }
      <style jsx>{`
        .main{
          height: 50vh;
          overflow: hidden;
          display: flex;
          position: relative;
        }
      `}
      </style>
    </div>
  )
}

const Main = () => {

  return(
    <div className="main">
      <Carousel />
    </div>
  )
}

export default Main;
