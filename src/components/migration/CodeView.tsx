
import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";

interface CodeViewProps {
  showLegacyCode: boolean;
  legacyCode: string;
  convertedCode: string;
  isAnalyzing: boolean;
}

const CodeView: React.FC<CodeViewProps> = ({ 
  showLegacyCode, 
  legacyCode, 
  convertedCode, 
  isAnalyzing 
}) => {
  return (
    <div className="bg-background rounded-md p-4 font-mono text-xs h-full flex flex-col">
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
      
      <ScrollArea className="flex-1">
        <pre className="whitespace-pre-wrap">
          {showLegacyCode ? legacyCode : convertedCode}
        </pre>
      </ScrollArea>
    </div>
  );
};

export default CodeView;
