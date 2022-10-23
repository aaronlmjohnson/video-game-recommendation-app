import { render, screen } from '@testing-library/react';
import GamesReleasedToday from "./GamesReleasedToday";

describe('Games Released Today Section', ()=>{
    it('renders a header saying "Games Released Today"', ()=>{
        render(<GamesReleasedToday />);
        const header = screen.getByRole('heading', {name: "Games Released Today"});
        expect(header.textContent).toMatch(/Games Released Today/i);
    });
})