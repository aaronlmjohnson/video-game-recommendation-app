import GameInfoCard from '../GameInfoCard/GameInfoCard';
import PopularGames from '../PopularGames/PopularGames';
import YearSelectionForm from '../YearSelectionForm/YearSelectionForm';

const PopularGamesSection = ({data, year, updateYear, changePopularYearData})=>{
    return (
        <div id="popular-games-for-this-year">
            <h1>Popular Games of {year}</h1>
            <YearSelectionForm 
                year={year} 
                updateYear={updateYear} 
                changePopularYearData={changePopularYearData}
            />
            <PopularGames data={data}/>
        </div>
    );
}

export default PopularGamesSection;