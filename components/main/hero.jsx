import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ON_MAIN_THEME } from '../../store/actions';
import { color, font } from '../../layout/main';
import { TweenMax } from 'gsap';
import { themeGreen, themeRed, themeBlue } from '../../layout/main';

const Nav = ({ prim, sec, img, index, onStop }) => {
  const dispatch = useDispatch();
  const onTheme = (index) => {
    onStop(true);
    dispatch({ type: ON_MAIN_THEME, index });
    setTimeout(()=> onStop(false), 15000);
  }
  return(
    <nav>
      <div className="line" />
      <div className="nav">
        <button onClick={()=> onTheme(0)}>1</button>
        <button onClick={()=> onTheme(1)}>2</button>
        <button onClick={()=> onTheme(2)}>3</button>
      </div>
      <div className="line" />
      <img id="logo" src="/static/logo2.png" alt=""/>
      <style jsx>{`
        nav{
          position: absolute;
          top: 0;
          right: 0;
          height: 100vh;
          width: 5%;
          min-width: 50px;
          background: ${prim};
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 100;
        }
        .line{
          width: 2px;
          height: 25%;
          background: #fff;
          content: " ";
        }
        img#logo{
          position: absolute;
          bottom: .5rem;;
          width: 50px;
          height: 50px;
        }
        div.nav{
          margin: 2rem 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        button{
          width: 25px;
          height: 25px;
          border-radius: 50%;
          border: 1px solid #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          background: transparent;
          color: #fff;
          transition: 250ms ease;
          cursor: none;
        }
        button:nth-child(1){
          background: ${index === 1 ? '#fff' : 'transparent'};
          color: ${index === 1 ? prim : '#fff'};
        }
        button:nth-child(2){
          margin: 1rem 0;
          background: ${index === 2 ? '#fff' : 'transparent'};
          color: ${index === 2 ? prim : '#fff'};
        }
        button:nth-child(3){
          background: ${index === 3 ? '#fff' : 'transparent'};
          color: ${index === 3 ? prim : '#fff'};
        }
        button:hover{
          background: #fff;
          color: ${prim};
        }
        button:focus{
          outline: none;
        }
      `}
      </style>
    </nav>
  )
}

const Text = ({ title, subTitle, left, right }) => {

  return(
    <div className="main">
      <div className="text">
        <h2>
          {title}
        </h2>
        <p>{subTitle}</p>
      </div>
      <style jsx>{`
        div.main{
          width: 100%;
        }
        div.text{
          text-align: center;
        }
        h2{
          font-size: 1.5rem;
          margin: 0;
          font-family: ${font.title};
          display: flex;
        }
        p{
          font-size: 10px;
          margin: 0;
        }
        @media(min-width: 576px){
          div.text{
            text-align: left;
          }
          h2{
            font-size: 2rem;
          }
        }
        @media(min-width: 992px){
          div.text{
            text-align: left;
          }
          h2{
            font-size: 2rem;
          }
        }
        @media(min-width: 1200px){
          h2{
            max-width: 272px;
          }
        }
      `}
      </style>
    </div>
  )
}

const BallChain = ({ right, id }) => {
  return(
    <div id={id} className="ball_chain d-none d-lg-flex">
      { !right && <div className="ball" /> }
      <div className="chain" />
      { right && <div className="ball" /> }
      <style jsx>{`
        .ball_chain{
          width: 100%;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          width: 0;
          opacity: 0;
          overflow: hidden;
        }
        .ball{
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #fff;
          flex-shrink: 0;
        }
        .chain{
          height: 2px;
          background: #fff;
          width: 100%;
        }
      `}
      </style>
    </div>
  )
}

