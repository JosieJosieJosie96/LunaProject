import { useForm } from 'react-hook-form';
import { HeadingForm } from '../../ui/HeadingForm';
import Input from '../components/Input';
import { StyledContainer, SytledContainerForm } from './Login';
import { BeatLoader } from 'react-spinners';

import styled from 'styled-components';
import { Button } from '../../ui/Button';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 24px;
`;

function RegistrationValidation() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  async function registrationValidate(obj) {
    setIsLoading(true);
    setErrorMessage('');

    try {
      const res = await axios.post(
        `http://localhost:8000/backend/api/registration/validation/`,
        obj,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      setIsSuccess(true);
      setIsLoading(false);

      return res.data;
    } catch (error) {
      setErrorMessage(error.response.data);
      setIsLoading(false);
      // console.log(error);
    }
  }

  function onSubmit(data) {
    registrationValidate(data);
  }
  return (
    <>
      {isSuccess ? (
        navigate('login')
      ) : (
        <StyledContainer>
          <SytledContainerForm>
            <div>
              <HeadingForm>REGISTRATION</HeadingForm>
            </div>
            {isLoading ? (
              <BeatLoader />
            ) : (
              <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <Input
                  htmlFor="email"
                  type="text"
                  register={register}
                  name="email"
                  isRequired={true}
                >
                  EMAIL
                </Input>

                <Input
                  htmlFor="code"
                  type="text"
                  register={register}
                  name="code"
                >
                  CODE
                </Input>
                <Input
                  htmlFor="username"
                  type="text"
                  register={register}
                  name="username"
                >
                  USERNAME
                </Input>
                <Input
                  htmlFor="location"
                  type="text"
                  register={register}
                  name="location"
                >
                  LOCATION
                </Input>
                <Input
                  htmlFor="password"
                  type="password"
                  register={register}
                  name="password"
                >
                  PASSWORD
                </Input>
                <Input
                  htmlFor="password_repeat"
                  type="password"
                  register={register}
                  name="password_repeat"
                >
                  REPEAT PASSWORD
                </Input>

                <Button
                  style={{
                    gridColumn: 'span 2',
                    placeSelf: 'center',
                  }}
                >
                  Finish Registration
                </Button>
              </StyledForm>
            )}
          </SytledContainerForm>
        </StyledContainer>
      )}
    </>
  );
}

export default RegistrationValidation;
