import React, { useState, useEffect, useRef } from 'react';
import { ChatMessage } from '../types';
import { KNOWLEDGE, getElevatorAnswer } from '../constants/status';

const SUGGESTIONS = [
  { label: 'Testing internally?', query: 'Is Project 2026 testing internally?' },
  { label: 'Finalizing?', query: 'Is testing being finalized?' },
  { label: 'Release date?', query: 'When is the release?' },
  { label: 'About Elevator', query: 'Tell me about Elevator' },
];

export const ElevatorChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (messages.length > 0) {
      scrollToBottom();
    }
  }, [messages]);

  const handleOpenChat = () => {
    setIsOpen(true);
    if (messages.length === 0) {
      setMessages([
        {
          id: 'msg-initial',
          text: KNOWLEDGE.greeting,
          sender: 'bot',
        },
      ]);
    }
    setTimeout(() => {
      inputRef.current?.focus();
    }, 50);
  };

  const handleCloseChat = () => {
    setIsOpen(false);
  };

  const sendQuestion = (question: string) => {
    const trimmed = question.trim();
    if (!trimmed) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      text: trimmed,
      sender: 'user',
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');

    setTimeout(() => {
      const botResponse = getElevatorAnswer(trimmed);
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          text: botResponse,
          sender: 'bot',
        },
      ]);
    }, 350);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendQuestion(inputValue);
  };

  return (
    <div className="chatbot" id="chatbot">
      {isOpen && (
        <div className="chat-panel" id="chat-panel">
          <div className="chat-head">
            <div>
              <p className="chat-title">Elevator</p>
              <p className="chat-sub">Keyless · unlimited · always free</p>
            </div>
            <button
              className="chat-close"
              id="chat-close"
              onClick={handleCloseChat}
              aria-label="Close chat"
            >
              ×
            </button>
          </div>

          <div className="chat-messages" id="chat-messages" aria-live="polite">
            {messages.map((msg) => (
              <div key={msg.id} className={`msg ${msg.sender}`}>
                <div className="bubble">{msg.text}</div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-suggestions" id="chat-suggestions">
            {SUGGESTIONS.map((item) => (
              <button
                key={item.label}
                type="button"
                data-q={item.query}
                onClick={() => sendQuestion(item.query)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <form className="chat-form" id="chat-form" onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              type="text"
              id="chat-input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about Project 2026…"
              autoComplete="off"
              aria-label="Message Elevator"
            />
            <button type="submit" aria-label="Send">
              Send
            </button>
          </form>
        </div>
      )}

      <button
        className={`chat-fab ${isOpen ? 'hidden' : ''}`}
        id="chat-fab"
        onClick={handleOpenChat}
        aria-label="Open the Elevator chat"
      >
        <span className="fab-icon" role="img" aria-label="Speech bubble">💬</span>
        <span className="fab-label">Elevator</span>
      </button>
    </div>
  );
};
