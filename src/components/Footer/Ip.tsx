'use client';

import { useEffect } from 'react';

const Ip = () => {
  useEffect(() => {
    console.log('ip');
  }, []);

  return <input type="hidden" />;
};

export default Ip;
