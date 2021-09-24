import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Link, useHistory } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { IoIosArrowRoundBack } from 'react-icons/io';
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
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();
  const { mutate, data } = useLoginUser();

  const onSubmitHandler = (data) => {
    mutate(data);
  };

  return (
    <LoginPageWrapper>
      <IoIosArrowRoundBack
        onClick={() => history.push('/')}
        style={{ color: 'white', fontSize: '4rem', position: 'absolute', right: '1rem', top: '1rem' }}
      />

      <div className='login-page-contentWrapper'>
        <h1 className='login-heading'>SIGN IN</h1>

        <form onSubmit={handleSubmit(onSubmitHandler)} className='login-form'>
          <TextField fullWidth={true} label='Email' variant='filled' {...register('email')} type='email' name='email' />

          <p>{errors.email?.message}</p>

          <TextField
            fullWidth={true}
            variant={'filled'}
            label={'Password'}
            {...register('password')}
            type='password'
            name='password'
          />

          <p>
            {' '}
            {errors.password?.message} {data && data.error && data.error}{' '}
          </p>

          <Button fullWidth={true} variant='outlined' color={'primary'} type='submit'>
            SIGN IN
          </Button>
          <Link style={{ textDecoration: 'underline' }} to='/register'>
            <p>Don't have an account yet? Sign up here</p>
          </Link>
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

  background-color: #111;

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
      text-align: center;
      padding-top: 14px;
      padding-bottom: 14px;
      border-radius: 5px;
      background-color: white;
      border-radius: 5px;
    }

    p {
      color: white;
    }
  }
`;
