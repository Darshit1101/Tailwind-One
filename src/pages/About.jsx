import React, { useContext } from 'react';
import Loader from '../components/Loader/Loader';
import Alert from '../components/Alert/Alert';
import Tabs from '../components/Tabs/Tabs';
import Button from '../components/Button/Button';
import { UserContext } from '../context/UserContext';

function About() {
  const tabData = [
    { label: 'Tab 1', content: <p>This is tab 1</p> },
    { label: 'Tab 2', content: <p>This is tab 2</p> }
  ];

    const { user, setUser } = useContext(UserContext);
//   const { state, dispatch } = useContext(UserContext);

  return (
    <div>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">About Page {user}</h1>
        <Button onClick={() => setUser('Darshit')} text="Change Name" />
        {/* <h1>Hello, {state.user}!</h1>
        <button onClick={() => dispatch({ type: 'SET_USER', payload: 'DKBOY' })}>Change Name</button> */}
        <Alert type="success" message="This is a success message." />
        <div className="my-6">
          <Tabs tabs={tabData} />
        </div>
        <Loader />
      </div>
    </div>
  );
}

export default About;
