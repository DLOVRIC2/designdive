import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';
import './Style/Generate.css';
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';


const Generate = () => {
  // Default selection set to 1
  const [selectedScene, setSelectedScene] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showPromptInput, setShowPromptInput] = useState(false);
  const [promptText, setPromptText] = useState('');
  const [prompts, setPrompts] = useState({}); // Object to store prompts for each item
  const [renderedImage, setRenderedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);



  const handleSceneSelection = (scene) => {
    setSelectedScene(scene);
    setSelectedItem(null); // Reset selected item when scene changes
    setPrompts({}); // Clear prompts when scene changes
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowPromptInput(true);
  };

  const handlePromptSubmit = (e) => {
    e.preventDefault();
    // Add the current prompt to the prompts object
    setPrompts({
      ...prompts,
      [selectedItem]: promptText,
    });
    // Clear the prompt input
    setPromptText('');
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


  // Array of fun facts
  const funFacts = [
    'The first 3D printer was created in the mid-1980s by Chuck Hull.',
    '3D modeling can be used in various industries, including film, architecture, healthcare, and video games.',
    'The term "polygon" in 3D modeling refers to a flat, two-dimensional shape with straight sides.',
    '3D modeling software like Blender, Maya, and 3ds Max are widely used by professionals in the field.',
    '3D printing technology has been used to create everything from prosthetic limbs to food!',
    'Architects use 3D modeling to visualize buildings and structures before they are constructed.',
    '3D models can be textured, allowing them to have realistic surfaces with details like color, roughness, and bumpiness.',
    'Virtual Reality (VR) and Augmented Reality (AR) often rely on 3D models to create immersive experiences.',
    '3D modeling can involve different techniques, such as sculpting, polygonal modeling, and parametric modeling.',
    '3D scanners can capture real-world objects and convert them into digital 3D models.',
    'Subdivision surface modeling is a technique used to create smooth organic shapes from simple geometric forms.',
    'Medical professionals use 3D modeling to create accurate models of organs for surgical planning and education.',
    '3D models can be exported to various file formats, such as OBJ, FBX, and STL.',
    'Reverse engineering involves creating 3D models from existing physical objects through scanning and analysis.',
    '3D modeling has revolutionized the prototyping process, allowing rapid iteration and testing of product designs.'
]

  // State to keep track of the current fun fact index
  const [funFactIndex, setFunFactIndex] = useState(0);

  const rotateFunFacts = () => {
    const intervalId = setInterval(() => {
      // Remove the if condition or check some other valid condition
      const newIndex = (funFactIndex + 1) % funFacts.length;
      setFunFactIndex(newIndex); // Update the fun fact index
    }, 5000); // Set a reasonable time interval like 5000ms (5 seconds)
  
    return () => clearInterval(intervalId); // Clear interval when component is unmounted
  };
  
  useEffect(rotateFunFacts, [funFactIndex]); // Run rotateFunFacts when funFactIndex changes

  // To pass back to the API
  const selectedItems = Object.keys(prompts);
  const ROOM_TYPE_MAPPING = {
    "Office Space": "office",
    "Living Room": "livingroom",
    "Bedroom": "bedroom"
  };

  const selectedSceneName = SCENE_NAMES[selectedScene] || '-';
  const items = SCENE_ITEMS[selectedSceneName] || [];
  const roomTypeValue = ROOM_TYPE_MAPPING[selectedSceneName];

  const [isGenerated, setIsGenerated] = useState(false);

  const handleGenerateClick = async () => {
    setIsLoading(true); // Set loading state
    const promptValues = Object.values(prompts); // Convert prompts object to an array

    console.log('Starting request to generate with prompts:', promptValues);
    try {
      const response = await fetch('http://localhost:8000/start_task/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify(promptValues),
        body: JSON.stringify({
          prompts: promptValues,
          user_defined_categories: selectedItems,
          room_type: roomTypeValue
        }),

      });
      const result = await response.json();
      console.log('Received response from backend:', result);
      if (result.status === 'success') {
        // Save the task ID if you need it for later, e.g., to check the task's status
        const taskId = result.task_id;
        const pollInterval = setInterval(async () => {
          const statusResponse = await fetch(`http://localhost:8000/task_status/${taskId}`);
          const statusResult = await statusResponse.json();
          if (statusResult.status === 'completed') {
            clearInterval(pollInterval);
            const imageUrl = `${statusResult.result}?timestamp=${new Date().getTime()}`;
            setRenderedImage(imageUrl);
            setIsGenerated(true);
            setIsLoading(false); // Reset loading state
          }
        }, 1000); // Poll every second
      } else {
        // Handle any error from the server
        console.error('Error starting task', result);
      }
    } catch (error) {
      // Handle any network error
      console.error('Error making request to start task', error);
    }
  };
  
  function downloadImage() {
    if (renderedImage) { // Check if the renderedImage is available
      fetch(renderedImage)
        .then(response => response.blob())
        .then(blob => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'rendered_image.png'; // You can name the file as you like
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
        })
        .catch(error => {
          console.error('Error downloading image:', error);
          // Optionally, provide user feedback if download fails
        });
    } else {
      console.log('No rendered image to download');
      // Optionally, provide user feedback if no image is available
    }
  }
  
  


  return (
    <div className="container generate-container">
      <h1 className="title">
        Generate <span className="gradient-text">Your Design</span><br />
      </h1>

      <h3>
        <strong>Please choose a scene to place your object or</strong>{''}
        <Link to="/blank" className="underline-link">start a blank project</Link>
      </h3>

      <div className="scene-selection">
        {[
          { scene: 1, name: "Living Room", image: img1 },
          { scene: 2, name: "Bedroom", image: img2, comingSoon: true },
          { scene: 3, name: "Office Space", image: img3, comingSoon: true },
        ].map(({ scene, name, image, comingSoon }) => (
          <div className="scene" key={scene}>
            <div
              className={`scene-box ${selectedScene === scene ? "selected" : ""} ${
                comingSoon ? "disabled" : ""
              }`}
              onClick={() => !comingSoon && handleSceneSelection(scene)}
            >
              <img src={image} alt={`Scene ${scene}`} />
            </div>
            <div className="scene-text">
              Scene {scene}: {name}
              {comingSoon && <div className="coming-soon">Coming soon</div>}
            </div>
          </div>
        ))}
      </div>


        <div className="scene-selected">
            <span className="selected-label">Selected:</span>
            <span className="selected-scene">{selectedSceneName}</span>
        </div>

        <h4>What would you like to redesign?</h4>
        <div className="comment-container"> 
        <p className="comment-under-design">(You can specify multiple objects at once)</p>
      </div>
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
          <label htmlFor="prompt-input">Enter your prompt for {selectedItem}:</label>
          <form onSubmit={handlePromptSubmit}> {/* Add a form with an onSubmit handler */}
            <input
              className="prompt-input"
              type="text"
              id="prompt-input"
              value={promptText}
              onChange={(e) => setPromptText(e.target.value)}
              placeholder="Enter your prompt..."
            />
          </form>
        </div>
      )}

        <div className="selected-prompts">
          <h4>Selected Prompts:</h4>
          {Object.entries(prompts).map(([item, prompt], index) => (
            <div key={index} className="prompt-item">
              <span>{item}: </span>
              <span>{prompt}</span>
            </div>
          ))}
          <button className="generate-button" onClick={handleGenerateClick}>
            Generate
          </button>
        </div>


      <div className="columns-container">
        <div className="column">
          <h4 className="column-heading">Apply custom materials</h4>
          <div className="column-content">
            <div className="loading-container">
              <ReactLoading type={"balls"} color={"#333"} height={'100%'} width={'100%'} />
            </div>
            <div className="coming-soon2">Coming soon</div>
          </div>
        </div>
        <div className="column">
          <h4 className="column-heading">Modify shadows and lighting</h4>
          <div className="column-content">
            <div className="loading-container">
              <ReactLoading type={"cylon"} color={"#333"} height={'100%'} width={'100%'} />
            </div>
            <div className="coming-soon2">Coming soon</div>
          </div>
        </div>
      </div>


      {isLoading && (
        <div className="loading-section">
          <p>Don't worry, we are making your models. Here are some fun facts while you are waiting!</p>
          <div className="loading-container">
            <ReactLoading type={"cubes"} color={"#333"} height={'100%'} width={'100%'} />
          </div>    
          <div className="fun-fact-container">
            <p>{funFacts[funFactIndex]}</p>
          </div> 
        </div>
      )}
      {renderedImage && (
        <div className="generated-image-container">
          <img src={renderedImage} alt="Rendered Image" key={renderedImage} />
          <button className="download-button" onClick={downloadImage}>Download .png</button>
        </div>
      )}

      <div className="empty-space"></div>
    
    </div>
        
  );
};

export default Generate;