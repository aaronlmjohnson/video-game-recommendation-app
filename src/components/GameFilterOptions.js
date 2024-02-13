import { useEffect, useState } from "react";
import DateRange from "./DateRange";
import DeveloperOptions from "./DeveloperOptions";
import GenreOptions from "./GenreFilterOptions";
import PlatformOptions from "./PlatformOptions";
import GameFormCheckboxes from "./GameFormCheckboxes";

const GameFilterOptions = ()=>{
    const [form, setForm] = useState({
        platforms:"",
        developers:"",
        genres:"",
        dateRange:""
    });

    useEffect(()=>{
        console.log("form:", form);
    },[form])

    const developersPlaceholder = [
        {
        "id": 405,
        "name": "Ubisoft",
        "slug": "ubisoft",
        "games_count": 342,
        "image_background": "https://media.rawg.io/media/games/956/95640d5ea0288c187dbce849a4254a41.jpg",
        "games": [
        {
        "id": 4161,
        "slug": "far-cry-3",
        "name": "Far Cry 3",
        "added": 9898
        },
        {
        "id": 362,
        "slug": "for-honor",
        "name": "For Honor",
        "added": 9059
        },
        {
        "id": 3841,
        "slug": "assassins-creed-iv-black-flag",
        "name": "Assassin’s Creed IV: Black Flag",
        "added": 9030
        },
        {
        "id": 3687,
        "slug": "watch-dogs",
        "name": "Watch Dogs",
        "added": 7806
        },
        {
        "id": 23585,
        "slug": "far-cry-5",
        "name": "Far Cry 5",
        "added": 7781
        },
        {
        "id": 58616,
        "slug": "assassins-creed-odyssey",
        "name": "Assassin's Creed Odyssey",
        "added": 7573
        }
        ]
        },
        {
        "id": 1612,
        "name": "Valve Software",
        "slug": "valve-software",
        "games_count": 43,
        "image_background": "https://media.rawg.io/media/screenshots/d33/d331d95adf10b44ee3678129020bc31f.jpg",
        "games": [
        {
        "id": 4200,
        "slug": "portal-2",
        "name": "Portal 2",
        "added": 18722
        },
        {
        "id": 4291,
        "slug": "counter-strike-global-offensive",
        "name": "Counter-Strike: Global Offensive",
        "added": 16314
        },
        {
        "id": 13536,
        "slug": "portal",
        "name": "Portal",
        "added": 15923
        },
        {
        "id": 12020,
        "slug": "left-4-dead-2",
        "name": "Left 4 Dead 2",
        "added": 15808
        },
        {
        "id": 13537,
        "slug": "half-life-2",
        "name": "Half-Life 2",
        "added": 14174
        },
        {
        "id": 11859,
        "slug": "team-fortress-2",
        "name": "Team Fortress 2",
        "added": 12787
        }
        ]
        },
        {
        "id": 18893,
        "name": "Feral Interactive",
        "slug": "feral-interactive",
        "games_count": 106,
        "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg",
        "games": [
        {
        "id": 7689,
        "slug": "rise-of-the-tomb-raider",
        "name": "Rise of the Tomb Raider",
        "added": 11397
        },
        {
        "id": 11973,
        "slug": "shadow-of-mordor",
        "name": "Middle-earth: Shadow of Mordor",
        "added": 10815
        },
        {
        "id": 4427,
        "slug": "bioshock-2",
        "name": "BioShock 2",
        "added": 10560
        },
        {
        "id": 10035,
        "slug": "hitman",
        "name": "Hitman",
        "added": 10260
        },
        {
        "id": 10754,
        "slug": "bioshock-remastered",
        "name": "BioShock Remastered",
        "added": 9852
        },
        {
        "id": 10243,
        "slug": "company-of-heroes-2",
        "name": "Company of Heroes 2",
        "added": 9052
        }
        ]
        },
        {
        "id": 3709,
        "name": "Ubisoft Montreal",
        "slug": "ubisoft-montreal",
        "games_count": 120,
        "image_background": "https://media.rawg.io/media/games/c69/c69e0952cdea6baa7cf0739b2e7792fb.jpg",
        "games": [
        {
        "id": 4161,
        "slug": "far-cry-3",
        "name": "Far Cry 3",
        "added": 9898
        },
        {
        "id": 362,
        "slug": "for-honor",
        "name": "For Honor",
        "added": 9059
        },
        {
        "id": 3841,
        "slug": "assassins-creed-iv-black-flag",
        "name": "Assassin’s Creed IV: Black Flag",
        "added": 9030
        },
        {
        "id": 3687,
        "slug": "watch-dogs",
        "name": "Watch Dogs",
        "added": 7806
        },
        {
        "id": 23585,
        "slug": "far-cry-5",
        "name": "Far Cry 5",
        "added": 7781
        },
        {
        "id": 28568,
        "slug": "assassins-creed-ii",
        "name": "Assassin's Creed II",
        "added": 7615
        }
        ]
        }
    ];

    const platformsPlaceholder = [
        {
        "id": 4,
        "name": "PC",
        "slug": "pc",
        "games_count": 525642,
        "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
        "image": null,
        "year_start": null,
        "year_end": null,
        "games": [
        {
        "id": 3498,
        "slug": "grand-theft-auto-v",
        "name": "Grand Theft Auto V",
        "added": 20553
        },
        {
        "id": 3328,
        "slug": "the-witcher-3-wild-hunt",
        "name": "The Witcher 3: Wild Hunt",
        "added": 19828
        },
        {
        "id": 4200,
        "slug": "portal-2",
        "name": "Portal 2",
        "added": 18722
        },
        {
        "id": 4291,
        "slug": "counter-strike-global-offensive",
        "name": "Counter-Strike: Global Offensive",
        "added": 16314
        },
        {
        "id": 5286,
        "slug": "tomb-raider",
        "name": "Tomb Raider (2013)",
        "added": 16233
        },
        {
        "id": 13536,
        "slug": "portal",
        "name": "Portal",
        "added": 15923
        }
        ]
        },
        {
        "id": 187,
        "name": "PlayStation 5",
        "slug": "playstation5",
        "games_count": 1014,
        "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg",
        "image": null,
        "year_start": 2020,
        "year_end": null,
        "games": [
        {
        "id": 3498,
        "slug": "grand-theft-auto-v",
        "name": "Grand Theft Auto V",
        "added": 20553
        },
        {
        "id": 3328,
        "slug": "the-witcher-3-wild-hunt",
        "name": "The Witcher 3: Wild Hunt",
        "added": 19828
        },
        {
        "id": 5679,
        "slug": "the-elder-scrolls-v-skyrim",
        "name": "The Elder Scrolls V: Skyrim",
        "added": 15481
        },
        {
        "id": 32,
        "slug": "destiny-2",
        "name": "Destiny 2",
        "added": 13180
        },
        {
        "id": 41494,
        "slug": "cyberpunk-2077",
        "name": "Cyberpunk 2077",
        "added": 12280
        },
        {
        "id": 766,
        "slug": "warframe",
        "name": "Warframe",
        "added": 11852
        }
        ]
        },
        {
        "id": 18,
        "name": "PlayStation 4",
        "slug": "playstation4",
        "games_count": 6765,
        "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
        "image": null,
        "year_start": null,
        "year_end": null,
        "games": [
        {
        "id": 3498,
        "slug": "grand-theft-auto-v",
        "name": "Grand Theft Auto V",
        "added": 20553
        },
        {
        "id": 3328,
        "slug": "the-witcher-3-wild-hunt",
        "name": "The Witcher 3: Wild Hunt",
        "added": 19828
        },
        {
        "id": 5286,
        "slug": "tomb-raider",
        "name": "Tomb Raider (2013)",
        "added": 16233
        },
        {
        "id": 5679,
        "slug": "the-elder-scrolls-v-skyrim",
        "name": "The Elder Scrolls V: Skyrim",
        "added": 15481
        },
        {
        "id": 28,
        "slug": "red-dead-redemption-2",
        "name": "Red Dead Redemption 2",
        "added": 15018
        },
        {
        "id": 4062,
        "slug": "bioshock-infinite",
        "name": "BioShock Infinite",
        "added": 14939
        }
        ]
        },
        {
        "id": 1,
        "name": "Xbox One",
        "slug": "xbox-one",
        "games_count": 5589,
        "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg",
        "image": null,
        "year_start": null,
        "year_end": null,
        "games": [
        {
        "id": 3498,
        "slug": "grand-theft-auto-v",
        "name": "Grand Theft Auto V",
        "added": 20553
        },
        {
        "id": 3328,
        "slug": "the-witcher-3-wild-hunt",
        "name": "The Witcher 3: Wild Hunt",
        "added": 19828
        },
        {
        "id": 4200,
        "slug": "portal-2",
        "name": "Portal 2",
        "added": 18722
        },
        {
        "id": 5286,
        "slug": "tomb-raider",
        "name": "Tomb Raider (2013)",
        "added": 16233
        },
        {
        "id": 5679,
        "slug": "the-elder-scrolls-v-skyrim",
        "name": "The Elder Scrolls V: Skyrim",
        "added": 15481
        },
        {
        "id": 28,
        "slug": "red-dead-redemption-2",
        "name": "Red Dead Redemption 2",
        "added": 15018
        }
        ]
        }
    ];

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
    ];

    return (
        form && <div className="game-filter-options">
            <GameFormCheckboxes 
                data={developersPlaceholder}
                heading={"Developers"}
                setForm={setForm}
                propertyName={"developers"}
            />
            <GameFormCheckboxes 
                data={genresPlaceholder}
                heading={"Genres"}
                setForm={setForm}
                propertyName={"genres"}
            />
            <GameFormCheckboxes 
                data={platformsPlaceholder}
                heading={"Platforms"}
                setForm={setForm}
                propertyName={"platforms"}
            />
            <DateRange 
                setForm={setForm}
            />
        </div>
    )
}

export default GameFilterOptions;