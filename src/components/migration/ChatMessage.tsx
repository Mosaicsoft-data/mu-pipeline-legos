
import React from 'react';

interface ChatMessageProps {
  type: 'user' | 'ai';
  message: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ type, message }) => {
  return (
    <div className={`flex items-start gap-2`}>
      <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${
        type === 'ai' ? 'bg-primary/20 text-primary' : 'bg-muted'
      }`}>
        {type === 'ai' ? 'AI' : 'You'}
      </div>
      <div className={`text-sm p-2 rounded-md ${
        type === 'ai' 
          ? 'bg-primary/10 text-foreground' 
          : 'bg-muted text-muted-foreground'
      }`}>
        {message}
      </div>
    </div>
  );
};

export default ChatMessage;
