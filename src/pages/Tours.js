import React, { useState } from 'react';
import TourHero from '../components/tours/TourHero';
import CategoryFilter from '../components/tours/CategoryFilter';
import TourCard from '../components/tours/TourCard';

const Tours = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Tours' },
    { id: 'adventure', label: 'Adventure' },
    { id: 'cultural', label: 'Cultural' },
    { id: 'historical', label: 'Historical' },
    { id: 'nature', label: 'Nature' }
  ];

  const tours = [
    {
      id: 1,
      name: 'Northern Pakistan Adventure',
      category: 'adventure',
      duration: '10 days',
      groupSize: '4-12 people',
      price: '$1200',
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5',
      description: 'Explore the stunning landscapes of Northern Pakistan including Hunza Valley, Nanga Parbat, and more.',
      highlights: [
        'Hunza Valley',
        'Nanga Parbat Base Camp',
        'Attabad Lake',
        'Khunjerab Pass'
      ]
    },
    {
      id: 2,
      name: 'Cultural Heritage Tour',
      category: 'cultural',
      duration: '7 days',
      groupSize: '6-15 people',
      price: '$800',
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5',
      description: 'Discover the rich cultural heritage of Pakistan through its historical sites and local traditions.',
      highlights: [
        'Lahore Fort',
        'Badshahi Mosque',
        'Shalimar Gardens',
        'Wazir Khan Mosque'
      ]
    },
    {
      id: 3,
      name: 'Mountain Expedition',
      category: 'adventure',
      duration: '14 days',
      groupSize: '4-8 people',
      price: '$2000',
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5',
      description: 'Challenge yourself with this high-altitude mountain expedition in the Karakoram range.',
      highlights: [
        'K2 Base Camp',
        'Concordia',
        'Baltoro Glacier',
        'Gasherbrum Peaks'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <TourHero />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours
            .filter(tour => selectedCategory === 'all' || tour.category === selectedCategory)
            .map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Tours; 