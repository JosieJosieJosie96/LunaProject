import { useForm } from 'react-hook-form';
import { Button } from '../../ui/Button';
import { HeadingForm } from '../../ui/HeadingForm';
import Input from '../components/Input';
import { StyledContainer, SytledContainerForm } from './Login';

function SignUp() {
  const { register } = useForm();
  return (
    <StyledContainer>
      <SytledContainerForm>
        <div>
          <HeadingForm>SIGN UP</HeadingForm>
        </div>
        <div style={{ marginTop: '40px' }}>
          <form>
            <Input htmlFor="email" type="text" register={register} name="email">
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
