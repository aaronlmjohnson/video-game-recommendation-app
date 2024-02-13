import CheckboxesListing from "./CheckboxesListing";


const PlatformOptions = ({ platforms })=>{
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
    ]
    return (
        <div className="platform-options">
             <h2>Platforms</h2>
             <CheckboxesListing 
                data={platformsPlaceholder}
             />
        </div>
    )
}

export default PlatformOptions;