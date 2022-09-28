import { render, screen } from '@testing-library/react';
import useGameAPI from "./useGameAPI";
import Axios from 'axios';
import axios from 'axios';

jest.mock('axios');
const mockData = {
    "results":[
        {
            "name": "Grand Theft Auto 5",
            "released":"2013-09-17",
            "background_image":"https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
            "rating": 4.47
        }
    ]
}

describe("Game Info Card API", ()=>{
    // need useState for the GameInfoCardAPI
    //rename ot useGameAPI
    it('returns the name of the game', async ()=>{
        axios.get.mockResolvedValue(mockData);
    });
});


//image
//name
//release date
//developer