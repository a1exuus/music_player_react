import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faPause, faForward } from '@fortawesome/free-solid-svg-icons';
import './Controls.css'; 

function Controls() {
  return (
    <div className="controls">
      <div className="buttons">
        <button>
          <FontAwesomeIcon icon={faBackward} />
        </button>
        <button>
          <FontAwesomeIcon icon={faPause} />
        </button>
        <button>
          <FontAwesomeIcon icon={faForward} />
        </button>
      </div>
      <div className="progress-bar">
        <input type="range" min="0" max="100" />
      </div>
    </div>
  );
}

export default Controls;