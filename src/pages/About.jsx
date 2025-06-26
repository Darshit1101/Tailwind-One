import React from 'react';
import Loader from '../components/Loader/Loader';
import Alert from '../components/Alert/Alert';
import Tabs from '../components/Tabs/Tabs';

function About() {
  const tabData = [
    { label: 'Tab 1', content: <p>This is tab 1</p> },
    { label: 'Tab 2', content: <p>This is tab 2</p> },
  ];

  return (
    <div>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">About Page</h1>
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
