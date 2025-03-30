
import React from 'react';
import { 
  Box, 
  Lock, 
  Cloud, 
  Database, 
  ArrowRightLeft, 
  ShieldCheck, 
  Zap,
  Layers,
  Cpu
} from "lucide-react";

const FeatureCard = ({ icon, title, description }: { 
  icon: React.ReactNode, 
  title: string, 
  description: string 
}) => {
  return (
    <div className="p-6 rounded-lg border bg-card shadow-sm hover:shadow-md transition-shadow">
      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Modular Architecture",
      description: "Build pipelines using reusable components that can be assembled like LEGO blocks."
    },
    {
      icon: <Box className="h-6 w-6" />,
      title: "JSON Configuration",
      description: "Define your entire data pipeline in a simple, readable JSON format."
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Cloud Agnostic",
      description: "Deploy anywhere - cloud, on-premises, or hybrid environments."
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Enterprise Security",
      description: "Column-level encryption and advanced security features for sensitive data."
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Flexible Storage",
      description: "Connect to various data sources and destinations with built-in connectors."
    },
    {
      icon: <ArrowRightLeft className="h-6 w-6" />,
      title: "ETL & ELT Support",
      description: "Support for both extract-transform-load and extract-load-transform patterns."
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "AI-Powered Migration",
      description: "Intelligent migration from legacy ETL tools like SAS, SSIS, and Informatica."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Rapid Development",
      description: "Pre-built Solution Kits for common use cases to get started quickly."
    },
  ];

  return (
    <section id="features" className="py-16 bg-muted">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mu-Pipelines combines flexibility and power with a simple, configuration-driven approach.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
