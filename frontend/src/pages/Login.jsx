import { Button } from '../../ui/Button';
import { useForm } from 'react-hook-form';
import Input from '../components/Input';
import { HeadingForm } from '../../ui/HeadingForm';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  const { register } = useForm();

  return (
    <StyledContainer>
      <SytledContainerForm>
        <div>
          <HeadingForm>LOG IN TO YOUR ACCOUNT</HeadingForm>
        </div>
        <div style={{ marginTop: '40px' }}>
          <form>
            <Input htmlFor="email" type="text" register={register} name="email">
              Email Address
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
