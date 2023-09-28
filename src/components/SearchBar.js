import React from 'react';
import './Searchbar.css'


const SearchBar = ({ searchWord, setSearchWord, handleSearch }) => {
  return (

    // Input-fält för att ange sökord 
  
    <div className='searchSection'>
      <input
      className='searchSection_input'
        type="text"
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
        placeholder="Sök efter ett ord"
      />

       {/* Knapp för att starta sökningen när den klickas */}
      <button type='submit' onClick={handleSearch} className='searchSection_btn'>Sök</button>
    </div> 

    
  );
};

export default SearchBar;




