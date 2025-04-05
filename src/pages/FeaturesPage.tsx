
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Features from '@/components/Features';
import CTASection from '@/components/CTASection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileJson2, Lock, Zap, Workflow, CloudCog, Code2, BrainCircuit } from 'lucide-react';

const FeatureDetail = ({ title, description, icon: Icon }: { title: string; description: string; icon: React.ElementType }) => (
  <Card className="h-full">
    <CardHeader>
      <div className="mb-2">
        <Icon className="h-10 w-10 text-primary" />
      </div>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-sm">{description}</CardDescription>
    </CardContent>
  </Card>
);

const FeaturesPage = () => {
  const detailedFeatures = [
    {
      title: "JSON Configuration",
      description: "Define your entire data pipeline with simple JSON configuration files. No complex coding required.",
      icon: FileJson2
    },
    {
      title: "Enterprise Security",
      description: "Column-level encryption, role-based access control, and audit logs ensure your data remains secure.",
      icon: Lock
    },
    {
      title: "High Performance",
      description: "Built for scale with parallel processing and optimized execution paths for faster data throughput.",
      icon: Zap
    },
    {
      title: "Workflow Orchestration",
      description: "Schedule, chain, and manage dependencies between pipelines with built-in orchestration.",
      icon: Workflow
    },
    {
      title: "Cloud & On-Prem",
      description: "Deploy anywhere - cloud, hybrid, or on-premises - with consistent functionality across environments.",
      icon: CloudCog
    },
    {
      title: "Custom Components",
      description: "Extend functionality with custom connectors and transformations to meet specific business needs.",
      icon: Code2
    },
    {
      title: "AI Migration",
      description: "Migrate from legacy ETL tools like SAS, SSIS, and Informatica with our AI-powered conversion tools.",
      icon: BrainCircuit
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Feature-rich Data Pipeline Solution</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Mu-Pipelines offers everything you need to build, manage, and scale your data infrastructure with minimal effort.
            </p>
          </div>
        </section>
                
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Detailed Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {detailedFeatures.map((feature, index) => (
                <FeatureDetail 
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                />
              ))}
            </div>
          </div>
        </section>
        
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default FeaturesPage;
