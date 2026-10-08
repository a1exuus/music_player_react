import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './PlayerDetails.css'
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons'

function PlayerDetails() {
    return (
        <div className="player-details">
            <p className="volume">
                <button>
                    <FontAwesomeIcon icon={ faVolumeUp } />
                </button>
                <input type="range" min='0' max='100' className="input-range" />
            </p>
            <p className="artistName">
                <b>Qwerty</b> - <span>Qwery</span>
            </p>
        </div>
    )
}

export default PlayerDetails