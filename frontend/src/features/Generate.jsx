import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Generate.css';
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';


const Generate = () => {
  // Default selection set to 1
  const [selectedScene, setSelectedScene] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showPromptInput, setShowPromptInput] = useState(false);
  const [promptText, setPromptText] = useState('');

  const handleSceneSelection = (scene) => {
    setSelectedScene(scene);
    setSelectedItem(null); // Reset selected item when scene changes
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowPromptInput(true);
  };

  const SCENE_NAMES = {
    1: "Living Room",
    2: "Bedroom",
    3: "Office Space",
  };

  const SCENE_ITEMS = {
    "Living Room": ["Sofa", "Fireplace", "Table", "Lamp"],
    "Bedroom": ["Bed", "Nightstand", "Lamp", "Closet"],
    "Office Space": ["Desk", "Chair", "Bookshelf", "Plant"],
  };

  const selectedSceneName = SCENE_NAMES[selectedScene] || '-';
  const items = SCENE_ITEMS[selectedSceneName] || [];

  const [isGenerated, setIsGenerated] = useState(false);

  const handleGenerateClick = async () => {
    const promptValue = promptText; // Or whatever value you want to send as the prompt
    try {
      const response = await fetch('http://backend:8000/start_task/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: promptValue }),
      });
      const result = await response.json();
      if (result.status === 'success') {
        // Save the task ID if you need it for later, e.g., to check the task's status
        const taskId = result.task_id;
        setIsGenerated(true);
        // You might also want to start polling the task status endpoint to get updates on the task
      } else {
        // Handle any error from the server
        console.error('Error starting task', result);
      }
    } catch (error) {
      // Handle any network error
      console.error('Error making request to start task', error);
    }
  };


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

        <h4>What would you like to redesign?</h4>
        <div className="items-container">
          {items.map((item) => (
            <button
              key={item}
              className={`item-button ${selectedItem === item ? 'selected' : ''}`}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </button>
          ))}
        </div>

        {showPromptInput && (
          <div className="prompt-container">
            <label htmlFor="prompt-input">Enter your prompt:</label>
            <input
              type="text"
              id="prompt-input"
              value={promptText}
              onChange={(e) => setPromptText(e.target.value)}
              placeholder="Enter your prompt..."
            />
          </div>
        )}

        <button className="generate-button" onClick={handleGenerateClick}>
          Generate
        </button>

        {isGenerated && (
        <div className="generated-section">
            <div className="generated-image-container">
            <img src={img1} alt="Generated Preview" />
            </div>
            <button className="download-button">Download</button>
        </div>
        )}

        <div className="empty-space"></div>
        
    </div>
  );
};

export default Generate;