import React from 'react';
import { render , screen , fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from './components/SearchBar';




describe('SearchBar component' , () => {

 it('SearchBar renders correctly', () => {
    // Rendera SearchBar-komponenten
    render(<SearchBar />);
      // Hitta sökfältet i komponenten med hjälp av dess placeholder-text
    const searchBar = screen.getByPlaceholderText('Sök efter ett ord');
    // Förvänta sig att sökfältet finns i DOM:en
    expect(searchBar).toBeInTheDocument();
 });
      
 it('should calls handleSearch on button click', () => {
    // Skapa en mock-funktion 'handleSearch'
    const handleSearch = jest.fn();
     // Rendera SearchBar-komponenten med 'handleSearch' som en prop
    render(<SearchBar searchWord="" setSearchWord={() => {}} handleSearch={handleSearch} />);
      // Hitta sökknappen i komponenten
    const searchButtonElement = screen.getByText('Sök');
        
    // Använd userEvent för att klicka på sökknappen
    userEvent.click(searchButtonElement);
    
    // Förvänta sig att 'handleSearch' har blivit anropad en gång
    expect(handleSearch).toHaveBeenCalledTimes(1);
 });
       
 it('should handle inputs correctly', () => {
  // Skapa en mock-funktion 'setSearchWord'
    const setSearchWord = jest.fn();
// Rendera SearchBar-komponenten med 'setSearchWord' som en prop
    render(<SearchBar searchWord="" setSearchWord={setSearchWord} handleSearch={() => {}} />);
      // Hitta sökfältet i komponenten med hjälp placeholder-text
    const searchBarElement = screen.getByPlaceholderText('Sök efter ett ord');
      
    // Simulera en ändringshändelse på inmatningsfältet till "apple"
    fireEvent.change(searchBarElement, { target: { value: 'apple' } });
      
    // Förvänta sig att setSearchWord har anropats med "apple"
    expect(setSearchWord).toHaveBeenCalledWith('apple');
 });

});








