import { useForm } from 'react-hook-form';
import { HeadingForm } from '../../ui/HeadingForm';
import Input from '../components/Input';
import { StyledContainer, SytledContainerForm } from './Login';

import styled from 'styled-components';
import { Button } from '../../ui/Button';

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 24px;
`;

function RegistrationValidation() {
  const { register } = useForm();
  return (
    <StyledContainer>
      <SytledContainerForm>
        <div>
          <HeadingForm>REGISTRATION</HeadingForm>
        </div>
        <StyledForm>
          <Input
            htmlFor="email"
            type="text"
            register={register}
            name="email"
            isRequired={true}
          >
            EMAIL
          </Input>

          <Input htmlFor="code" type="text" register={register} name="code">
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
          <Input
            htmlFor="first_name"
            type="text"
            register={register}
            name="first_name"
          >
            FIRST NAME
          </Input>
          <Input
            htmlFor="last_name"
            type="text"
            register={register}
            name="last_name"
          >
            LAST NAME
          </Input>
          <Button
            style={{
              placeSelf: 'center',
              columnSpan: 2,
              justifySelf: 'center',
            }}
          >
            Finish Registration
          </Button>
        </StyledForm>
      </SytledContainerForm>
    </StyledContainer>
  );
}

export default RegistrationValidation;
