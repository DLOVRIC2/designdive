import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
// import './Style/Body.css'

const Body = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleStartCustomizing = () => {
    navigate('/generate'); // Navigate to the "Generate" page
  };

  return (
    <div className="container">
      <div className="row text-center">
        <div className="col">
          <h1 className="title">
            Create <span className="gradient-text">Stunning Scenes</span><br />
            With <span className="gradient-text">Customized 3D Models</span>
          </h1>
          <h5 className='fw-normal mb-4 text-secondary'>
            Transform your living spaces with our AI-powered 3D Model Customizer. <br />
            Choose themes, add effects, and make your imagination come alive.
          </h5>
        </div>
      </div>
      <div className="row text-center mt-4">
        <div className="col-md-4">
          <h4>Choose Scene</h4>
          <p>Select from available scenes like the 'Living Room', 'Bedroom' or 'Office Space' and add any item you can imagine!.</p>
        </div>
        <div className="col-md-4">
          <h4>Add Effects</h4>
          <p>Apply cool effects, materials, and shadows to create stunning visuals.</p>
        </div>
        <div className="col-md-4">
          <h4>Download & Share</h4>
          <p>Download the images of your ideal scene and share them across social media platforms.</p>
        </div>
      </div>

      <div className="row text-center mt-4">
        <div className="col-md-4">
          <h4>3D Object Generation</h4>
          <p>Create unique 3D objects based on simple text descriptions and bring your vision to life.</p>
        </div>
        <div className="col-md-4">
          <h4>Blender Rendering</h4>
          <p>Utilize advanced rendering technology to give your designs a realistic and professional appearance.</p>
        </div>
        <div className="col-md-4">
          <h4>User Customization</h4>
          <p>Adjust, modify, and personalize your 3D models to create the perfect representation of your idea.</p>
        </div>
      </div>
      <div className="row text-center mt-5">
        <div className="col">
          <Button
            variant="contained"
            className='btn-grad text-light w-100 p-2 rounded'
            onClick={handleStartCustomizing}
          >
            Start Customizing
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Body;