import React from 'react';
import './WordInfo.css'


const WordInfo = ({ wordData, error }) => {
   // Om det finns ett felmeddelande, rendera det som en <p> med klassen "error"
  if (error) {
    return <p className="error">{error}</p>;
  }

    // Om det inte finns någon resultatdata, rendera ingenting
  if (!wordData) {
    return null; 
  }


   // Skapa en lista med betydelser från resultatdatan
  const meaningsList = wordData.meanings.map((meaning, index) => (
    <div key={index} className="meaning">
      <p className="part-of-speech">{meaning.partOfSpeech}</p>
      <ul className="definitions">
        {meaning.definitions.map((definition, subIndex) => (
          <li key={subIndex} className="definition">
            {definition.definition}
            {definition.example && (
              <p className="example">Exempel: {definition.example}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  ));


    // Skapa en lista med ljuduppspelningar från resultatdatan
  const phoneticsList = wordData.phonetics.map((phonetic, index) => (
    <div key={index} className="audio-item">
      {phonetic.audio && (
        <audio controls className="audio-player">
          <source src={phonetic.audio} type="audio/mpeg" />
        </audio>
      )}
    </div>
  ));

  return (
    <section className="wordSection">
        {/* Visa ordet du sökte */}
        <article className='card_word'>
        <h3 className="word">Ordet du sökte </h3>
        <h1 className='word2'>{wordData.word}</h1>
      {wordData.phonetic && <p className="phonetic">Phonetic: {wordData.phonetic}</p>}
        </article>
          {/* Visa betydelser om de finns */}
        <article className='card_meaning'>
        <h3 className="meanings">Betydelser</h3>
        {meaningsList}
        </article>
        
        <article className='card_audio'>

            {/* Visa ljuduppspelningar om de finns */}
      {wordData.phonetics.length > 0 && (
        <div className="audio">
          <h3>Ljuduppspelningar</h3>
          {phoneticsList}
        </div>
      )}

        </article>

      
    </section>
  );
};

export default WordInfo;