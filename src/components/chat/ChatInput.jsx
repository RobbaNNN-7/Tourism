import React from 'react';

const ChatInput = ({ inputText, setInputText, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="chat-input-form">
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Type your message..."
        className="chat-input"
      />
      <button type="submit" className="send-button">
        <i className="fas fa-paper-plane"></i>
      </button>
    </form>
  );
};

export default ChatInput; 