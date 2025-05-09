
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Zap, Code2, Database, Lock, LayoutPanelLeft, FileJson2, FileCode, ArrowsUpFromLine, UploadCloud } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import MigrationVisualizer from '@/components/MigrationVisualizer';

const AIPipelines = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  <span className="gradient-text">Co-Create</span> Your Data Pipelines
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Design, build, and deploy data pipelines through conversation. Chat with our AI and see configurations come to life in real-time.
                </p>
              </div>
            </div>
          </div>
        </section>
{/* Demo Section */}
<section className="py-16">
          <div className="container mx-auto">
            <div className="bg-card rounded-lg border shadow-md p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2">
                  <h2 className="text-3xl font-bold mb-4">See It In Action</h2>
                  <p className="text-muted-foreground mb-6">
                    Watch how easily you can create complex data pipelines through simple conversation with our AI assistant.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-semibold">You</span>
                      </div>
                      <div className="bg-muted p-3 rounded-lg text-sm">
                        I need a pipeline that loads customer data from S3 and joins it with purchase history
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-secondary font-semibold">AI</span>
                      </div>
                      <div className="bg-secondary/10 p-3 rounded-lg text-sm">
                        I'll help you create that pipeline. Let's start with defining the source for customer data. What's the S3 bucket and path pattern?
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-semibold">You</span>
                      </div>
                      <div className="bg-muted p-3 rounded-lg text-sm">
                        The bucket is "customer-data" and the files are at "/daily/customers-*.csv"
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 bg-muted rounded-lg p-4">
                  <div className="text-xs text-muted-foreground mb-2">pipeline-preview.json</div>
                  <pre className="overflow-auto p-2 rounded bg-background text-xs">
                    <code>{`{
  "pipeline": {
    "name": "customer_data_pipeline",
    "source": {
      "type": "s3",
      "bucket": "customer-data",
      "path": "/daily/customers-*.csv",
      "format": "csv",
      "options": {
        "header": true,
        "inferSchema": true
      }
    },
    "transforms": [
      // More will be added as we continue...
    ],
    "destination": {
      // Will be defined next...
    }
  }
}`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Migration Demo Section - Updated */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">AI-Powered Migration</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Transform legacy data pipelines into modern, maintainable code with our intelligent migration assistant
              </p>
            </div>
            
            <div className="bg-card rounded-lg border shadow-md p-8 mb-8">
              <div className="flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Visual Studio Integration</h3>
                    <p className="text-muted-foreground mb-6">
                      Our VS Code extension analyzes your legacy pipeline files and provides intelligent conversion suggestions directly in your editor.
                    </p>
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <FileCode className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Legacy Pipeline Analysis</h4>
                          <p className="text-sm text-muted-foreground">
                            AI analyzes SSIS (.dtsx), Informatica workflows, or custom XML definitions
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <ArrowsUpFromLine className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Automated Conversion</h4>
                          <p className="text-sm text-muted-foreground">
                            Convert to modern Mu-Pipeline JSON with specific component mappings
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <UploadCloud className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Seamless Deployment</h4>
                          <p className="text-sm text-muted-foreground">
                            Test, validate and deploy directly from your editor
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <MigrationVisualizer />
                  </div>
                </div>
                
                <div className="mt-4 p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                  <h4 className="font-semibold mb-2">Migration Success Story</h4>
                  <p className="text-sm text-muted-foreground">
                    "We migrated over 200 legacy SSIS packages to Mu-Pipelines in just 3 weeks - a process that would have taken months manually. The AI correctly mapped 95% of components without any human intervention."
                  </p>
                  <p className="text-sm font-medium mt-2">— Sarah Chen, Data Engineering Lead at FinTech Solutions Inc.</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Link to="/contact">
                <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                  Schedule a Migration Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our AI assistant helps you build data pipelines through natural conversation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <MessageSquare className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Chat to Create</h3>
                <p className="text-muted-foreground">
                  Describe your data pipeline needs in plain language. Our AI will understand and suggest configurations.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6">
                <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-4">
                  <LayoutPanelLeft className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">See It Live</h3>
                <p className="text-muted-foreground">
                  Watch your pipeline configuration come to life in real-time as you chat with our AI assistant.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6">
                <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4">
                  <FileJson2 className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Export & Deploy</h3>
                <p className="text-muted-foreground">
                  Export your completed pipeline configuration as JSON or YAML to deploy on your own infrastructure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Benefits</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Why choose our conversational pipeline builder
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <Zap className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Speed & Efficiency</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Build pipelines in minutes instead of days. Our AI eliminates boilerplate code and complex configurations.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Code2 className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Own Your Code</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    You own all configurations generated. Export them and run on your infrastructure with no vendor lock-in.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Database className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Bring Your Own Connectors</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Integrate with existing data sources and destinations. Support for custom connectors and transformations.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your First Pipeline?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Start creating your data pipelines through conversation today. No complex configurations required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
       <a href="/Contact" target="_blank" rel="noopener noreferrer">
        <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity px-6 py-6 text-lg">
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AIPipelines;
