
import React, { useState, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import CodeView from './migration/CodeView';
import ChatInterface from './migration/ChatInterface';
import { legacyCode, convertedCode, conversationFlow } from './migration/MigrationData';

const MigrationVisualizer = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [conversation, setConversation] = useState<Array<{type: 'user' | 'ai', message: string}>>([]);
  const [showLegacyCode, setShowLegacyCode] = useState(true);
  
  // Simulate the conversation process
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    
    if (isAnalyzing && currentStep < conversationFlow.length) {
      const currentMessage = conversationFlow[currentStep];
      
      timer = setTimeout(() => {
        setConversation(prev => [
          ...prev, 
          { 
            type: currentMessage.role === 'user' ? 'user' : 'ai', 
            message: currentMessage.text 
          }
        ]);
               
        // Switch to JSON view when migration is complete
        if (currentMessage.text.includes("Migration complete")) {
          setShowLegacyCode(false);
        }
        
        setCurrentStep(prev => prev + 1);
      }, currentMessage.role === 'user' ? 1000 : 2000);
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [currentStep, isAnalyzing, toast]);

  // Reset the demo
  const resetDemo = () => {
    setCurrentStep(0);
    setIsAnalyzing(false);
    setConversation([]);
    setShowLegacyCode(true);
  };

  // Start the demo
  const startAnalysis = () => {
    resetDemo();
    setIsAnalyzing(true);
  };
  
  // Handle sending a message
  const handleSendMessage = (message: string) => {
    if (!message.trim()) return;
    
    // If not already analyzing, start the conversation
    if (!isAnalyzing) {
      setConversation([{ type: 'user', message }]);
      setIsAnalyzing(true);
    } else {
      // If already in a conversation, just add the user message
      setConversation(prev => [
        ...prev,
        { type: 'user', message }
      ]);
    }
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-red-500 mr-1.5"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 mr-1.5"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-xs text-muted-foreground">Visual Studio Code</div>
      </div>
      
      {/* Split view: Code on left, Chat on right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[350px]">
        {/* Code Panel */}
        <CodeView 
          showLegacyCode={showLegacyCode}
          legacyCode={legacyCode}
          convertedCode={convertedCode}
          isAnalyzing={isAnalyzing}
        />
        
        {/* Chat Panel */}
        <ChatInterface 
          conversation={conversation}
          handleSendMessage={handleSendMessage}
          isConversationComplete={currentStep >= conversationFlow.length}
        />
      </div>
      
      <div className="mt-4 flex gap-2">
        {!isAnalyzing ? (
          <Button 
            onClick={startAnalysis}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium"
          >
            Start Migration Demo
          </Button>
        ) : (
          <Button 
            onClick={resetDemo}
            className="bg-muted hover:bg-muted/80 px-4 py-2 rounded-md text-sm font-medium"
          >
            Reset Demo
          </Button>
        )}
      </div>
      
      {currentStep >= conversationFlow.length && (
        <div className="mt-4 p-3 bg-green-500/10 text-green-700 text-sm rounded-md border border-green-200">
          <strong>Migration Successful:</strong> Extracted 2 components from legacy SSIS package. 
          SQL connections mapped with 100% confidence. Ready to deploy.
        </div>
      )}
    </div>
  );
};

export default MigrationVisualizer;
