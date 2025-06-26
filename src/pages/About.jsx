import React from 'react';
import Button from '../components/Button/Button';

function About() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">About Page</h1>
      <Button text="Go Back" onClick={() => history.back()} />
    </div>
  );
}

export default About;
