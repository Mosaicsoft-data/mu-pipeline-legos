
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
              The intuitive way to create, test, and deploy data pipelines with our JSON-based configuration system.
            </p>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl font-bold mb-6">Configuration-driven Architecture</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Mu-Pipelines removes the complexity of traditional ETL tools by using a declarative, configuration-driven approach. 
                  Define sources, transformations, and destinations with simple JSON objects.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  This approach lets you version control your data infrastructure, test changes in isolation, and deploy with confidence.
                </p>
                <div className="flex space-x-4">
                  <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    Try it now
                  </Button>
                  <Button variant="outline">
                    <Code className="mr-2 h-5 w-5" />
                    View example configs
                  </Button>
                </div>
              </div>
              <div>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted p-4 rounded-md text-sm overflow-auto">
{`{
  "pipeline": {
    "id": "customer_data_integration",
    "source": {
      "type": "postgres",
      "config": {
        "host": "postgres.example.com",
        "port": 5432,
        "database": "customers",
        "query": "SELECT * FROM customer_data"
      }
    },
    "transformations": [
      {
        "type": "filter",
        "config": {
          "column": "status",
          "operator": "equals",
          "value": "active"
        }
      },
      {
        "type": "map",
        "config": {
          "columns": {
            "name": "customer_name",
            "email": "contact_email"
          }
        }
      }
    ],
    "destination": {
      "type": "s3",
      "config": {
        "bucket": "customer-data-warehouse",
        "path": "processed/",
        "format": "parquet"
      }
    }
  }
}`}
                    </pre>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-center mb-12">Interactive Builder</h2>
            <PipelineBuilder />
            
            <div className="mt-20">
              <h2 className="text-3xl font-bold text-center mb-12">Pipeline Development Lifecycle</h2>
              <Tabs defaultValue="design" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="design">Design</TabsTrigger>
                  <TabsTrigger value="test">Test</TabsTrigger>
                  <TabsTrigger value="deploy">Deploy</TabsTrigger>
                  <TabsTrigger value="monitor">Monitor</TabsTrigger>
                </TabsList>
                <TabsContent value="design" className="p-6 bg-muted/30 rounded-md mt-6">
                  <h3 className="text-xl font-semibold mb-4">Design Your Pipeline</h3>
                  <p className="mb-4">Create data pipelines with our visual builder or write JSON configurations directly. 
                  Define sources, transformations, and destinations in a modular fashion.</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Drag-and-drop interface for building pipelines</li>
                    <li>Code editor with JSON schema validation</li>
                    <li>Library of pre-built components and templates</li>
                    <li>Import configurations from existing tools</li>
                  </ul>
                </TabsContent>
                <TabsContent value="test" className="p-6 bg-muted/30 rounded-md mt-6">
                  <h3 className="text-xl font-semibold mb-4">Test and Validate</h3>
                  <p className="mb-4">Ensure your pipelines work as expected before deployment with comprehensive testing tools.</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Run pipelines with sample data</li>
                    <li>Validate configurations against schemas</li>
                    <li>Debug data flow with step-by-step execution</li>
                    <li>Performance profiling and optimization suggestions</li>
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
                <TabsContent value="monitor" className="p-6 bg-muted/30 rounded-md mt-6">
                  <h3 className="text-xl font-semibold mb-4">Monitor and Optimize</h3>
                  <p className="mb-4">Keep track of your pipelines' performance and health with comprehensive monitoring tools.</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Real-time execution monitoring</li>
                    <li>Historical performance analytics</li>
                    <li>Alerting and notification systems</li>
                    <li>Resource usage optimization suggestions</li>
                  </ul>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
        
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default PipelineBuilderPage;
