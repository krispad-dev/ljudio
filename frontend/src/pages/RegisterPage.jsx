import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import styled from 'styled-components';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useHistory } from 'react-router-dom';

import { IoIosArrowRoundBack } from 'react-icons/io';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

//Validation Schema
const schema = yup.object().shape({
  userName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).max(32).required(),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Password must match'),
});

function RegisterPage() {
  const [takenEmailError, setTakenEmailError] = useState(null);
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

      if (!res.success) {
        return setTakenEmailError(res.message);
        reset();
      }
      history.push('/login');
    };
    createUser();
  };

  return (
    <RegisterPageWrapper>
      <IoIosArrowRoundBack
        onClick={() => history.push('/')}
        style={{ color: 'white', fontSize: '4rem', position: 'absolute', right: '1rem', top: '1rem' }}
      />
      <div className='register-page-contentWrapper'>
        <h1 className='register-heading'>REGISTER</h1>
        <form
          onFocus={() => setTakenEmailError(null)}
          onSubmit={handleSubmit(onSubmitHandler)}
          className='register-form'
          action=''
        >
          <TextField
            fullWidth={true}
            variant={'filled'}
            label={'Username'}
            {...register('userName')}
            type='text'
            name='userName'
          />
          <p>{errors.userName?.message}</p>
          <TextField
            fullWidth={true}
            variant={'filled'}
            label={'Email'}
            {...register('email')}
            type='email'
            name='email'
          />
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
            {errors.password?.message} {takenEmailError && takenEmailError}
          </p>

          <TextField
            fullWidth={true}
            variant={'filled'}
            label={'Confirm Password'}
            {...register('confirmPassword')}
            type='password'
            name='confirmPassword'
          />
          <p>{errors.confirmPassword?.message}</p>
          <Button variant='outlined' color='primary' fullWidth={true} type='submit'>
            REGISTER
          </Button>

          <Link style={{ textDecoration: 'underline' }} to='/login'>
            <p>Already have an account? Sign in here</p>
          </Link>
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

  background-color: #111;

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
      font-size: 2rem;
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
      background-color: white;
    }

    p {
      color: white;
    }
  }
`;
