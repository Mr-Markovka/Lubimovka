import React from 'react';
import AuthorsCard from '././AuthorsCard';
import './AuthorsList.css';

function AuthorsList(props) {
  const filteredPlays = props.plays.filter((play) => {
    if (
      (props.searchQuery !== '' &&
        play.lastName
          .toLowerCase()
          .includes(props.searchQuery.toLowerCase())) ||
      (props.searchQuery !== '' &&
        play.firstName.toLowerCase().includes(props.searchQuery.toLowerCase()))
    ) {
      return play;
    }
  });

  const uniqAutors = Object.values(
    filteredPlays.reduce(
      (acc, cur) => Object.assign(acc, { [cur.lastName]: cur }),
      {}
    )
  );

  const foundAutors = uniqAutors
    .sort((a, b) =>
      a.lastName.toLowerCase() > b.lastName.toLowerCase() ? 1 : -1
    )
    .map((item) => <AuthorsCard key={item.id} {...item} />);

  return (
    <section className='authors-list'>
      <ul className='card__info'>{foundAutors}</ul>
    </section>
  );
}

export default AuthorsList;
