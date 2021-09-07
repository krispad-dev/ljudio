import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import styled from 'styled-components';
import { yupResolver } from '@hookform/resolvers/yup';

import useLoginUser from '../hooks/useLoginUser';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { mutate, error } = useLoginUser();

  const onSubmitHandler = (data) => {
    console.log(data);
    mutate(data);
  };

  return (
    <LoginPageWrapper>
      <div className='login-page-contentWrapper'>
        <h1 className='login-heading'>Login</h1>
        <form onSubmit={handleSubmit(onSubmitHandler)} className='login-form'>
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
          <button type='submit'>SUBMIT</button>
        </form>
      </div>
    </LoginPageWrapper>
  );
}

export default LoginPage;

const LoginPageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: #131313;

  .login-page-contentWrapper {
    max-width: 700px;
    margin: auto auto;
    padding: 10%;
  }

  .login-heading {
    font-size: 4rem;
    text-align: center;
    font-weight: lighter;
    margin-bottom: 5%;
  }

  @media (max-width: 350px) {
    .login-heading {
      font-size: 3rem;
    }
  }

  .login-form {
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
