import { render, screen } from '@testing-library/react';
import ModeButtons from './ModeButtons';

describe('Select Mode Buttons', ()=>{

    it('renders two buttons to the screen', ()=>{
      render(<ModeButtons />);
      const buttons = screen.getAllByRole("button");
      expect(buttons).toHaveLength(2);
    });
  
    it('first button says "Recommend a Game"', ()=>{
      render(<ModeButtons />);
      const button = screen.getByRole("button", {name: "Recommend a Game"});
      expect(button.textContent).toMatch(/Recommend a Game/i);
    });
  });