import React from 'react';
import { useState } from 'react';
import data from '../../data.json';
import SearchForm from '../SearchForm/SearchForm';
import PlaysList from '../Plays/PlaysList';
import AuthorsList from '../Authors/AuthorsList.js';

import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const plays = data.result.map((item) => {
    return {
      id: item._id,
      firstName: item.author_firstName,
      lastName: item.author_lastName,
      title: item.title,
      city: item.city,
      year: item.year,
    };
  });

  const filteredPlays = plays.filter((play) => {
    if (searchQuery !== '') {
      return play.title.toLowerCase().includes(searchQuery.toLowerCase());
    }
  });

  function searchRequest(play) {
    setSearchQuery(play);
  }

  return (
    <div className='app'>
      <div className='app__body'>
        <SearchForm
          searchRequest={searchRequest}
          filteredPlays={filteredPlays}
        />
        <div className='app__content'>
          <PlaysList
            searchQuery={searchQuery}
            plays={plays}
            filteredPlays={filteredPlays}
          />

          <AuthorsList searchQuery={searchQuery} plays={plays} />
        </div>
      </div>
    </div>
  );
}

export default App;
