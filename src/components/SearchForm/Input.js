import './Input.css';

const Input = ({ placeholder, handleChange }) => {
  return (
    <input
      type='text'
      className='input'
      name='search'
      autoComplete='off'
      required
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};
export default Input;
