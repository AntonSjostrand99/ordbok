import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WordInfo from './components/WordInfo';
import "./Style.css"


const DictionaryApp = () => {

// Skapa tre state-variabler med hjälp av useState-hooken.
// - 'searchWord' kommer att användas för att lagra det sökord som användaren anger.
// - 'wordData' kommer att lagra ordboksdata när en sökning är framgångsrik.
// - 'error' används för att lagra eventuella felmeddelanden som kan uppstå vid sökning.
    const [searchWord, setSearchWord] = useState('');
    const [wordData, setWordData] = useState(null);
    const [error, setError] = useState('');

  // Hantera sökning när användaren klickar på sökknappen
    const handleSearch = async () => {
      if (!searchWord) {
        setError('Sökfältet får inte vara tomt');
        setWordData(null);
        return;
      }

  
      try {
        // Gör en asynkron fetch-förfrågan till API:t med det angivna sökordet
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`);
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
             // Om data returneras och det är en icke-tom array, sätt resultatdatan och nollställ felmeddelandet
          setWordData(data[0]);
          setError('');
        } else {
            // Om inga resultat hittades, sätt felmeddelandet och nollställ resultatdatan
          setError('Ordet fanns inte');
          setWordData(null);
        }
      } catch (err) {
         // Hantera eventuella fel vid hämtning av data genom att sätta felmeddelandet och nollställa resultatdatan
        setError('Något gick fel vid hämtning av data');
        setWordData(null);
      }
    };
  
    return (
      <div className="dictionary-app">
         {/* Rendera SearchBar-komponenten och skicka in relevanta props */}
        <SearchBar
          searchWord={searchWord}
          setSearchWord={setSearchWord}
          handleSearch={handleSearch}
        />
          {/* Rendera WordInfo-komponenten och skicka in resultatdata och felmeddelanden */}
        <WordInfo
          wordData={wordData}
          error={error}
        />
     
      </div>
    );
  };
  
  export default DictionaryApp;