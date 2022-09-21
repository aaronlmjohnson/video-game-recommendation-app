import { render, screen } from '@testing-library/react';
import App from './App';


describe('App', () => {
  it('renders div with header "Video Game Recommender"', () => {
    render(<App />)
    expect(screen.getByRole('heading').textContent).toMatch(/Video Game Recommender/i);
  });

  describe('Select Mode Buttons', ()=>{

    it('renders two buttons to the screen', ()=>{
      render(<App />);
      const buttons = screen.getAllByRole("button");
      expect(buttons).toHaveLength(2);
    });
  
    it('first button says "Recommend a Game"', ()=>{
      render(<App />);
      const button = screen.getByRole("button", {name: "Recommend a Game"});
      expect(button.textContent).toMatch(/Recommend a Game/i);
    });
  });

  
});

