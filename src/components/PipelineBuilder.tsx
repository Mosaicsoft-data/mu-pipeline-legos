
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Database, FileText, Wand2, Server, ArrowRight } from "lucide-react";

const ModuleCard = ({ 
  icon, 
  title, 
  description, 
  isSelected,
  onClick 
}: { 
  icon: React.ReactNode;
  title: string;
  description: string;
  isSelected: boolean;
  onClick: () => void;
}) => {
  return (
    <div 
      className={`pipeline-module ${isSelected ? 'border-primary border-2' : ''}`}
      onClick={onClick}
    >
      <div className="flex items-center mb-2">
        <div className="h-8 w-8 rounded bg-primary/10 flex items-center justify-center text-primary mr-3">
          {icon}
        </div>
        <h3 className="font-medium text-lg">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

const PipelineStage = ({ 
  title, 
  description, 
  modules, 
  selectedModule, 
  onSelect 
}: { 
  title: string;
  description: string;
  modules: Array<{
    id: string;
    icon: React.ReactNode;
    title: string;
    description: string;
  }>;
  selectedModule: string | null;
  onSelect: (id: string) => void;
}) => {
  return (
    <div className="w-full md:w-64">
      <div className="mb-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="space-y-3">
        {modules.map((module) => (
          <ModuleCard
            key={module.id}
            icon={module.icon}
            title={module.title}
            description={module.description}
            isSelected={selectedModule === module.id}
            onClick={() => onSelect(module.id)}
          />
        ))}
      </div>
    </div>
  );
};

const PipelineConnector = () => (
  <div className="hidden md:flex">
    <div className="pipeline-connector"></div>
    <ArrowRight className="text-secondary" />
  </div>
);

const PipelineBuilder = () => {
  const [selectedSource, setSelectedSource] = useState<string | null>(null);
  const [selectedTransform, setSelectedTransform] = useState<string | null>(null);
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null);

  const sources = [
    {
      id: 'salesforce',
      icon: <Database className="h-4 w-4" />,
      title: 'Salesforce',
      description: 'Connect to Salesforce data'
    },
    {
      id: 'mysql',
      icon: <Database className="h-4 w-4" />,
      title: 'MySQL',
      description: 'Extract from MySQL database'
    },
    {
      id: 'file',
      icon: <FileText className="h-4 w-4" />,
      title: 'CSV/JSON Files',
      description: 'Read from structured files'
    }
  ];

  const transforms = [
    {
      id: 'cleanse',
      icon: <Wand2 className="h-4 w-4" />,
      title: 'Data Cleansing',
      description: 'Clean and standardize data'
    },
    {
      id: 'enrich',
      icon: <Wand2 className="h-4 w-4" />,
      title: 'Data Enrichment',
      description: 'Add calculated fields'
    },
    {
      id: 'filter',
      icon: <Wand2 className="h-4 w-4" />,
      title: 'Filtering',
      description: 'Remove unwanted records'
    }
  ];

  const destinations = [
    {
      id: 'postgres',
      icon: <Server className="h-4 w-4" />,
      title: 'PostgreSQL',
      description: 'Load to PostgreSQL database'
    },
    {
      id: 'snowflake',
      icon: <Server className="h-4 w-4" />,
      title: 'Snowflake',
      description: 'Load to Snowflake warehouse'
    },
    {
      id: 's3',
      icon: <Server className="h-4 w-4" />,
      title: 'S3 Bucket',
      description: 'Store in S3 data lake'
    }
  ];

  const generatePipeline = () => {
    const source = sources.find(s => s.id === selectedSource);
    const transform = transforms.find(t => t.id === selectedTransform);
    const destination = destinations.find(d => d.id === selectedDestination);
    
    if (!source || !transform || !destination) {
      return "// Select modules from each category to generate a pipeline configuration";
    }
    
    return `{
  "name": "${source.title.toLowerCase()}-to-${destination.title.toLowerCase()}",
  "modules": [
    {
      "type": "source",
      "id": "${source.id}-connector",
      "config": {
        // ${source.title} specific configuration
      }
    },
    {
      "type": "transform",
      "id": "${transform.id}-processor",
      "config": {
        // ${transform.title} specific configuration
      }
    },
    {
      "type": "destination",
      "id": "${destination.id}-sink",
      "config": {
        // ${destination.title} specific configuration
      }
    }
  ]
}`;
  };

  const allSelected = selectedSource && selectedTransform && selectedDestination;

  return (
    <section id="pipeline-builder" className="py-16">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Visual Pipeline Builder</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Assemble your data pipeline by selecting components from each category.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-start justify-center gap-4 md:gap-0 mb-10">
          <PipelineStage 
            title="Data Source" 
            description="Where your data comes from"
            modules={sources}
            selectedModule={selectedSource}
            onSelect={setSelectedSource}
          />
          
          <PipelineConnector />
          
          <PipelineStage 
            title="Transformation" 
            description="How your data is processed"
            modules={transforms}
            selectedModule={selectedTransform}
            onSelect={setSelectedTransform}
          />
          
          <PipelineConnector />
          
          <PipelineStage 
            title="Destination" 
            description="Where your data goes"
            modules={destinations}
            selectedModule={selectedDestination}
            onSelect={setSelectedDestination}
          />
        </div>
        
        <div className="bg-muted rounded-lg p-6 mt-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Generated Pipeline Configuration</h3>
          </div>
          <pre className="bg-card p-4 rounded-md overflow-x-auto border">
            <code className="text-sm">
              {generatePipeline()}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
};

export default PipelineBuilder;
