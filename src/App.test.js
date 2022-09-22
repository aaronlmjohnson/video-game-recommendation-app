import { render, screen } from '@testing-library/react';
import App from './App';


describe('App', () => {
  it('renders div with header "Video Game Recommender"', () => {
    render(<App />);
    const header = screen.getByRole('heading', {name: "Video Game Recommender"});
    expect(header.textContent).toMatch(/Video Game Recommender/i);
  });

  describe('Games Released Today Section', ()=>{
    it('renders a header saying "Games Released Today"', ()=>{
      render(<App />);
      const header = screen.getByRole('heading', {name: "Games Released Today"});
      expect(header.textContent).toMatch(/Games Released Today/i);
    });
  })
});

