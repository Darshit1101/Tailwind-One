import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button className='px-4 py-2 bg-green-600 text-white rounded hover:bg-blue-700'>
        Click Me
      </button>
    </>
  );
}

export default App;
