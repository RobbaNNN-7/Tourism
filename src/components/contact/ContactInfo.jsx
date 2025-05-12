import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="space-y-6"
    >
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Contact Information</h2>
        <div className="space-y-4">
          <div className="flex items-start">
            <Mail className="w-5 h-5 text-blue-500 mt-1 mr-3" />
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Email</h3>
              <p className="text-gray-600 dark:text-gray-300">info@pakistantourism.com</p>
            </div>
          </div>
          <div className="flex items-start">
            <Phone className="w-5 h-5 text-blue-500 mt-1 mr-3" />
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Phone</h3>
              <p className="text-gray-600 dark:text-gray-300">+92 300 1234567</p>
            </div>
          </div>
          <div className="flex items-start">
            <MapPin className="w-5 h-5 text-blue-500 mt-1 mr-3" />
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Address</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Tourism House, Islamabad, Pakistan
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo; 