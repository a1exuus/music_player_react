import { useState } from 'react'; // useRef больше не нужен по инструкции
import './PlayItem.css';
import Button from '../../../components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function PlayItem({ tittle, artist, isDeleted, song }) {
    const audioId = `myAudio${song.id}`; 
    const [play, setPlay] = useState(false);

    function handler() {
        const allAudios = document.querySelectorAll('audio');
        allAudios.forEach((audio) => audio.pause());

        const currentAudio = document.getElementById(audioId);

        if (currentAudio) {
            if (!play) {
                currentAudio.play();
            } else {
                currentAudio.pause();
            }
            setPlay(!play);
        }
    }

    return (
        <div className="play-item" onClick={handler}>
            <main>
                <img src='https://upload.wikimedia.org/wikipedia/commons/d/d5/CD_autolev_crop.jpg?utm_source=ru.wikipedia.org&utm_campaign=index&utm_content=original' alt="Disk" />
                <p>
                    <span>
                        <b>
                            {tittle} 
                        </b>
                    </span>
                    <span>
                        {artist}
                    </span>
                    <audio id={audioId} src={song.audio} />
                </p>
            </main>
            <Button isDeleted={isDeleted}>
                <FontAwesomeIcon icon={isDeleted ? faPlusSquare : faTrashAlt} />
            </Button>
        </div>
    );
}

export default PlayItem;
