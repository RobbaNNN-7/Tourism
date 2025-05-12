import React from 'react';

const ExperiencesSection = () => (
  <section className="py-16 md:py-24 bg-blue-600 text-white experiences-section">
    <div className="container mx-auto px-4 md:px-6">
      <div className="mb-12 text-center fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Unforgettable Experiences</h2>
        <p className="max-w-3xl mx-auto opacity-90">
          Immerse yourself in authentic Pakistani culture and create memories that will last a lifetime
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="experience-card fade-in">
          <div className="rounded-xl overflow-hidden shadow-lg h-full bg-white bg-opacity-10 backdrop-blur-sm p-6 border border-white border-opacity-20">
            <div className="icon-wrapper mb-6">
              <img src="https://img.icons8.com/fluency/96/mountain.png" alt="Mountain trekking" className="h-16 w-16" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Mountain Trekking</h3>
            <p className="opacity-90 mb-5">
              Pakistan is home to five of the world's fourteen 8000+ meter peaks, including K2, the second highest mountain in the world.
            </p>
          </div>
        </div>
        <div className="experience-card fade-in">
          <div className="rounded-xl overflow-hidden shadow-lg h-full bg-white bg-opacity-10 backdrop-blur-sm p-6 border border-white border-opacity-20">
            <div className="icon-wrapper mb-6">
              <img src="https://img.icons8.com/fluency/96/dining-room.png" alt="Culinary tours" className="h-16 w-16" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Culinary Tours</h3>
            <p className="opacity-90 mb-5">
              Experience the rich flavors of authentic Pakistani cuisine from street food to royal dishes that reflect centuries of culinary art.
            </p>
          </div>
        </div>
        <div className="experience-card fade-in">
          <div className="rounded-xl overflow-hidden shadow-lg h-full bg-white bg-opacity-10 backdrop-blur-sm p-6 border border-white border-opacity-20">
            <div className="icon-wrapper mb-6">
              <img src="https://img.icons8.com/fluency/96/dancing-party.png" alt="Cultural festivals" className="h-16 w-16" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Cultural Festivals</h3>
            <p className="opacity-90 mb-5">
              Join the vibrant celebrations of Pakistan's diverse cultural festivals throughout the year, from Basant to the Shandur Polo Festival.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ExperiencesSection; 