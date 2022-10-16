import GameInfoCard from '../GameInfoCard/GameInfoCard';

const GamesReleasedToday = ({cards})=>{
    return (
        <div id="games-released-today">
            <h1>Games Released Today</h1>
            {cards.map((card)=><GameInfoCard name={"Crash Bandicoot"} releaseDate = {"09/09/1996"} rating="4.5" />)}
        </div>
    );
}

export default GamesReleasedToday;