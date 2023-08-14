import React from 'react';
import { Link } from 'react-router-dom';
import './Style/Blank.css'
import img from '../images/truestory.jpg';

function Blank() {
    return (
      <div className="blank-container">
        <h1>Welcome to the Blank Project Page</h1>
        <p>Here, you can explore a wide range of creative opportunities:</p>
          Start a new scene from scratch. Design entire rooms from prompts.
          Create any 3D model and download it in any format required for a 3D modeling software like Blender.
        <div className="image-container">
          <img src={img} alt="LOL" />
        </div>
        <p className="red-message">Developers are still recovering from a hackathon. Check back here in a month...</p>
      </div>
    );
  }
  
  export default Blank;