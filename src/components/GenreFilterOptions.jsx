import CheckboxesListing from "./CheckboxesListing";


const GenreOptions = ({ genres })=>{
    const genresPlaceholder = [
        {
        "id": 4,
        "name": "Action",
        "slug": "action",
        "games_count": 178249,
        "image_background": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg",
        "games": []
        },
        {
        "id": 51,
        "name": "Indie",
        "slug": "indie",
        "games_count": 62080,
        "image_background": "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg",
        "games": [
        {
        "id": 1030,
        "slug": "limbo",
        "name": "Limbo",
        "added": 13132
        },
        {
        "id": 422,
        "slug": "terraria",
        "name": "Terraria",
        "added": 12097
        },
        {
        "id": 3272,
        "slug": "rocket-league",
        "name": "Rocket League",
        "added": 11987
        },
        {
        "id": 9767,
        "slug": "hollow-knight",
        "name": "Hollow Knight",
        "added": 10518
        },
        {
        "id": 3612,
        "slug": "hotline-miami",
        "name": "Hotline Miami",
        "added": 10105
        },
        {
        "id": 3790,
        "slug": "outlast",
        "name": "Outlast",
        "added": 10037
        }
        ]
        },
        {
        "id": 3,
        "name": "Adventure",
        "slug": "adventure",
        "games_count": 137834,
        "image_background": "https://media.rawg.io/media/games/daa/daaee07fcb40744d90cf8142f94a241f.jpg",
        "games": [
        {
        "id": 3439,
        "slug": "life-is-strange-episode-1-2",
        "name": "Life is Strange",
        "added": 14732
        },
        {
        "id": 23027,
        "slug": "the-walking-dead",
        "name": "The Walking Dead: Season 1",
        "added": 10943
        },
        {
        "id": 13668,
        "slug": "amnesia-the-dark-descent",
        "name": "Amnesia: The Dark Descent",
        "added": 9716
        },
        {
        "id": 19487,
        "slug": "alan-wake",
        "name": "Alan Wake",
        "added": 9714
        },
        {
        "id": 4386,
        "slug": "saints-row-the-third",
        "name": "Saints Row: The Third",
        "added": 9628
        },
        {
        "id": 29177,
        "slug": "detroit-become-human",
        "name": "Detroit: Become Human",
        "added": 9493
        }
        ]
        },
        {
        "id": 5,
        "name": "RPG",
        "slug": "role-playing-games-rpg",
        "games_count": 55051,
        "image_background": "https://media.rawg.io/media/games/00d/00d374f12a3ab5f96c500a2cfa901e15.jpg",
        "games": [
        {
        "id": 3328,
        "slug": "the-witcher-3-wild-hunt",
        "name": "The Witcher 3: Wild Hunt",
        "added": 19827
        },
        {
        "id": 5679,
        "slug": "the-elder-scrolls-v-skyrim",
        "name": "The Elder Scrolls V: Skyrim",
        "added": 15481
        },
        {
        "id": 802,
        "slug": "borderlands-2",
        "name": "Borderlands 2",
        "added": 14715
        },
        {
        "id": 3070,
        "slug": "fallout-4",
        "name": "Fallout 4",
        "added": 13041
        },
        {
        "id": 41494,
        "slug": "cyberpunk-2077",
        "name": "Cyberpunk 2077",
        "added": 12279
        },
        {
        "id": 278,
        "slug": "horizon-zero-dawn",
        "name": "Horizon Zero Dawn",
        "added": 12256
        }
        ]
        }
        ]
    return (
        <div className="genre-options">
             <h2>Genres</h2>
             <CheckboxesListing 
                data={genresPlaceholder}
             />
        </div>
    )
}

export default GenreOptions;