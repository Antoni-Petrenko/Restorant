import React from 'react'

const SearchBar = ({filterWord,handleSearchBar}) => {
  return (
    <fieldset >
      <legend>Wyszukiwanie</legend>
      <input className="search-bar"
          type="text"
          value={filterWord}
          onChange={handleSearchBar}
          placeholder="Wyszukiwanie składników:"
        />
    </fieldset>
  )
}

export {SearchBar}
