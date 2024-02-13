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
    ]


    return (
        form && <div className="game-filter-options">
            <GameFormCheckboxes 
                data={developersPlaceholder}
                heading={"Developers"}
                setForm={setForm}
                propertyName={"developers"}
            />
            <PlatformOptions 
                setForm={setForm}
            />
            <GenreOptions />
            <DateRange />
        </div>
    )
}

export default GameFilterOptions;