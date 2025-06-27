import React, { useState, useContext } from 'react';
import Input from '../components/Input/Input';
import Card from '../components/Card/Card';
import Modal from '../components/Modal/Modal';
import Button from '../components/Button/Button';
import { UserContext } from '../context/UserContext';

function Home() {
  const [name, setName] = useState('');
  const [showModal, setShowModal] = useState(false);
  // const { user, setUser } = useContext(UserContext);
  const { state, dispatch } = useContext(UserContext);

  return (
    <div className="p-6">
      {/* <h1 className="text-2xl font-bold mb-4">Home Page {user}</h1>
      <Button onClick={() => setUser('Darshit')} text="Change Name" /> */}

      <h1>Hello, {state.user}!</h1>
      <div className="mb-4">
        <Button
          onClick={() => dispatch({ type: 'SET_USER', payload: 'DKBOY' })}
          text="Change Name"
        />
      </div>

      <Input
        label="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />

      <Card title="Preview">
        <p>Hello, {name || 'Stranger'}!</p>
        <Button text="Open Modal" onClick={() => setShowModal(true)} />
      </Card>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <p>This is a modal message.</p>
      </Modal>
    </div>
  );
}

export default Home;
