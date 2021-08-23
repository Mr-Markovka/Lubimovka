import React from 'react';
import { useState } from 'react';
import Input from './Input';
import Button from './Button';
import './SearchForm.css';

function SearchForm(props) {
  const [play, setPlay] = useState('');
  const [searchMessage, setSearchMessage] = useState('Поиск');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (play === '') {
      setSearchMessage('Поиск');
    } else {
      props.searchRequest(play);
      if (props.filteredPlays.length !== 0) {
        setSearchMessage(`По запросу «${play}» мы нашли`);
      } else {
        setSearchMessage(`По запросу «${play}» мы не нашли`);
      }
    }
  };

  const handelInputChange = (e) => {
    setPlay(e.target.value);
  };

  return (
    <section>
      <h1 className='search-form__header'>{searchMessage}</h1>

      <form className='search-form' noValidate onSubmit={handleFormSubmit}>
        <Input
          placeholder='Поиск'
          value={play}
          handleChange={handelInputChange}
        />

        <Button
          type='submit'
          text='ИСКАТЬ'
          handleClick={() => console.log('Click')}
        />
      </form>
    </section>
  );
}

export default SearchForm;