const Hero = ({ theme, menu, onStop }) => {

  const dispatch = useDispatch();
  const { img, textBottom, prim, sec, textLeft, textRight, index } = theme;
  useEffect(()=>{
    TweenMax.to(`#left`, 2, { width: '100%', opacity: 1 });
    TweenMax.to(`.textLeft`, 2, { opacity: 1, delay: 2 });
    return ()=> {
      TweenMax.to(`.textLeft`, 2, { opacity: 0 });
    }
  },[menu])
  useEffect(()=>{
    TweenMax.to(`#right`, 2, { width: '100%', opacity: 1, delay: 2 });
    TweenMax.to(`.textRight`, 2, { opacity: 1, delay: 4 });
    return ()=> {
      TweenMax.to(`.textRight`, 2, { opacity: 0 });
    }
  },[menu])

  const onMove = (e) => {
    TweenMax.to('.moving', 3, { left: (e.screenX / 50), top: (e.screenY / 30) });
  }

  return(
    <div onMouseMove={onMove} className="hero">
      <main className="moving">
        <div className="texts textLeft">
          <div className="subTextLeft">
            { !menu && (
              <>
                <Text title={textLeft.title} subTitle={textLeft.subTitle} left />
                <button className="d-none d-md-block">¿Quieres Saber Más?</button>
              </>
            ) }
          </div>
        </div>
        <div className="image animated fadeIn">
          <div className="ball_chain_left">
            { !menu && <BallChain id="left" /> }
          </div>
          <div className="ball_chain_right">
            { !menu && <BallChain id='right' right /> }
          </div>
          <img src={img} alt=""/>
        </div>
        <div className="texts textRight">
          <div>
            { !menu && <Text title={textRight.title} subTitle={textRight.subTitle} /> }
            <button className="d-md-none">¿Quieres Saber Más?</button>
          </div>
        </div>
      </main>
      <footer>
        <h1 className="animated fadeInUp delay-4s">{textBottom}</h1>
      </footer>
      <style jsx>{`
        .hero{
          background: linear-gradient(135deg, ${prim}, ${sec});
          height: 100vh;
          display: flex;
          flex-direction: column;
          color: #fff;
          position: relative;
          user-select: none;
        }
        main{
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .texts{
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .textLeft{
          justify-content: flex-end;
          opacity: 0;
        }
        .subTextLeft{
          width: 60%;
        }
        button{
          margin-top: 1rem;
          background: transparent;
          border: 2px solid #fff;
          font-weight: 550;
          font-size: 11px;
          color: #fff;
          padding: .5rem;
          transition: 250ms ease;
          cursor: none;
        }
        button:focus{
          outline: none;
        }
        button:hover{
          background: #fff;
          color: ${prim};
        }
        .image{
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          z-index: 100;
        }
        .ball_chain_left{
          position: absolute;
          display: flex;
          justify-content: flex-end;
          bottom: ${index === 1 ? '49vh' : index === 2 ? '50vh' : '50vh'};
          left: ${index === 1 ? '-11%' : index === 2 ? '-10%' : '-12%'};
          width: ${index === 1 ? '30%' : index === 2 ? '42%' : '58%'};
        }
        .ball_chain_right{
          position: absolute;
          top: ${index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh'};
          right: ${index === 1 ? '-20%' : index === 2 ? '-12%' : '-12%'};
          width: ${index === 1 ? '73%' : index === 2 ? '48%' : '20%'};
        }
        img{
          width: 250px;
          height: 250px;
        }
        .textRight{
          justify-content: space-between;
          align-items: center;
          opacity: 0;
        }
        footer h1{
          font-family: ${font.title};
          margin: 0;
          text-align: center;
          position: relative;
        }
        @media(min-width: 576px){
          main{
            flex-direction: row;
          }
          .texts{
            flex-grow: 1;
            width: 25%;
          }
          .textLeft{
            justify-content: center;
            padding-left: 2rem;
          }
          .image{

          }
          .textRight{
            justify-content: center;
            padding-right: 5rem;
          }
          footer h1{
            font-size: 6rem;
            text-shadow: 5px 1px 15px rgba(0, 0, 0, .5);
          }
        }
        @media(min-width: 992px){
          texts{
            flex-grow: 0;
          }
          .textLeft{
            align-items: flex-end;
          }
          .subTextLeft{
            width: 80%;
          }
          .textRight{
            margin-top: ${index === 1 ? '65px' : '0'};
          }
          image{
            flex: 1 0 0;
            width: 60%;
          }
          img{
            width: 335px;
            height: 335px;
            position: relative;
          }
          .ball_chain_left{
            bottom: ${index === 1 ? '49vh' : index === 2 ? '49vh' : '49vh'};
            left: ${index === 1 ? '-6%' : index === 2 ? '-20%' : '-25%'};
            width: ${index === 1 ? '26%' : index === 2 ? '50%' : '40%'};
          }
          .ball_chain_right{
            top: ${index === 1 ? '44.2vh' : index === 2 ? '40vh' : '40vh'};
            right: ${index === 1 ? '-32%' : index === 2 ? '-23%' : '-15%'};
            width: ${index === 1 ? '85%' : index === 2 ? '48%' : '28%'};
          }
          footer h1{
            font-size: 8rem;
            line-height: 8rem;

          }
        }
        @media(min-width: 1200px){
          .image{
            position: relative;
            flex-grow: 1;
            content: " ";
          }
          .textLeft h2{
            max-width: 272px;
          }
          .textRight{
            margin-top: ${index === 1 || index === 2 ? '280px' : '259px'};
          }
          img{
            width: 500px;
            height: 500px;
            position: relative;
            top: 100px;
          }
          .ball_chain_left{
            z-index: 5;
            bottom: ${index === 1 ? '46.5vh' : index === 2 ? '47vh' : '47vh'};
            left: ${index === 1 ? '-2%' : index === 2 ? '-8%' : '-8%'};
            width: ${index === 1 ? '30%' : index === 2 ? '55%' : '35%'};
          }
          .ball_chain_right{
            z-index: 5;
            top: ${index === 1 ? '56vh' : index === 2 ? '56vh' : '55vh'};
            right: ${index === 1 ? '-16%' : index === 2 ? '-12%' : '-10%'};
            width: ${index === 1 ? '68%' : index === 2 ? '43%' : '28%'};
          }
          footer h1{
            font-size: 12rem;
            line-height: 10rem;
          }
        }
      `}
      </style>
    </div>
  )
}

