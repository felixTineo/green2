import React, { useState, useEffect } from 'react';
import { color, font } from '../../layout/main';
import uuid from 'uuid/v1';

const Title = ({ word }) => {
  const [queque, setQueque] = useState(Array(15).fill(word));
  return(
    <div className="shadow">
      <ul id="cartext">
        {
          queque.map((word, i) => <li key={uuid()} className="cartext">{word}</li>)
        }
      </ul>
      <style jsx >{`
        div{
          background: #fff;
          border-top: 3px solid ${color.prim};
          border-bottom: 3px solid ${color.prim};
        }
        ul{
          margin: 0;
          padding: 1rem;
          color: ${color.prim};
          display: flex;
          align-items: center;
          transition: 250ms ease;
          animation-name: myAni;
          animation-duration: 15s;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          transform: translateX(-100px);
        }
        li{
          flex-shrink: 0;
          margin: 0 1rem;
          transition: 250ms ease;
          text-transform: uppercase;
        }
        @keyframes myAni{
          0%{
            transform: translateX(-100px);
          }
          50%{
            transform: translateX(-3px);
          }
          100%{
            transform: translateX(-100px);
          }
        }
      `}
      </style>
    </div>
  )
}

export default Title;
