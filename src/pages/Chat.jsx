import React, { useState, useEffect } from 'react';
import './journey_curator.css';
import ChatMessages from '../components/chat/ChatMessages';
import ChatInput from '../components/chat/ChatInput';
import FlightCard from '../components/chat/trip-summary/FlightCard';
import RestaurantCard from '../components/chat/trip-summary/RestaurantCard';
import AttractionCard from '../components/chat/trip-summary/AttractionCard';

// Message component for chat bubbles
const Message = ({ message, sender }) => {
  return (
    <div className={`message ${sender}`}>
      <div className="message-content">
        {message}
      </div>
    </div>
  );
};

// Typing indicator component
const TypingIndicator = () => {
  return (
    <div className="message bot">
      <div className="message-content typing-indicator">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

// Main App component
function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentStep, setCurrentStep] = useState('destination');
  const [tripSummary, setTripSummary] = useState(null);
  const [flights, setFlights] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [attractions, setAttractions] = useState([]);
  const [showSummary, setShowSummary] = useState(false);

  // Initialize the chat
  useEffect(() => {
    handleBotResponse("Hello! I can help you plan your trip. Please tell me your destination.");
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    
    // Add user message to chat
    const userMessage = inputText.trim();
    setMessages(prev => [...prev, { text: userMessage, sender: 'user' }]);
    setInputText('');
    setIsTyping(true);
    
    try {
      // Send user input to backend
      const response = await fetch('http://localhost:8000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_input: userMessage }),
      });
      
      const data = await response.json();
      
      // Update current step
      if (data.step) {
        setCurrentStep(data.step);
      }
      
      // Handle summary data if present
      if (data.trip_summary) {
        setTripSummary(data.trip_summary);
        setFlights(data.flights || []);
        setRestaurants(data.restaurants || []);
        setAttractions(data.tourist_attractions || []);
        setShowSummary(true);
      }

      // Only add bot message if it's not the summary (avoid duplicate)
      setTimeout(() => {
        setIsTyping(false);
        // If this is a summary response, don't add it as a chat bubble
        if (!data.trip_summary) {
          handleBotResponse(data.message);
        }
      }, 1000 + Math.random() * 1000);
      
    } catch (error) {
      console.error('Error sending message:', error);
      setIsTyping(false);
      handleBotResponse("Sorry, I encountered an error. Please try again.");
    }
  };
  
  // Add bot message to chat
  const handleBotResponse = (message) => {
    setMessages(prev => [...prev, { text: message, sender: 'bot' }]);
  };
  
  // Reset the conversation
  const handleReset = async () => {
    try {
      const response = await fetch('/reset', {
        method: 'POST',
      });
      
      const data = await response.json();
      
      // Reset all states
      setMessages([]);
      setCurrentStep('destination');
      setTripSummary(null);
      setFlights([]);
      setRestaurants([]);
      setAttractions([]);
      setShowSummary(false);
      
      // Add initial bot message
      setTimeout(() => {
        handleBotResponse(data.message);
      }, 500);
      
    } catch (error) {
      console.error('Error resetting conversation:', error);
      handleBotResponse("Sorry, I couldn't reset the conversation. Please refresh the page.");
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h1>Journey Curator</h1>
        <button onClick={handleReset} className="reset-button">
          <i className="fas fa-redo"></i> Reset
        </button>
      </div>

      <ChatMessages messages={messages} isTyping={isTyping} />

      {showSummary && (
        <div className="trip-summary">
          <h2>Trip Summary</h2>
          <div className="summary-cards">
            {flights.map((flight, index) => (
              <FlightCard key={index} flight={flight} />
            ))}
            {restaurants.map((restaurant, index) => (
              <RestaurantCard key={index} restaurant={restaurant} />
            ))}
            {attractions.map((attraction, index) => (
              <AttractionCard key={index} attraction={attraction} />
            ))}
          </div>
        </div>
      )}

      <ChatInput
        inputText={inputText}
        setInputText={setInputText}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default Chat;