import React, { useState } from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import LocationMap from '../components/contact/LocationMap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <ContactHero />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />

          <div className="space-y-6">
            <ContactInfo />
            <LocationMap />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 