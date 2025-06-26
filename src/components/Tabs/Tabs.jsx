import React, { useState } from 'react';

function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  return (
    <div>
      <div className="flex gap-4 border-b mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={`pb-2 ${
              activeTab === tab.label ? 'border-b-2 border-blue-500 font-bold' : ''
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>{tabs.find((tab) => tab.label === activeTab).content}</div>
    </div>
  );
}

export default Tabs;
