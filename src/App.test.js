import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders header "Video Game Recommender"', () => {
    render(<App />);
    const header = screen.getByRole('heading', {name: "Video Game Recommender"});
    expect(header.textContent).toMatch(/Video Game Recommender/i);
  });
});

