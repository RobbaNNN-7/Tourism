import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import DestinationHero from '../components/destination/DestinationHero';
import DestinationTabs from '../components/destination/DestinationTabs';
import OverviewTab from '../components/destination/OverviewTab';
import HighlightsTab from '../components/destination/HighlightsTab';
import ActivitiesTab from '../components/destination/ActivitiesTab';
import NearbyTab from '../components/destination/NearbyTab';

const DetailedDestination = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  // This would typically come from an API or data store
  const destination = {
    id: id,
    name: 'Lahore Fort',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5',
    description: 'A UNESCO World Heritage Site with rich Mughal history',
    location: 'Lahore, Punjab',
    bestTimeToVisit: 'October to March',
    highlights: [
      'Sheesh Mahal',
      'Alamgiri Gate',
      'Naulakha Pavilion',
      'Moti Masjid'
    ],
    activities: [
      'Historical Tour',
      'Photography',
      'Cultural Experience'
    ],
    nearbyAttractions: [
      'Badshahi Mosque',
      'Wazir Khan Mosque',
      'Lahore Museum'
    ]
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <OverviewTab
            description={destination.description}
            location={destination.location}
            bestTimeToVisit={destination.bestTimeToVisit}
          />
        );
      case 'highlights':
        return <HighlightsTab highlights={destination.highlights} />;
      case 'activities':
        return <ActivitiesTab activities={destination.activities} />;
      case 'nearby':
        return <NearbyTab nearbyAttractions={destination.nearbyAttractions} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <DestinationHero name={destination.name} image={destination.image} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <DestinationTabs activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default DetailedDestination; 