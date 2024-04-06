import React, { useEffect } from 'react';
import { Audio } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import './index.scss';

const Loading = () => {
  const navigation = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation('/result');
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='con'>
      <Audio
        height='100'
        width='100'
        radius='9'
        color='green'
        ariaLabel='loading'
      />
    </div>
  );
};

export default Loading;
