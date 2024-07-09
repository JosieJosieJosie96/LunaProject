/* eslint-disable react/prop-types */
function Input({ register, children, htmlFor, type, name, value }) {
  return (
    <div>
      <label htmlFor={htmlFor}>{children}</label>
      <div>
        <input {...register(`${name}`)} type={type} defaultValue={value} />
      </div>
    </div>
  );
}

export default Input;
