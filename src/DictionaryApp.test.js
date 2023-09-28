import DictionaryApp from "./DictionaryApp";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
// import { setupServer } from 'msw/node'; 




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





















/*   // Skapa en mock API-server
const server = setupServer(
    rest.get('https://api.dictionaryapi.dev/api/v2/entries/en/hello', (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            word: 'hello',
            meanings: [
              {
                partOfSpeech: 'interjection',
                definitions: [
                  {
                    definition: 'used to greet someone',
                    example: 'hello there!',
                  },
                ],
              },
            ],
          },
        ])
      );
    })
  );
  
  // Starta mock API-servern före testerna
  beforeAll(() => server.listen());
  
  // Stoppa mock API-servern efter testerna
  afterAll(() => server.close());
  
  // Återställ mock API-serverns förfrågningshistorik mellan testerna
  afterEach(() => server.resetHandlers());
  
  it('Ska hantera sökning och visa resultat korrekt', async () => {
     // Rendera DictionaryApp-komponenten
    render(<DictionaryApp />);
    // Hitta sökfältet och sökknappen
    const searchBarElement = screen.getByPlaceholderText('Sök efter ett ord');
    const searchButtonElement = screen.getByText('Sök');
    // Använd userEvent för att skriva in sökordet och klicka på sökknappen
    userEvent.type(searchBarElement, 'hello');
    userEvent.click(searchButtonElement);
    // Använd waitFor för att vänta på att resultatet visas
    await waitFor(() => {
      expect(screen.getByText('Ord: hello')).toBeInTheDocument();
      expect(screen.getByText('Betydelser:')).toBeInTheDocument();
      expect(screen.getByText('Exempel:')).toBeInTheDocument();
      
    });
  });
   */