const Main = () => {
  const index = useSelector(state => state.main.theme);
  const menu = useSelector(state => state.main.nav.visible) ;
  const dispatch = useDispatch();
  const [pause, setPause] = useState(false);
  const themes = [themeGreen, themeRed, themeBlue];
  useEffect(()=> {
    let i = 0;
    let interval = setInterval(()=> {
      if(!pause){
        i = i < 2 ? i + 1 : 0;
        dispatch({ type: ON_MAIN_THEME, index: i });
      }
    }, 15000);
    return ()=> clearInterval(interval);
  },[pause])
  const onCursor = (e) => {
    TweenMax.to('#cursor', 0.1, { left: e.clientX, top: e.clientY });
  }
  return(
    <div onMouseMove={onCursor}>
      <Nav onStop={setPause} {...themes[index]}/>
      {index === 0 && <Hero onStop={setPause} theme={themeGreen} menu={menu} />}
      {index === 1 && <Hero onStop={setPause} theme={themeRed} menu={menu} />}
      {index === 2 && <Hero onStop={setPause} theme={themeBlue} menu={menu} />}
      <div id="cursor"></div>
      <style jsx>{`
        div{
          position: relative;
          cursor: none !important;
        }
        #cursor{
          width: 25px;
          height: 25px;
          top: 0;
          left: 0;
          border-radius: 50%;
          border: 1px solid #fff;
          z-index: 500;
          content: " ";
          position: absolute;
          background: rgba(255, 255, 255, .3);
        }
        `}
      </style>
    </div>
  )
}


export default Main;
