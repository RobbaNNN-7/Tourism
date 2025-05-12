import React from 'react';
import { motion } from 'framer-motion';
import { Clock, DollarSign, Trash2 } from 'lucide-react';

const DestinationCard = ({ destination, onRemove }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center justify-between p-4 border rounded-lg"
    >
      <div className="flex-1">
        <h3 className="font-medium">{destination.name}</h3>
        <div className="flex items-center text-sm text-gray-500 mt-1">
          <Clock className="w-4 h-4 mr-1" />
          <span>{destination.days} days</span>
          <DollarSign className="w-4 h-4 ml-4 mr-1" />
          <span>${destination.estimatedCost}</span>
        </div>
      </div>
      <button
        onClick={onRemove}
        className="text-red-500 hover:text-red-700"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </motion.div>
  );
};

export default DestinationCard; 