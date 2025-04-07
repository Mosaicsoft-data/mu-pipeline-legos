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
      id: 'sql',
      icon: <Wand2 className="h-4 w-4" />,
      title: 'Data transformation',
      description: 'Use SQL Queries'
    },
    {
      id: 'python',
      icon: <Wand2 className="h-4 w-4" />,
      title: 'Python code',
      description: 'Use python code'
    }
  ];

  const destinations = [
    {
      id: 'lakehouse',
      icon: <Server className="h-4 w-4" />,
      title: 'Lakehouse',
      description: 'Load to default lakehouse'
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
  
    let ingest = null;
    let transformStep = null;
    let destinationStep = null;
  
    // Handle specific cases for ingest
    if (source.id === "salesforce") {
      ingest = {
        exec_type: "IngestSalesforce",
        source: "my_salesforce_crm",
        table: "account",
        incremental_lower_bound: {
          type: "sql",
          location: "account_lower_bound.sql",
          source: "my_salesforce_crm"
        },
        incremental_upper_bound: {
          type: "udf",
          location: "current_time"
        },
        number_of_partitions: 12
      };
    } else if (source.id === "mysql") {
      ingest = {
        exec_type: "IngestJDBC",
        source: "Mysql_crm",
        table: "account"
      };
    } else if (source.id === "file") {
      ingest = {
        type: "IngestCSV",
        file_location: "/path/to/file.csv",
        delimiter: ",",
        quotes: "\"",
        additional_attributes: [
          { key: "header", value: "True" }
        ]
      };
    }
  
    // Handle specific cases for transform
    if (transform.id === "python") {
      transformStep = {
        exec_type: "TransformPython",
        code: "my_account_code.py"
      };
    } else if (transform.id === "cleanse") {
      transformStep = {
        exec_type: "EnrichDuplicate",
        key: "account_name, account_city"
      };
    } else if (transform.id === "sql") {
      transformStep = {
        exec_type: "TransformSQL",
        code: "transform_account_sql.sql"
      };
    }
  
    // Handle specific cases for destination
    if (destination.id === "s3") {
      destinationStep = {
        type: "DestinationS3",
        file_format: "parquet",
        compression: "gzip",
        name: "account",
        mode: "append"
      };
    } else if (destination.id === "snowflake") {
      destinationStep = {
        type: "DestinationSnowflake",
        connection: "my_snowflake",
        table: "account",
        name: "account",
        mode: "append"
      };
    } else if (destination.id === "lakehouse") {
      destinationStep = {
        type: "DestinationDefaultCatalog",
        table_name: "crm.raw.people",
        mode: "overwrite"
      };
    }
  
    // Combine all steps into the final pipeline configuration
    const pipeline = {
      execution: [ingest, transformStep],
      destination: [destinationStep]
    };
    
    return JSON.stringify(pipeline, null, 2);
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
