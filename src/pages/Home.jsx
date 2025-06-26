import React, { useState } from 'react';
import Input from '../components/Input/Input';
import Card from '../components/Card/Card';
import Modal from '../components/Modal/Modal';
import Button from '../components/Button/Button';

function Home() {
  const [name, setName] = useState('');
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>

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
