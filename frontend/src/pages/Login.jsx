import { Button } from '../../ui/Button';
import { useForm } from 'react-hook-form';
import Input from '../components/Input';
import { HeadingForm } from '../../ui/HeadingForm';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { BeatLoader } from 'react-spinners';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 48px 24px;
  min-height: 100%;
`;

export const SytledContainerForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  async function login(obj) {
    setIsLoading(true);
    try {
      const res = await axios.post(
        `http://localhost:8000/backend/api/token/`,
        obj,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      return res.data;
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }

  function onSubmit(data) {
    login(data);
  }

  return (
    <StyledContainer>
      <SytledContainerForm>
        <div>
          <HeadingForm>LOG IN TO YOUR ACCOUNT</HeadingForm>
        </div>
        {isLoading && <BeatLoader />}
        <div style={{ marginTop: '40px' }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              htmlFor="username"
              type="text"
              register={register}
              name="username"
            >
              Username
            </Input>
            <Input
              htmlFor="password"
              type="password"
              register={register}
              name="password"
            >
              Password
            </Input>
            <Link
              style={{
                display: 'flex',
                justifyContent: 'end',
                marginBottom: '16px',
              }}
              to="/forgotPassword"
            >
              Forgot Password?
            </Link>
            <div>
              <Button>Log In </Button>
            </div>
          </form>
        </div>
      </SytledContainerForm>
    </StyledContainer>
  );
}

export default Login;
