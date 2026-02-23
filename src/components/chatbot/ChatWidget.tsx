'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { MessageCircle, X, Send, Activity } from 'lucide-react';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  isError?: boolean;
}


export default function ChatWidget() {
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const tooltipTimeoutRef = useRef<NodeJS.Timeout>();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Tooltip animation on page load
  useEffect(() => {
    if (!isOpen) {
      setShowTooltip(true);
      tooltipTimeoutRef.current = setTimeout(() => {
        setShowTooltip(false);
      }, 6000);
    }

    return () => {
      if (tooltipTimeoutRef.current) {
        clearTimeout(tooltipTimeoutRef.current);
      }
    };
  }, [isOpen]);

  const handleSendMessage = async (messageText: string) => {
    if (!messageText.trim()) return;

    // Hide quick replies after first message
    if (showQuickReplies) {
      setShowQuickReplies(false);
    }

    const userMessage: ChatMessage = {
      role: 'user',
      content: messageText.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setError(null);
    setIsLoading(true);

    try {
      // Send last 4 real messages as history — exclude error messages
      const realMessages = messages.filter((m) => !m.isError);
      const chatHistory = realMessages.slice(-3).concat(userMessage);

      const apiUrl =
        process.env.NEXT_PUBLIC_CHAT_API_URL ||
        'https://wzis-chatbot-api.vercel.app/api/chat';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: messageText.trim(),
          history: chatHistory,
        }),
      });

      if (!response.ok) {
        const status = response.status;
        if (status === 429) {
          throw new Error('busy');
        } else if (status === 400) {
          const errData = await response.json().catch(() => null);
          throw new Error(errData?.error || 'invalid');
        }
        throw new Error('server');
      }

      const data = await response.json();

      const assistantMessage: ChatMessage = {
        role: 'assistant',
        content: data.reply || data.response || data.message || "Sorry, I didn't get a response. Could you try asking again?",
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      const code = err instanceof Error ? err.message : 'unknown';

      let friendlyMessage: string;
      if (code === 'busy') {
        friendlyMessage = "I'm getting a lot of questions right now! Give me a few seconds and try again.";
      } else if (code.includes('1000 characters')) {
        friendlyMessage = "That message was a bit long for me. Could you shorten it a little?";
      } else if (code === 'invalid') {
        friendlyMessage = "I didn't quite catch that. Could you rephrase your question?";
      } else if (code === 'Failed to fetch' || code === 'NetworkError when attempting to fetch resource.') {
        friendlyMessage = "It looks like I'm having trouble connecting. Check your internet and try again!";
      } else {
        friendlyMessage = "Oops, something went wrong on my end. Try again in a moment!";
      }

      setError(null);

      const errorBotMessage: ChatMessage = {
        role: 'assistant',
        content: friendlyMessage,
        isError: true,
      };

      setMessages((prev) => [...prev, errorBotMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickReplies = [
    { label: 'How do I apply?', key: 'apply' },
    { label: 'Tuition & fees', key: 'tuition' },
    { label: 'Campus life', key: 'campus' },
    { label: 'Careers', key: 'careers' },
  ];

  return (
    <>
      {/* Tooltip */}
      {showTooltip && !isOpen && (
        <div
          className="fixed bottom-24 right-7 animate-fade-in-out"
          style={{
            zIndex: 9998,
            animation: 'fadeInOut 6s ease-in-out forwards',
          }}
        >
          <style>{`
            @keyframes fadeInOut {
              0%, 100% { opacity: 0; }
              10%, 90% { opacity: 1; }
            }
          `}</style>
          <div className="bg-white rounded-lg shadow-lg px-4 py-2 text-sm font-medium text-gray-900 whitespace-nowrap">
            Ask me anything about WZIS!
            <div className="absolute bottom-0 right-4 w-2 h-2 bg-white transform rotate-45 translate-y-1"></div>
          </div>
        </div>
      )}

      {/* FAB Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-7 right-7 w-16 h-16 rounded-full bg-gradient-to-br from-[#1a3a52] to-[#0f2744] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:rotate-12 flex items-center justify-center group"
        style={{ zIndex: 9999 }}
        aria-label="Open chat"
      >
        {/* Pulse animation behind FAB */}
        <div className="absolute inset-0 rounded-full bg-[#1a3a52] opacity-20 animate-pulse"></div>
        <MessageCircle className="w-7 h-7 text-white relative z-10" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-32 right-7 w-[400px] h-[560px] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-bounce-in"
          style={{
            zIndex: 9999,
            animation: 'bounceIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
          }}
        >
          <style>{`
            @keyframes bounceIn {
              0% {
                opacity: 0;
                transform: scale(0.8) translateY(20px);
              }
              100% {
                opacity: 1;
                transform: scale(1) translateY(0);
              }
            }
          `}</style>

          {/* Header */}
          <div className="bg-gradient-to-r from-[#1a3a52] via-[#2d5f7e] to-[#FF6B6B] text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <h2 className="font-bold text-base">BoBae Assistant</h2>
                <div className="flex items-center gap-1 text-xs opacity-90">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <span>Online — EN / 한국어</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white hover:bg-opacity-20 p-1 rounded-full transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-gradient-to-b from-amber-50 to-white">
            {messages.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full text-gray-500 text-center">
                <MessageCircle className="w-12 h-12 mb-2 opacity-30" />
                <p className="text-sm">Start a conversation!</p>
              </div>
            )}

            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={
                  msg.role === 'assistant'
                    ? 'flex justify-start mb-4'
                    : 'flex justify-end mb-4'
                }
              >
                <div
                  className={
                    msg.role === 'assistant'
                      ? 'bg-white rounded-2xl px-4 py-2 max-w-xs shadow-md text-gray-900 text-sm'
                      : 'bg-gradient-to-br from-[#1a3a52] to-[#0f2744] text-white rounded-2xl px-4 py-2 max-w-xs text-sm'
                  }
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start mb-4">
                <div className="bg-white rounded-2xl px-4 py-3 max-w-xs shadow-md">
                  <div className="flex gap-2 items-center">
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0s' }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}


            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {showQuickReplies && messages.length === 0 && (
            <div className="px-4 py-3 border-t border-gray-100 flex flex-wrap gap-2">
              {quickReplies.map((reply) => (
                <button
                  key={reply.key}
                  onClick={() => handleSendMessage(reply.label)}
                  disabled={isLoading}
                  className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-full transition-colors disabled:opacity-50"
                >
                  {reply.label}
                </button>
              ))}
            </div>
          )}

          {/* Input Row */}
          <div className="px-4 py-3 border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter' && !isLoading) {
                  handleSendMessage(inputValue);
                }
              }}
              placeholder="Type your question..."
              disabled={isLoading}
              className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a3a52] disabled:opacity-50"
            />
            <button
              onClick={() => handleSendMessage(inputValue)}
              disabled={isLoading || !inputValue.trim()}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1a3a52] to-[#0f2744] text-white flex items-center justify-center hover:shadow-lg transition-all disabled:opacity-50"
              aria-label="Send message"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
