
import React, { useState } from 'react';
import { MessageSquare, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ChatMessage from './ChatMessage';
import { ScrollArea } from "@/components/ui/scroll-area";

interface ChatInterfaceProps {
  conversation: Array<{type: 'user' | 'ai', message: string}>;
  handleSendMessage: (message: string) => void;
  isConversationComplete: boolean;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ 
  conversation, 
  handleSendMessage,
  isConversationComplete
}) => {
  const [userPrompt, setUserPrompt] = useState('');

  const onSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (userPrompt.trim()) {
      handleSendMessage(userPrompt);
      setUserPrompt('');
    }
  };

  return (
    <div className="flex flex-col h-full border rounded-md">
      <div className="p-2 border-b flex items-center">
        <MessageSquare className="h-4 w-4 mr-2" />
        <span className="text-sm font-medium">Migration Assistant</span>
      </div>
      
      <ScrollArea className="flex-1 p-3">
        <div className="space-y-4">
          {conversation.map((msg, idx) => (
            <ChatMessage key={idx} type={msg.type} message={msg.message} />
          ))}
        </div>
      </ScrollArea>
      
      <div className="p-3 border-t">
        <form onSubmit={onSendMessage} className="flex gap-2">
          <Input 
            value={userPrompt}
            onChange={(e) => setUserPrompt(e.target.value)}
            placeholder="Ask about migrating this pipeline..."
            className="flex-1"
            disabled={isConversationComplete}
          />
          <Button 
            type="submit" 
            size="sm"
            disabled={!userPrompt.trim() || isConversationComplete}
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChatInterface;
