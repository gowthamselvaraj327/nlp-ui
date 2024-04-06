import React, { useState } from 'react';
import FormInput from '../../components/FormInput';
import './index.css';
import back from '../../assets/backgroundImage.jpeg';
import { useNavigate } from 'react-router-dom';

const HomeScreen = () => {

  const navigation = useNavigate();
  
  const [values, setValues] = useState({
    username: '',
    email: '',
  });
  const inputs = [
    {
      id: 1,
      name: 'Name',
      type: 'text',
      placeholder: 'Name',
      label: 'Name',
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true,
    },
    {
      id: 2,
      name: 'Email',
      type: 'email',
      placeholder: 'Email',
      label: 'Email',
      required: true,
    },
    {
      id: 3,
      name: 'PDF',
      type: 'file',
      placeholder: 'Pdf',
      label: 'Pdf',
      required: true,
    },
    {
      id: 4,
      name: 'Audio',
      type: 'file',
      placeholder: 'Audio',
      label: 'Audio',
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className='app'>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div
          className='form'
          style={{ margin: 50, marginTop: 100, marginLeft: 100 }}
        >
          <h1>VOCABULARY ENHANCEMENT USING NLP</h1>
          <form onSubmit={handleSubmit}>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            <button className='button-9' onClick={() => navigation('/loading')} style={{ width: 100 }}>
              Submit
            </button>
          </form>
        </div>
        <div style={{ margin: 50, marginTop: 200, marginLeft: 70 }}>
          <img
            src={require('../../assets/background.png')}
            style={{ width: '150%', height: '100%' }}
            alt='try'
          />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
