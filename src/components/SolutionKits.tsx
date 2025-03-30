
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Database, FileText, Server, BarChart4, Zap, Users } from "lucide-react";

const SolutionKitCard = ({ 
  icon, 
  title, 
  description, 
  tags,
  comingSoon = false
}: { 
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
  comingSoon?: boolean;
}) => {
  return (
    <div className="bg-card rounded-lg border shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
        {icon}
      </div>
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        {comingSoon && <Badge variant="outline" className="bg-accent/20 text-accent-foreground">Coming Soon</Badge>}
      </div>
      <p className="text-muted-foreground mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <Badge key={index} variant="secondary" className="text-xs">{tag}</Badge>
        ))}
      </div>
      <Button 
        variant={comingSoon ? "outline" : "default"} 
        className="w-full mt-2"
        disabled={comingSoon}
      >
        {comingSoon ? "Notify Me" : "View Solution"}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};

const SolutionKits = () => {
  return (
    <section id="solution-kits" className="py-16 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pre-built Solution Kits</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready-made configurations for common use cases, helping you get started faster.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SolutionKitCard 
            icon={<Database className="h-6 w-6" />}
            title="Database Migration"
            description="Seamlessly migrate data between different database systems with schema mapping and data type conversion."
            tags={["PostgreSQL", "MySQL", "SQL Server", "Schema Mapping"]}
          />
          
          <SolutionKitCard 
            icon={<Users className="h-6 w-6" />}
            title="Customer 360"
            description="Aggregate customer data from multiple sources into a unified view for better insights and personalization."
            tags={["CRM", "Marketing", "Customer Data", "Enrichment"]}
            comingSoon
          />
          
          <SolutionKitCard 
            icon={<BarChart4 className="h-6 w-6" />}
            title="Analytics Data Mart"
            description="Build a structured data mart optimized for business intelligence and analytics tools."
            tags={["Star Schema", "Dimensions", "Facts", "Aggregations"]}
            comingSoon
          />
          
          <SolutionKitCard 
            icon={<FileText className="h-6 w-6" />}
            title="CSV/Excel Processor"
            description="Import, transform, and load data from CSV and Excel files into your data warehouse or application database."
            tags={["File Processing", "Data Cleansing", "Validation", "Scheduling"]}
          />
          
          <SolutionKitCard 
            icon={<Server className="h-6 w-6" />}
            title="Data Warehouse ETL"
            description="Comprehensive ETL processes for populating and maintaining your data warehouse with proper dimensions and facts."
            tags={["Dimensional Modeling", "Slowly Changing Dimensions", "Incremental Loads"]}
            comingSoon
          />
          
          <SolutionKitCard 
            icon={<Zap className="h-6 w-6" />}
            title="Real-time Streaming"
            description="Process and react to data streams in real-time for immediate insights and actions."
            tags={["Kafka", "Event Processing", "Stream Analytics", "Alerting"]}
            comingSoon
          />
        </div>
      </div>
    </section>
  );
};

export default SolutionKits;
