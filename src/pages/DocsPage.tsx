
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Book, Video, Github, ArrowRight, Lightbulb, GitFork, Code2 } from 'lucide-react';

const DocsPage = () => {
  useEffect(() => {
    // Track documentation page visit
    console.log('Documentation page visited');
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Documentation</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Everything you need to know about building, deploying, and managing Mu-Pipelines.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://mosaicsoft-data.github.io/mu-pipelines-doc/" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity px-6 py-6 text-lg">
                  <Book className="mr-2 h-5 w-5" />
                  Read the Docs
                </Button>
              </a>
              <a href="https://github.com/mosaicsoft/mu-pipelines" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="px-6 py-6 text-lg">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub Repository
                </Button>
              </a>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Documentation Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-2">
                    <Book className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle>User Guide</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Comprehensive documentation covering all aspects of using Mu-Pipelines, from installation to advanced configurations.
                  </CardDescription>
                  <a href="https://mosaicsoft-data.github.io/mu-pipelines-doc/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full">
                      Read User Guide
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
              
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-2">
                    <Video className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle>Tutorials</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Step-by-step video and written tutorials to help you get started and master advanced features.
                  </CardDescription>
                  <Button variant="outline" className="w-full">
                    Browse Tutorials
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-2">
                    <Code2 className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle>API Reference</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Detailed API documentation for developers looking to extend or integrate with Mu-Pipelines.
                  </CardDescription>
                  <a href="https://mosaicsoft-data.github.io/mu-pipelines-doc/api" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full">
                      View API Docs
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
            
            <h2 className="text-3xl font-bold text-center mb-12">Getting Started</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Start Guide</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-4">
                    <li className="pb-4 border-b border-border/40">
                      <h3 className="font-semibold mb-1">Installation</h3>
                      <p className="text-muted-foreground mb-2">Install Mu-Pipelines using npm or docker:</p>
                      <pre className="bg-muted p-3 rounded-md text-sm overflow-auto">
                        npm install -g mu-pipelines
                      </pre>
                    </li>
                    <li className="pb-4 border-b border-border/40">
                      <h3 className="font-semibold mb-1">Create a configuration file</h3>
                      <p className="text-muted-foreground mb-2">Create a JSON configuration file for your pipeline:</p>
                      <pre className="bg-muted p-3 rounded-md text-sm overflow-auto">
{`{
  "pipeline": {
    "id": "simple_example",
    "source": { ... },
    "transformations": [ ... ],
    "destination": { ... }
  }
}`}
                      </pre>
                    </li>
                    <li className="pb-4 border-b border-border/40">
                      <h3 className="font-semibold mb-1">Run your pipeline</h3>
                      <p className="text-muted-foreground mb-2">Execute your pipeline with the CLI:</p>
                      <pre className="bg-muted p-3 rounded-md text-sm overflow-auto">
                        mu-pipelines run pipeline.json
                      </pre>
                    </li>
                    <li>
                      <h3 className="font-semibold mb-1">Monitor execution</h3>
                      <p className="text-muted-foreground">View logs and metrics in the web dashboard or CLI output.</p>
                    </li>
                  </ol>
                  <div className="mt-6">
                    <a href="https://mosaicsoft-data.github.io/mu-pipelines-doc/getting-started" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full">
                        View Complete Guide
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center">
                      <Lightbulb className="h-6 w-6 text-primary mr-2" />
                      <CardTitle>Example Projects</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      Explore example projects that demonstrate how to use Mu-Pipelines for various scenarios.
                    </CardDescription>
                    <a href="https://github.com/mosaicsoft/mu-pipelines-examples" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full">
                        Browse Examples
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="flex items-center">
                      <GitFork className="h-6 w-6 text-primary mr-2" />
                      <CardTitle>Contributing</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      Mu-Pipelines is open source, and we welcome contributions from the community.
                    </CardDescription>
                    <a href="https://github.com/mosaicsoft/mu-pipelines/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full">
                        Contribution Guide
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="flex items-center">
                      <FileText className="h-6 w-6 text-primary mr-2" />
                      <CardTitle>FAQ</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      Find answers to frequently asked questions about Mu-Pipelines.
                    </CardDescription>
                    <a href="https://mosaicsoft-data.github.io/mu-pipelines-doc/faq" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full">
                        View FAQ
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DocsPage;
