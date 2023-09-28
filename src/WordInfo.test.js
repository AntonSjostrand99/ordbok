import React from 'react';
import { render, screen } from '@testing-library/react';
import WordInfo from './components/WordInfo';



describe('WordInfo component', () => {
    
  it('should renders an error message when there is an error', () => {
    // Rendera WordInfo-komponenten med ett felmeddelande
    const error = 'An error occurred';
    render(<WordInfo wordData={null} error={error} />);
    // Hitta felmeddelandet i komponenten
    const errorMessage = screen.getByText('An error occurred');
     // Förvänta sig att felmeddelandet finns 
    expect(errorMessage).toBeInTheDocument();
  });


  it('should renders nothing when no word data is provided', () => {
     // Rendera WordInfo-komponenten utan orddata och utan felmeddelande
    render(<WordInfo wordData={null} error="" />);
     // Försök att hitta ett element med test-ID "word-section"
    const wordSection = screen.queryByTestId('word-section');
     // Förvänta sig att det inte finns (är null)
    expect(wordSection).toBeNull();
  });

 
});


