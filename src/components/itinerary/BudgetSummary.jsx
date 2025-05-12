import React from 'react';

const BudgetSummary = ({ totalCost, budget }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">Budget Summary</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="text-gray-600">Total Estimated Cost</p>
          <p className="text-2xl font-bold">${totalCost}</p>
        </div>
        <div>
          <p className="text-gray-600">Remaining Budget</p>
          <p className="text-2xl font-bold">${budget - totalCost}</p>
        </div>
      </div>
    </div>
  );
};

export default BudgetSummary; 