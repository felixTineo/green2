import React from 'react';
import router, { useRouter } from 'next/router';

const Perfil = () => {
  const router = useRouter();

  return(
    <div>{console.log(router.query)}</div>
  )
};

export default Perfil;
