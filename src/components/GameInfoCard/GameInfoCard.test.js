import { render, screen } from '@testing-library/react';
import GameInfoCard from "./GameInfoCard";

describe('Game Info Card', () => {
    it('renders an image of the game"', () => {
        render(<GameInfoCard />)
    });

    describe('Game Info for GTA5', () => {
        it("displays name of game titled 'Grand Theft Auto 5'", () => {
            render(<GameInfoCard />);
            const name = screen.getByRole('heading', { name: "Grand Theft Auto 5" });
            expect(name.textContent).toMatch(/Grand Theft Auto 5/i);
        });

        it("displays the release date '9/17/2013'", () => {
            render(<GameInfoCard />);
            const releaseDate = screen.getByText("9/17/2013");
            expect(releaseDate.textContent).toMatch(/9\/17\/2013/i);
        });

        it("displays rating", () => {
            render(<GameInfoCard />);
            const developer = screen.getByText("4.47");
            expect(developer.textContent).toMatch(/4.47/i);
        });
    });

})