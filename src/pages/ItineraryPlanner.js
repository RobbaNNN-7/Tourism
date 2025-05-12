import React, { useState } from 'react';
import TripDetails from '../components/itinerary/TripDetails';
import DestinationsList from '../components/itinerary/DestinationsList';
import BudgetSummary from '../components/itinerary/BudgetSummary';

const ItineraryPlanner = () => {
  const [destinations, setDestinations] = useState([]);
  const [budget, setBudget] = useState(0);
  const [selectedDate, setSelectedDate] = useState('');

  const addDestination = (destination) => {
    setDestinations([...destinations, destination]);
  };

  const removeDestination = (index) => {
    setDestinations(destinations.filter((_, i) => i !== index));
  };

  const calculateTotalCost = () => {
    return destinations.reduce((total, dest) => total + dest.estimatedCost, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Plan Your Trip</h1>

        <TripDetails
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          budget={budget}
          setBudget={setBudget}
        />

        <DestinationsList
          destinations={destinations}
          onAdd={addDestination}
          onRemove={removeDestination}
        />

        <BudgetSummary
          totalCost={calculateTotalCost()}
          budget={budget}
        />
      </div>
    </div>
  );
};

export default ItineraryPlanner; 