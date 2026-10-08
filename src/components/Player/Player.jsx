import Controls from './Controls/Controls'
import './Player.css' 
import PlayerDetails from './PlayerDetails/PlayerDetails'

function Player() {
    return (
        <div className="player">
            <div className="player-content">
                <Controls />
                <PlayerDetails />
            </div>
        </div>
    )
}

export default Player