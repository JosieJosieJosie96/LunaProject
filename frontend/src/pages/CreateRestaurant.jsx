import { useForm } from 'react-hook-form';
import Input from '../components/Input.jsx';
import { HeadingForm } from '../../ui/HeadingForm.jsx';
import { Button } from '../../ui/Button.jsx';
import styled from 'styled-components';

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding-top: 64px;
`;
const FormStyled = styled.form`
  display: grid;
  width: 50%;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  column-gap: 16px;
  margin-top: 80px;
`;

const InputFileStyled = styled.input`
  display: block;
  width: fit-content;
  font-size: 14px;
  background-color: orange;
`;
const LabelSelectStyled = styled.label`
  display: block;
  font-size: 16px;
  font-weight: 500;
`;
const LabelDiv = styled.div`
  width: 100%;
  place-self: start;
  justify-self: center;
`;

function CreateRestaurant() {
  const { register, handleSubmit } = useForm();
  return (
    <>
      <ContainerStyled>
        <HeadingForm>CREATE NEW RESTAURANT</HeadingForm>

        <FormStyled>
          <div>
            <Input htmlFor="name" type="text" register={register} name="name">
              Name *
            </Input>
          </div>

          <LabelDiv>
            <LabelSelectStyled>Category *</LabelSelectStyled>
            <div style={{ marginTop: '10px' }}>
              <select
                {...register('category', {
                  required: true,
                })}
              >
                <option value="">Select...</option>
                <option value="Asian">Asian</option>
                <option value="Italian">Italian</option>
                <option value="Burger">Burger</option>
                <option value="Arab">Arab</option>
                <option value="Mexican">Mexican</option>
              </select>
            </div>
          </LabelDiv>

          <Input
            htmlFor="country"
            type="text"
            register={register}
            name="country"
          >
            Country *
          </Input>

          <Input htmlFor="street" type="text" register={register} name="street">
            Street *
          </Input>
          <Input htmlFor="city" type="text" register={register} name="city">
            City *
          </Input>
          <Input htmlFor="zip" type="number" register={register} name="zip">
            Zip
          </Input>

          <Input
            htmlFor="website"
            type="text"
            register={register}
            name="website"
          >
            Website
          </Input>
          <Input htmlFor="phone" type="number" register={register} name="phone">
            Phone *
          </Input>
          <Input htmlFor="email" type="text" register={register} name="email">
            Email address
          </Input>

          <Input
            htmlFor="opening_hours"
            type="text"
            register={register}
            name="opening_hours"
          >
            Opening Hours *
          </Input>
          <Input
            htmlFor="price_level"
            type="text"
            register={register}
            name="price_level"
          >
            Price level
          </Input>
          <div>
            <label>Image</label>
            <div>
              <InputFileStyled type="file" />
            </div>
          </div>
          <Button
            style={{ gridColumn: 'span 3 / span 3', placeSelf: 'center' }}
          >
            CREATE
          </Button>
        </FormStyled>
      </ContainerStyled>
    </>
  );
}

export default CreateRestaurant;
