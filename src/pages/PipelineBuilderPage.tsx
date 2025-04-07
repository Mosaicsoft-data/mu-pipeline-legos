
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PipelineBuilder from '@/components/PipelineBuilder';
import CTASection from '@/components/CTASection';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Code } from 'lucide-react';

const PipelineBuilderPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Pipeline Builder</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mu-Pipelines removes the complexity of traditional ETL tools by using a declarative, configuration-driven approach. Define sources, transformations, and destinations with simple JSON objects. This approach lets you version control your data infrastructure, test changes in isolation, and deploy with confidence.            </p>
          </div>
        </section>
        
        <section className="py-16">
            <PipelineBuilder />
            
            <div className="mt-20">
              <h2 className="text-3xl font-bold text-center mb-12">Pipeline Development Lifecycle</h2>
              <Tabs defaultValue="design" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="design">Design</TabsTrigger>
                  <TabsTrigger value="test">Test</TabsTrigger>
                  <TabsTrigger value="deploy">Schedule</TabsTrigger>
                  <TabsTrigger value="monitor">Deploy</TabsTrigger>
                </TabsList>
                <TabsContent value="design" className="p-6 bg-muted/30 rounded-md mt-6">
                  <h3 className="text-xl font-semibold mb-4">Design Your Pipeline</h3>
                  <p className="mb-4">Craft your pipelines like building with Lego blocks. Use simple JSON configs to choose your sources, define transformations, and set destinations.</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Choose from pre-built modules or bring your own</li>
                    <li>Support for batch, streaming, and hybrid use cases</li>
                    <li>Add validations and alerts</li>
                  </ul>
                </TabsContent>
                <TabsContent value="test" className="p-6 bg-muted/30 rounded-md mt-6">
                  <h3 className="text-xl font-semibold mb-4">Test and Validate</h3>
                  <p className="mb-4">Ensure your pipelines work as expected before deployment with comprehensive testing tools.</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Run pipelines locally in notebook or any IDE with sample data</li>
                    <li>Validate configurations against schemas</li>
                    <li>Easily test isolated pipeline components</li>
                  </ul>
                </TabsContent>
                <TabsContent value="schedule" className="p-6 bg-muted/30 rounded-md mt-6">
                  <h3 className="text-xl font-semibold mb-4">Monitor and Optimize</h3>
                  <p className="mb-4">Automate pipeline runs with flexible scheduling options.</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Cron-like expressions or interval-based triggers</li>
                    <li>Integrate with airflow, ctrl m or your scheduler</li>
                    <li>Chain various pipelines togther for Dependency</li>
                  </ul>
                </TabsContent>
                <TabsContent value="deploy" className="p-6 bg-muted/30 rounded-md mt-6">
                  <h3 className="text-xl font-semibold mb-4">Deploy with Confidence</h3>
                  <p className="mb-4">Deploy your pipelines to any environment with version control and rollback capabilities.</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Environment-specific configurations</li>
                    <li>CI/CD integration for automated deployments</li>
                    <li>Blue/green deployment strategies</li>
                    <li>Configuration versioning and history</li>
                  </ul>
                </TabsContent>

              </Tabs>
          </div>
        </section>
        
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default PipelineBuilderPage;
