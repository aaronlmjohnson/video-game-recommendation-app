import PopularGames from '../PopularGames/PopularGames';
import YearSelectionForm from '../YearSelectionForm/YearSelectionForm';
import './PopularGamesSection.css';

const PopularGamesSection = ({data, year, updateYear, changePopularYearData})=>{
    return (
        <div id="popular-games-section">
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