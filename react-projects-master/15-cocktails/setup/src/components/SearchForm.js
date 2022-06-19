import React, { useRef, useEffect } from 'react'

import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef('');

  const searchCocktail = () => {
    const searchTerm = searchValue.current.value;;
    setSearchTerm(searchTerm);
  }

  useEffect(() => {
    searchValue.current.focus();
  }, [])

  return (
    <section className="section search">
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-control">
          <label htmlFor="name">Search your favourite cocktail</label>
          <input type="text" name="name" id="name" ref={searchValue} onChange={searchCocktail} />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
