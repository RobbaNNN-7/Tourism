import React from 'react';

const TestimonialsSection = ({ testimonials }) => (
  <section className="py-16 md:py-24 bg-gray-50">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-16 fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Traveler Stories</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Hear from travelers who have experienced the beauty and hospitality of Pakistan
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div 
            key={testimonial.id} 
            className="testimonial-card bg-white rounded-xl p-6 shadow-lg relative fade-in"
          >
            <div className="flex items-center mb-6">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name} 
                className="w-14 h-14 rounded-full object-cover"
              />
              <div className="ml-4">
                <h3 className="font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-gray-600">{testimonial.location}</p>
              </div>
            </div>
            <div className="quote-marks absolute top-6 right-6 text-blue-100 text-6xl font-serif">❝</div>
            <p className="text-gray-700 relative z-10 italic">{testimonial.text}</p>
            <div className="mt-4 flex">
              <span className="text-yellow-500">★★★★★</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection; 