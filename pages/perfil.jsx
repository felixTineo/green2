import React from 'react';
import router, { useRouter } from 'next/router';
import Layout from '../components/layout/layout';

const Perfil = () => {
  const router = useRouter();

  return(
    <Layoute>
      <div className="perfil_main_cont">
        {console.log(router.query)}
      </div>
    </Layoute>
  );
}

export default Perfil;
