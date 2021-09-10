import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import styled from 'styled-components';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';

//Validation Schema
const schema = yup.object().shape({
  userName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).max(32).required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password must match'),
});

function RegisterPage() {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data) => {
    const newUser = {
      userName: data.userName,
      email: data.email,
      password: data.password,
    };

    const createUser = async () => {
      const req = await fetch('http://localhost:7000/api/users', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(newUser),
      });

      const res = await req.json();

      console.log(res);
    };
    createUser();

    history.push('/login');

    reset();
  };

  return (
    <RegisterPageWrapper>
      <a onClick={() => history.goBack()} className='close-register'>
        X
      </a>
      <div className='register-page-contentWrapper'>
        <h1 className='register-heading'>REGISTER</h1>
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className='register-form'
          action=''
        >
          <input
            {...register('userName')}
            type='text'
            name='userName'
            placeholder='Username'
          />
          <p>{errors.userName?.message}</p>
          <input
            {...register('email')}
            type='email'
            name='email'
            placeholder='Email'
          />
          <p>{errors.email?.message}</p>
          <input
            {...register('password')}
            type='password'
            name='password'
            placeholder='Password'
          />
          <p>{errors.password?.message}</p>
          <input
            {...register('confirmPassword')}
            type='password'
            name='confirmPassword'
            placeholder='Confirm Password'
          />
          <p>{errors.confirmPassword?.message}</p>
          <button type='submit'>SUBMIT</button>
        </form>
      </div>
    </RegisterPageWrapper>
  );
}

export default RegisterPage;

const RegisterPageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: #131313;

  .close-register {
    position: absolute;
    top: 30px;
    right: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1rem;

    height: 25px;
    width: 25px;
    border: 1px solid white;
    border-radius: 50%;
    cursor: pointer;
  }
  .register-page-contentWrapper {
    max-width: 700px;
    margin: auto auto;
    padding: 10%;
  }

  .register-heading {
    font-size: 4rem;
    text-align: center;
    font-weight: lighter;
    margin-bottom: 5%;
  }

  @media (max-width: 350px) {
    .register-heading {
      font-size: 3rem;
    }
  }

  .register-form {
    max-width: 300px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    align-items: center;

    input {
      width: 100%;
      text-align: center;
      padding-top: 14px;
      padding-bottom: 14px;
      border-radius: 5px;
    }

    button {
      width: 100%;
      color: white;
      background-color: black;
      border: 1px solid rgb(207, 203, 203);
      padding: 14px;
      font-size: 0.6rem;
      font-weight: lighter;
      border-radius: 5px;
    }

    p {
      color: white;
    }
  }
`;
