import GameInfoCard from '../GameInfoCard/GameInfoCard';
import YearSelectionForm from '../YearSelectionForm/YearSelectionForm';

const PopularGames = ({data, year, updateYear, changePopularYearData})=>{
    return (
        <div id="popular-games-for-this-year">
            <h1>Popular Games of YEAR</h1>
            <YearSelectionForm 
                year={year} 
                updateYear={updateYear} 
                changePopularYearData={changePopularYearData}
            />
            {data.map((game)=>{
                return <GameInfoCard 
                    name={game.name}
                    releaseDate = {game.released}
                    rating={game.rating} 
                    src={game.background_image} 
                    key={game.id}
                />
            })}
        </div>
    );
}

export default PopularGames;