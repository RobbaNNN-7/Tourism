import React, { useRef, useEffect } from 'react';
import Message from './Message';
import TypingIndicator from './TypingIndicator';

const ChatMessages = ({ messages, isTyping }) => {
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  return (
    <div className="chat-messages">
      {messages.map((msg, index) => (
        <Message key={index} message={msg.text} sender={msg.sender} />
      ))}
      {isTyping && <TypingIndicator />}
      <div ref={chatEndRef} />
    </div>
  );
};

export default ChatMessages; 