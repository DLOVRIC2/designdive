import React, { useState } from 'react';
import axios from 'axios';

const ObjectGenerator = () => {
  // State to hold the user's prompt
  const [prompt, setPrompt] = useState('');
  // State to hold the task ID
  const [taskId, setTaskId] = useState(null);
  // State to keep track if the task is running
  const [isRunning, setIsRunning] = useState(false);
  // State to store fun facts
  const [funFact, setFunFact] = useState('Here is a fun fact!');

  // Array of fun facts
  const funFacts = [
    'Fun Fact 1: 3D models can be used in video games.',
    'Fun Fact 2: The first 3D model was created in the 1960s.',
    // These are just dummy fun facts, we might want to keep these in a separate file.
    // I'll find something interesting
  ];

  // Function to call when the button is clicked
  const startTask = async () => {
    try {
      const response = await axios.post('/start_task/', { prompt });
      setTaskId(response.data.task_id);
      setIsRunning(true);
      checkStatus(response.data.task_id);
      rotateFunFacts();
    } catch (error) {
      console.error('An error occurred while starting the task:', error);
    }
  };

  // Function to check the status of the task
  const checkStatus = (task_id) => {
    setTimeout(async () => {
      try {
        const response = await axios.get(`/task_status/${task_id}`);
        if (response.data.status === 'completed') {
          setIsRunning(false);
          alert('Your object is ready to download!');
          // Handle file download or redirection to download page
        } else {
          // Continue checking the status
          checkStatus(task_id);
        }
      } catch (error) {
        console.error('An error occurred while checking the task status:', error);
      }
    }, 5000); // Check every 5 seconds
  };

  // Function to rotate fun facts while waiting
  const rotateFunFacts = () => {
    let index = 0;
    setInterval(() => {
      if (isRunning) {
        setFunFact(funFacts[index % funFacts.length]);
        index++;
      }
    }, 10000); // Change the fun fact every 10 seconds
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter object description..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={startTask} disabled={isRunning}>
        Generate Object
      </button>
      {isRunning && (
        <div>
          <p>Generating your object...</p>
          <p>{funFact}</p>
        </div>
      )}
    </div>
  );
};

export default ObjectGenerator;
