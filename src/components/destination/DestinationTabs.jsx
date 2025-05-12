import React from 'react';

const DestinationTabs = ({ activeTab, onTabChange }) => {
  const tabs = ['overview', 'highlights', 'activities', 'nearby'];

  return (
    <div className="flex space-x-4 mb-8">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
            ${activeTab === tab
              ? 'bg-blue-500 text-white'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default DestinationTabs; 