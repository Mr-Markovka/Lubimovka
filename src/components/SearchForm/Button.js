import './Button.css';

const Button = ({ text, handleClick, ...props }) => {
  return (
    <button className='button' onClick={handleClick} {...props}>
      <div className='button__img' />
      <p className='button__text'>{text}</p>
    </button>
  );
};
export default Button;
