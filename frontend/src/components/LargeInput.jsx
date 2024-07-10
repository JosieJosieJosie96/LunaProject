
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LargeInputStyled = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  display: block;
  border-radius: 6px;
  font-size: 24px;
  font-weight: 500;
  color: #111827;
  border: 5px solid red;
`;

function LargeInput({ register, children, htmlFor, type, name, value }) {
  return (
    <div>
      <Label htmlFor={htmlFor}>{children}</Label>
      <div style={{ marginTop: '8px', marginBottom: '12px' }}>
        <LargeInputStyled
          {...register(`${name}`)}
          type={type}
          defaultValue={value}
        />
      </div>
    </div>
  );
}

export default LargeInput;

