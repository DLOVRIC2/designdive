import React from 'react';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { ArrowRight } from 'react-feather';

const Body = () => {
  return (
    <div className="container">
      <div className="row text-center">
        <div className="col">
          <h1 className="title">
            Turn <span className="gradient-text">One video</span><br />
            Into<span className="gradient-text"> 5 Viral Clips</span>
          </h1>
          <h5 className='fw-normal mb-4 text-secondary'>
            Boost your visibility with our AI-powered Viral Content Generator <br />
            across all platforms - YouTube, TikTok, Facebook, and beyond.
          </h5>
        </div>
      </div>
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6 col-lg-6 mb-3 mb-md-0">
          <TextField id="link-field" label="Paste your link here" fullWidth variant="outlined" />
        </div>
        <div className="col-md-4 col-lg-2 mt-3 mt-md-0">
          <Button variant="outlined" className='btn-grad text-light w-100 p-2 rounded'>
            Make clip <ArrowRight/>
          </Button>
        </div>
      </div>
      <div className='row justify-content-center mt-3'>
        <div className='col-md-4 text-center'>
          <Button variant="outlined" className='btn-grad text-light w-10 rounded w-lg-50'>
            Load Demo
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Body;
