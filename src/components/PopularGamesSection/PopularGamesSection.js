// import { useState, useEffect } from 'react';
// import PopularGames from '../GameCarousel/GameCarousel';
// import useApiHandler from '../useGameAPI/useApiHandler';
// import './PopularGamesSection.css';
// import useCarousel from '../useCarousel/useCarousel';


// const PopularGamesSection = ({apiKey})=>{
//     const GAMES_URL = `https://api.rawg.io/api/games?key=${apiKey}`;
//     const { data, refetch, loading } = useApiHandler(`${GAMES_URL}&dates=2023-01-01,2023-12-31&page_size=16`);
//     const { setGames, subset, shiftLeft, shiftRight, positionNames } = useCarousel();
//     const [year, setYear] = useState(new Date().getFullYear());


//     const updateYear = (value)=>{
//         setYear(value);
//     }
    
//       const changePopularYearData = (e)=>{
//         e.preventDefault();
//         const endpoint = `&dates=${year}-01-01,${year}-12-31&page_size=16`;
//         const url = `${GAMES_URL}${endpoint}`;
//         refetch(url);
//     }

//     useEffect(()=>{
//         if(!loading) setGames(data.results);
//     }, [data]);

//     if(loading) <p>{"Loading..."}</p>
//     else {
//         return (
//             <div id="popular-games-section">
//                 <YearSelectionForm 
//                     year={year} 
//                     updateYear={updateYear} 
//                     changePopularYearData={changePopularYearData}
                    
//                 />
                
//                 <PopularGames 
//                     games={subset} 
//                     shiftRight = { shiftRight }
//                     shiftLeft = { shiftLeft }
//                     positionNames = { positionNames }
//                 />
                
//             </div>
//         );
//     }
// }
import YearSelectionForm from '../YearSelectionForm/YearSelectionForm';

const PopularGamesSection = ({url, year, setYear})=>{

    return (
        <div id="popular-games-section">
            <YearSelectionForm 
                year={year} 
                setYear={setYear}                 
            />
            
            {/* <PopularGames 
                games={subset} 
                shiftRight = { shiftRight }
                shiftLeft = { shiftLeft }
                positionNames = { positionNames }
            />
             */}
        </div>
    );
}
    

export default PopularGamesSection;