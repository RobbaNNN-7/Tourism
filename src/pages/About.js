import React from 'react';
import HeroSection from '../components/about/HeroSection';
import StorySection from '../components/about/StorySection';
import MissionSection from '../components/about/MissionSection';
import TeamSection from '../components/about/TeamSection';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <HeroSection />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <StorySection />
          <MissionSection />
        </div>
        <TeamSection />
      </div>
    </div>
  );
};

export default About; 