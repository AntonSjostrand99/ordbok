import DictionaryApp from "./DictionaryApp";
import { render, screen, waitFor} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';


it('DictionaryApp renders correctly', () => {
  // Rendera DictionaryApp-komponenten
  render(<DictionaryApp />);
    // Försök att hitta sökfältet och sökknappen i DOM:en
  const searchBarElement = screen.getByPlaceholderText('Sök efter ett ord');
  const searchButtonElement = screen.getByText('Sök');
  
// Förvänta dig att både sökfältet och sökknappen finns 
  expect(searchBarElement).toBeInTheDocument();
  expect(searchButtonElement).toBeInTheDocument();
});




it('should show search result correctly with everything', async () => {
  const server = setupServer(
    // Mocka API-förfrågan här
    rest.get('https://api.dictionaryapi.dev/api/2/entries/en/:word', (req, res, ctx) => {
      const { word } = req.params;
      return res(
        ctx.json([
          {
            word: word,
            meanings: [
              {
                partOfSpeech: 'noun',
                definitions: [
                  {
                    definition: 'an expression of greeting',
                    example: 'Hello, how are you?'
                  }
                ]
              }
            ]
          }
        ])
      );
    })
  );

  // Starta servern innan tester körs
    server.listen();
  

  render(<DictionaryApp />);

  //  Hitta input-elementet för sökord
  const input = screen.getByPlaceholderText('Sök efter ett ord');
  expect(input).toBeInTheDocument();

  //  Hitta knappen för att starta sökningen
  const searchButton = screen.getByRole('button', { name: /Sök/i });

  // Använd användarinteraktion för att skriva in "hello" i sökfältet
  userEvent.type(input, 'hello');
  // Klicka på sökknappen
  userEvent.click(searchButton);
 // Använd waitFor för att vänta på att resultatet visas
  await waitFor(() => {
    expect(screen.getByText('Ordet du sökte')).toBeInTheDocument();
    expect(screen.getByText('hello')).toBeInTheDocument();
    expect(screen.getByText('Betydelser')).toBeInTheDocument();
    expect(screen.getByText('noun')).toBeInTheDocument();
    expect(screen.getByText('verb')).toBeInTheDocument();
   // Förväntas finnas två ljudinspelningar
    expect(screen.getAllByTestId('audio')).toHaveLength(2);
  });

  // Stäng servern efter att testerna är klara
    server.close();
 
});

