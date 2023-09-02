import React, { useState } from 'react';
import s from './Searchbar.module.css';
import { toast } from 'react-toastify';

const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchQueryChange = event => {
    setSearchQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (searchQuery.trim() === '') {
      setSearchQuery('');
      return toast.info('Input your search query');
    }

    onSubmit(searchQuery);

    setSearchQuery('');
  };

  return (
    <header className={s.searchbar}>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          autoComplete="off"
          name="searchQuery"
          placeholder="Search images and photos"
          value={searchQuery}
          onChange={handleSearchQueryChange}
        />

        <button type="submit" className={s.button}>
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </form>
    </header>
  );
};

export default Searchbar;
