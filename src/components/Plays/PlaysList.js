import React from 'react';
import PlaysCard from './PlaysCard';
import './PlaysList.css';

function PlaysList(props) {
  const foundPlays =
    props.filteredPlays.length === 0
      ? console.log(`По запросу «${props.searchQuery}» мы не нашли`)
      : props.filteredPlays
          .sort((a, b) =>
            a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
          )
          .map((item) => <PlaysCard key={item.id} {...item} />);

  return (
    <section className='list'>
      <ul className='list__list'>{foundPlays}</ul>
    </section>
  );
}

export default PlaysList;
