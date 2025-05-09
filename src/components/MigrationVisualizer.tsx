
import React, { useState, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";
import { MessageSquare, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const MigrationVisualizer = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [userPrompt, setUserPrompt] = useState('');
  const [conversation, setConversation] = useState<Array<{type: 'user' | 'ai', message: string}>>([]);
  const [showLegacyCode, setShowLegacyCode] = useState(true);
  
  // Legacy SSIS package example (simplified)
  const legacyCode = `<DTS:Executable xmlns:DTS="www.microsoft.com/SqlServer/Dts"
  DTS:ExecutableType="SSIS.Package.3">
  <DTS:Property DTS:Name="Name">customer_pipeline.dtsx</DTS:Property>
  <DTS:ConnectionManager>
    <DTS:Property DTS:Name="DelayValidation">false</DTS:Property>
    <DTS:Property DTS:Name="ObjectName">SQL Server Connection</DTS:Property>
    <DTS:Property DTS:Name="DTSID">{6F7B4FD5-5AE6-4F99-A4DB-CB38CF270B7C}</DTS:Property>
    <DTS:Property DTS:Name="Description">Customer Database</DTS:Property>
    <DTS:Property DTS:Name="CreationName">OLEDB</DTS:Property>
    <DTS:ObjectData>
      <DTS:ConnectionManager>
        <DTS:Property DTS:Name="ServerName">SQLSERVER01</DTS:Property>
        <DTS:Property DTS:Name="DatabaseName">CustomerDB</DTS:Property>
        <DTS:Property DTS:Name="AccessMode">0</DTS:Property>
      </DTS:ConnectionManager>
    </DTS:ObjectData>
  </DTS:ConnectionManager>
  <DTS:Executable DTS:ExecutableType="Microsoft.Pipeline">
    <DTS:Property DTS:Name="ObjectName">Data Flow Task</DTS:Property>
    <DTS:Property DTS:Name="DTSID">{1E6211D2-7A44-4351-9CF4-8933F72E73B5}</DTS:Property>
    <DTS:Property DTS:Name="Description">Extract Customer Data</DTS:Property>
    <!-- Source component -->
    <component name="CustomerSource" 
              componentClassID="{2C0A8BE5-1EDC-4353-A0EF-B778599C65A0}"
              description="OLE DB Source" startId="1">
      <properties>
        <property name="SqlCommand" dataType="System.String">
          SELECT * FROM Customers WHERE Region = 'West'
        </property>
      </properties>
    </component>
    <!-- Derived Column component -->
    <component name="AddFullName" 
              componentClassID="{9CF90BF0-9957-4E8A-9DE2-4E1B465C9D76}"
              description="Derives values by applying expressions">
      <properties>
        <property name="Expression" dataType="System.String">
          [FirstName] + " " + [LastName]
        </property>
        <property name="FriendlyExpression" dataType="System.String">
          FirstName + " " + LastName as FullName
        </property>
      </properties>
    </component>
  </DTS:Executable>
</DTS:Executable>`;

  // Converted mu-pipelines format
  const convertedCode = `{
  "pipeline": {
    "name": "customer_pipeline",
    "source": {
      "type": "sql",
      "connection": {
        "server": "SQLSERVER01",
        "database": "CustomerDB",
        "authentication": "windows"
      },
      "query": "SELECT * FROM Customers WHERE Region = 'West'"
    },
    "transforms": [
      {
        "type": "DerivedColumn",
        "columns": [
          {
            "name": "FullName",
            "expression": "concat(FirstName, ' ', LastName)"
          }
        ]
      }
    ],
    "destination": {
      "type": "OutputTable",
      "table": "CustomerStaging",
      "create_if_not_exists": true
    }
  }
}`;

  // Predefined conversation flow
  const conversationFlow = [
    { role: 'ai', text: "I see you have a legacy SSIS package. How can I help with this pipeline?" },
    { role: 'user', text: "Can you migrate this SSIS package to Mu-Pipeline format?" },
    { role: 'ai', text: "I'll help you migrate this SSIS package. Let me analyze the structure first." },
    { role: 'ai', text: "I've identified the connection settings to SQL Server and the data flow components." },
    { role: 'ai', text: "There's an OLE DB source that queries customers from the West region." },
    { role: 'ai', text: "And I see a derived column that creates a FullName by concatenating FirstName and LastName." },
    { role: 'ai', text: "Generating the equivalent Mu-Pipeline configuration..." },
    { role: 'ai', text: "Migration complete! I've converted your SSIS package to a modern Mu-Pipeline JSON format. Would you like me to explain the key differences?" },
    { role: 'user', text: "Yes, please explain the main improvements." },
    { role: 'ai', text: "The new format offers several advantages:\n\n1. Human-readable JSON instead of verbose XML\n2. Simplified connection management\n3. Clear transform pipeline with explicit data types\n4. Built-in destination configuration\n5. No GUIDs or complex component references\n\nIt's also version-control friendly and can be deployed via CI/CD pipelines." }
  ];
  
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
        
        // Show toast notifications for key AI messages
        if (currentMessage.role === 'ai' && 
           (currentMessage.text.includes("analyze") || 
            currentMessage.text.includes("identified") ||
            currentMessage.text.includes("Generating") ||
            currentMessage.text.includes("Migration complete"))) {
          toast({
            title: "Migration Assistant",
            description: currentMessage.text,
          });
        }
        
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
    setUserPrompt('');
  };

  // Start the demo
  const startAnalysis = () => {
    resetDemo();
    setIsAnalyzing(true);
  };
  
  // Handle sending a message
  const handleSendMessage = () => {
    if (!userPrompt.trim()) return;
    
    // If not already analyzing, start the conversation
    if (!isAnalyzing) {
      setConversation([{ type: 'user', message: userPrompt }]);
      setUserPrompt('');
      setIsAnalyzing(true);
    } else {
      // If already in a conversation, just add the user message
      setConversation(prev => [
        ...prev,
        { type: 'user', message: userPrompt }
      ]);
      setUserPrompt('');
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
        <div className="bg-background rounded-md p-4 font-mono text-xs overflow-auto">
          <div className="flex items-center text-muted-foreground mb-2">
            <span className="text-xs uppercase font-semibold">
              {showLegacyCode ? "customer_pipeline.dtsx" : "customer_pipeline.json"}
            </span>
            {isAnalyzing && showLegacyCode && (
              <span className="ml-auto text-xs bg-blue-500/10 text-blue-500 px-2 py-0.5 rounded">
                Analyzing...
              </span>
            )}
            {!showLegacyCode && (
              <span className="ml-auto text-xs bg-green-500/10 text-green-500 px-2 py-0.5 rounded">
                Converted
              </span>
            )}
          </div>
          
          <pre className="whitespace-pre-wrap overflow-auto">
            {showLegacyCode ? legacyCode : convertedCode}
          </pre>
        </div>
        
        {/* Chat Panel */}
        <div className="flex flex-col h-full border rounded-md">
          <div className="p-2 border-b flex items-center">
            <MessageSquare className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Migration Assistant</span>
          </div>
          
          <div className="flex-1 overflow-y-auto p-3 space-y-4">
            {conversation.map((msg, idx) => (
              <div key={idx} className={`flex items-start gap-2`}>
                <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${
                  msg.type === 'ai' ? 'bg-primary/20 text-primary' : 'bg-muted'
                }`}>
                  {msg.type === 'ai' ? 'AI' : 'You'}
                </div>
                <div className={`text-sm p-2 rounded-md ${
                  msg.type === 'ai' 
                    ? 'bg-primary/10 text-foreground' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {msg.message}
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-3 border-t">
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }} 
              className="flex gap-2"
            >
              <Input 
                value={userPrompt}
                onChange={(e) => setUserPrompt(e.target.value)}
                placeholder="Ask about migrating this pipeline..."
                className="flex-1"
                disabled={currentStep >= conversationFlow.length}
              />
              <Button 
                type="submit" 
                size="sm"
                disabled={!userPrompt.trim() || currentStep >= conversationFlow.length}
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
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
