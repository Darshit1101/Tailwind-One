import React from 'react';
import Button from '../components/Button/Button';

function Home() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <Button text="Click Me" onClick={handleClick} />
    </div>
  );
}

export default Home;
