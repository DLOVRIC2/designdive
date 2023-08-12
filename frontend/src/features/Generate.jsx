import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Generate.css';
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';


const Generate = () => {
  // Default selection set to 1
  const [selectedScene, setSelectedScene] = useState(1);

  const handleSceneSelection = (scene) => {
    setSelectedScene(scene);
  };

  const SCENE_NAMES = {
    1: "Living Room",
    2: "Bedroom",
    3: "Office Space",
  };

  const selectedSceneName = SCENE_NAMES[selectedScene] || '-';

  return (
    <div className="container generate-container">
      <h1 className="title">
        Generate <span className="gradient-text">Your Design</span><br />
      </h1>

      <h3>
        <strong>Please choose a scene to place your object or</strong>{' '}
        <Link to="/blank" className="underline-link">start a blank project</Link>.
      </h3>
      <div className="scene-selection">
        <div className="scene">
            <div className={`scene-box ${selectedScene === 1 ? 'selected' : ''}`} onClick={() => handleSceneSelection(1)}>
            <img src={img1} alt='Scene 1' />
            </div>
            <div className='scene-text'>Scene 1: Living Room</div>
        </div>
        <div className="scene">
            <div className={`scene-box ${selectedScene === 2 ? 'selected' : ''}`} onClick={() => handleSceneSelection(2)}>
            <img src={img2} alt='Scene 2' />
            </div>
            <div className='scene-text'>Scene 2: Bedroom</div>
        </div>
        <div className="scene">
            <div className={`scene-box ${selectedScene === 3 ? 'selected' : ''}`} onClick={() => handleSceneSelection(3)}>
            <img src={img3} alt='Scene 3' />
            </div>
            <div className='scene-text'>Scene 3: Office Space</div>
        </div>
    </div>

        <div className="scene-selected">
            <span className="selected-label">Selected:</span>
            <span className="selected-scene">{selectedSceneName}</span>
        </div>

    </div>
  );
};

export default Generate;
