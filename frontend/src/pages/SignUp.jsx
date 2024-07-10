import { useForm } from 'react-hook-form';
import { Button } from '../../ui/Button';
import { HeadingForm } from '../../ui/HeadingForm';
import Input from '../components/Input';
import { StyledContainer, SytledContainerForm } from './Login';
import axios from 'axios';
import { useState } from 'react';
import { BeatLoader } from 'react-spinners';

function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  async function signup(obj) {
    setIsLoading(true);
    try {
      const res = await axios.post(
        `http://localhost:8000/backend/api/registration/`,
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
    signup(data);
  }

  return (
    <StyledContainer>
      <SytledContainerForm>
        <div>
          <HeadingForm>SIGN UP</HeadingForm>
        </div>
        {isLoading && <BeatLoader />}
        <div style={{ marginTop: '40px' }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              htmlFor="email"
              type="email"
              register={register}
              name="email"
            >
              Email Address
            </Input>

            <div>
              <Button>SIGN UP </Button>
            </div>
          </form>
        </div>
      </SytledContainerForm>
    </StyledContainer>
  );
}

export default SignUp;
