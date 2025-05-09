
import React, { useState, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";

const MigrationVisualizer = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  
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

  // This would represent the process of analyzing the legacy code
  useEffect(() => {
    const steps = [
      { text: "Analyzing SSIS package structure...", delay: 2000 },
      { text: "Identifying connection managers...", delay: 1500 },
      { text: "Mapping data flow components...", delay: 2000 },
      { text: "Converting SQL queries...", delay: 1500 },
      { text: "Generating Mu-Pipeline configuration...", delay: 2000 },
      { text: "Migration completed successfully!", delay: 1000 },
    ];
    
    let timer: ReturnType<typeof setTimeout>;
    
    if (isAnalyzing && currentStep < steps.length) {
      toast({
        title: "Migration Step",
        description: steps[currentStep].text,
      });
      
      timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, steps[currentStep].delay);
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [currentStep, isAnalyzing, toast]);

  // Reset the demo
  const resetDemo = () => {
    setCurrentStep(0);
    setIsAnalyzing(false);
  };

  // Start the demo
  const startAnalysis = () => {
    resetDemo();
    setIsAnalyzing(true);
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
      
      {currentStep < 5 ? (
        <div className="bg-background rounded-md p-4 font-mono text-xs overflow-auto h-80">
          <div className="flex items-center text-muted-foreground mb-2">
            <span className="text-xs uppercase font-semibold">customer_pipeline.dtsx</span>
            {isAnalyzing && (
              <span className="ml-auto text-xs bg-blue-500/10 text-blue-500 px-2 py-0.5 rounded">
                Analyzing...
              </span>
            )}
          </div>
          
          <pre className="whitespace-pre-wrap overflow-auto">
            {legacyCode}
          </pre>
        </div>
      ) : (
        <div className="bg-background rounded-md p-4 font-mono text-xs overflow-auto h-80">
          <div className="flex items-center text-muted-foreground mb-2">
            <span className="text-xs uppercase font-semibold">customer_pipeline.json</span>
            <span className="ml-auto text-xs bg-green-500/10 text-green-500 px-2 py-0.5 rounded">
              Conversion Complete
            </span>
          </div>
          
          <pre className="whitespace-pre-wrap overflow-auto">
            {convertedCode}
          </pre>
        </div>
      )}
      
      <div className="mt-4 flex gap-2">
        {!isAnalyzing ? (
          <button 
            onClick={startAnalysis}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium"
          >
            Start Migration Demo
          </button>
        ) : (
          <button 
            onClick={resetDemo}
            className="bg-muted hover:bg-muted/80 px-4 py-2 rounded-md text-sm font-medium"
          >
            Reset Demo
          </button>
        )}
      </div>
      
      {currentStep >= 5 && (
        <div className="mt-4 p-3 bg-green-500/10 text-green-700 text-sm rounded-md border border-green-200">
          <strong>Migration Successful:</strong> Extracted 2 components from legacy SSIS package. 
          SQL connections mapped with 100% confidence. Ready to deploy.
        </div>
      )}
    </div>
  );
};

export default MigrationVisualizer;
