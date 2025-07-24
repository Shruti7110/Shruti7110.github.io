import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, Bot, User, Loader2 } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm Shruti's AI assistant. I'd be happy to tell you about her work, skills, and expertise. What would you like to know about her?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      // Use requestAnimationFrame to ensure DOM is updated
      requestAnimationFrame(() => {
        messagesEndRef.current?.scrollIntoView({ 
          behavior: "smooth",
          block: "end",
          inline: "nearest"
        });
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    // Prevent any form submission or page navigation
    event?.preventDefault?.();

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputValue, history: messages }),
      });

      if (response.ok) {
        const data = await response.json();
        const botMessage: Message = {
          id: Date.now() + 1,
          text: data.response,
          sender: 'bot',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
      } else {
        throw new Error('Failed to get response');
      }
    } catch (error) {
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: "Sorry, I'm having trouble connecting right now. Please try again later or contact Shruti directly at shruti.pawar0713@gmail.com",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      e.stopPropagation();
      handleSendMessage();
      
      // Prevent any page scrolling
      setTimeout(() => {
        e.target?.blur();
        (e.target as HTMLElement)?.focus();
      }, 0);
      
      return false;
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-[#0A0F24] via-[#1A1F3A] to-[#0A0F24]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4 text-[#18F0FF]">Chat with Shruti's AI Assistant</h2>
            <p className="text-lg text-[#E4E4E4]/80 max-w-2xl mx-auto">
              Ask about Shruti's experience, projects, and expertise
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-[#0A0F24]/60 border-[#18F0FF]/20 shadow-2xl backdrop-blur-sm">
              <CardContent className="p-0">
                {/* Chat Messages */}
                <div className="h-96 overflow-y-auto p-6 space-y-4 custom-scrollbar">
                  <AnimatePresence>
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`flex items-start gap-3 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            message.sender === 'user' 
                              ? 'bg-gradient-to-r from-[#FF157E] to-[#18F0FF]' 
                              : 'bg-gradient-to-r from-[#00FF9F] to-[#18F0FF]'
                          }`}>
                            {message.sender === 'user' ? <User size={16} /> : <Bot size={16} />}
                          </div>
                          <div className={`rounded-2xl p-4 ${
                            message.sender === 'user'
                              ? 'bg-gradient-to-r from-[#FF157E]/20 to-[#18F0FF]/20 border border-[#FF157E]/30'
                              : 'bg-[#2B2E3B]/50 border border-[#18F0FF]/20'
                          }`}>
                            <p className="text-[#E4E4E4] text-sm leading-relaxed">{message.text}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  {isLoading && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="flex items-start gap-3 max-w-[80%]">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-r from-[#00FF9F] to-[#18F0FF]">
                          <Bot size={16} />
                        </div>
                        <div className="rounded-2xl p-4 bg-[#2B2E3B]/50 border border-[#18F0FF]/20">
                          <div className="flex items-center gap-2">
                            <Loader2 className="w-4 h-4 animate-spin text-[#18F0FF]" />
                            <p className="text-[#E4E4E4]/70 text-sm">Thinking...</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="border-t border-[#E4E4E4]/10 p-6">
                  <form 
                    onSubmit={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleSendMessage();
                      return false;
                    }}
                    className="flex gap-3 items-end"
                  >
                    <div className="flex-1">
                      <Input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Ask me about Shruti's skills, projects, or experience..."
                        className="bg-[#2B2E3B]/30 border-[#E4E4E4]/20 text-[#E4E4E4] placeholder:text-[#E4E4E4]/50 focus:border-[#18F0FF]/50 focus:ring-[#18F0FF]/20"
                        disabled={isLoading}
                        autoComplete="off"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={!inputValue.trim() || isLoading}
                      className="bg-gradient-to-r from-[#FF157E] to-[#18F0FF] text-white hover:shadow-lg hover:shadow-[#FF157E]/25 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send size={16} />
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
}