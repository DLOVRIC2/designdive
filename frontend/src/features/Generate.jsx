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

  return (
    <div className="container generate-container">
      <h1 className="title">
        Generate <span className="gradient-text">Your Design</span><br />
      </h1>

      <p className="gradient-paragraph">
        Please choose a scene to place your object or{' '}
        <Link to="/blank" className="underline-link">start a blank project</Link>.
      </p>
      <div className="scene-selection">
        <div className="scene">
            <div className={`scene-box ${selectedScene === 1 ? 'selected' : ''}`} onClick={() => handleSceneSelection(1)}>
            <img src={img1} alt='Scene 1' />
            </div>
            <div>- Scene 1: Living Room</div>
        </div>
        <div className="scene">
            <div className={`scene-box ${selectedScene === 2 ? 'selected' : ''}`} onClick={() => handleSceneSelection(2)}>
            <img src={img2} alt='Scene 2' />
            </div>
            <div>- Scene 2: Bedroom</div>
        </div>
        <div className="scene">
            <div className={`scene-box ${selectedScene === 3 ? 'selected' : ''}`} onClick={() => handleSceneSelection(3)}>
            <img src={img3} alt='Scene 3' />
            </div>
            <div>- Scene 3: Office Space</div>
        </div>
    </div>

      <div className="scene-selected">Selected: {`Scene ${selectedScene || '-'}`}</div>
    </div>
  );
};

export default Generate;
