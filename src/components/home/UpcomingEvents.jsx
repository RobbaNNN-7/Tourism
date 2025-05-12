import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';

const UpcomingEvents = ({ upcomingEvents }) => (
  <section className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-4 md:px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-3 fade-in">Upcoming Events</h2>
      <p className="text-gray-600 mb-12 max-w-2xl fade-in">
        Plan your visit around these special cultural events and festivals
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {upcomingEvents.map((event, index) => (
          <div 
            key={index} 
            className="event-card rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer fade-in"
          >
            <div className="h-48 overflow-hidden relative">
              <img 
                src={event.image} 
                alt={event.name} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs uppercase font-bold py-1 px-3 rounded-full">
                Upcoming
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-1">{event.name}</h3>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin size={16} className="mr-1" />
                <span className="text-sm">{event.location}</span>
              </div>
              <p className="text-blue-600 font-medium mb-4">{event.date}</p>
              <Link 
                to={`/chat`} 
                className="text-blue-600 hover:text-blue-800 font-medium flex items-center text-sm"
              >
                Learn more
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default UpcomingEvents; 