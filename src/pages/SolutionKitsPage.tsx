
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SolutionKits from '@/components/SolutionKits';
import CTASection from '@/components/CTASection';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BarChart3, Database, ShoppingCart, Users, Building, Heart, School, FileSpreadsheet, Clock, ArrowRight } from 'lucide-react';

const SolutionKit = ({ 
  title, 
  description, 
  icon: Icon, 
  tags,
  comingSoon = false
}: { 
  title: string; 
  description: string; 
  icon: React.ElementType;
  tags: string[];
  comingSoon?: boolean;
}) => (
  <Card className="h-full flex flex-col">
    <CardHeader>
      <div className="mb-2">
        <Icon className="h-10 w-10 text-primary" />
      </div>
      <div className="flex justify-between items-start">
        <CardTitle>{title}</CardTitle>
        {comingSoon && <Badge variant="outline" className="ml-2">Coming Soon</Badge>}
      </div>
    </CardHeader>
    <CardContent className="flex-grow">
      <CardDescription className="text-sm mb-4">{description}</CardDescription>
      <div className="flex flex-wrap gap-2 mt-2">
        {tags.map((tag, i) => (
          <Badge key={i} variant="secondary" className="text-xs">{tag}</Badge>
        ))}
      </div>
    </CardContent>
    <CardFooter>
      <Button className="w-full" variant={comingSoon ? "outline" : "default"} disabled={comingSoon}>
        {comingSoon ? 'Request Early Access' : 'Learn More'}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </CardFooter>
  </Card>
);

const SolutionKitsPage = () => {
  const kits = [
    {
      title: "Customer 360",
      description: "Unify customer data from multiple sources to create comprehensive profiles and enable personalized experiences.",
      icon: Users,
      tags: ["CRM Integration", "Identity Resolution", "Profile Enrichment"],
      comingSoon: false
    },
    {
      title: "E-Commerce Analytics",
      description: "Track and analyze customer behavior, product performance, and sales data to optimize your online store.",
      icon: ShoppingCart,
      tags: ["Sales Analysis", "Inventory Management", "Customer Journey"],
      comingSoon: false
    },
    {
      title: "Financial Reporting",
      description: "Automate the collection, transformation, and reporting of financial data from multiple systems.",
      icon: BarChart3,
      tags: ["GL Integration", "Compliance", "Executive Dashboards"],
      comingSoon: true
    },
    {
      title: "Healthcare Data Integration",
      description: "Securely integrate patient data across systems while maintaining HIPAA compliance and data privacy.",
      icon: Heart,
      tags: ["HL7 FHIR", "HIPAA Compliance", "Patient Records"],
      comingSoon: true
    },
    {
      title: "Enterprise Data Warehouse",
      description: "Build a scalable, cloud-based data warehouse with automated ETL processes and governance.",
      icon: Building,
      tags: ["Cloud Data Warehouse", "Governance", "Business Intelligence"],
      comingSoon: false
    },
    {
      title: "Education Analytics",
      description: "Integrate student information systems, learning management systems, and assessment platforms.",
      icon: School,
      tags: ["Student Performance", "Enrollment Analysis", "LMS Integration"],
      comingSoon: true
    },
    {
      title: "Real-time Data Streaming",
      description: "Process and analyze streaming data in real-time with pre-configured connectors for popular messaging systems.",
      icon: Clock,
      tags: ["Kafka", "Event Processing", "Streaming Analytics"],
      comingSoon: true
    },
    {
      title: "Data Lake Integration",
      description: "Build a modern data lake architecture with structured and unstructured data management capabilities.",
      icon: Database,
      tags: ["S3/ADLS", "Metadata Management", "Data Catalog"],
      comingSoon: false
    },
    {
      title: "Excel & CSV Processing",
      description: "Automate the processing and integration of Excel and CSV files from various sources.",
      icon: FileSpreadsheet,
      tags: ["File Processing", "Validation", "Integration"],
      comingSoon: false
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Solution Kits</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pre-built configurations and templates for common data integration scenarios, ready to deploy with minimal customization.
            </p>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Why Solution Kits?</h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
              Jump-start your data projects with our pre-configured solution kits. Each kit includes connectors, transformations, 
              and pipelines designed for specific use cases, significantly reducing implementation time.
            </p>
            
            <SolutionKits />
            
            <div className="mt-20">
              <h2 className="text-3xl font-bold text-center mb-12">Available Solution Kits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {kits.map((kit, index) => (
                  <SolutionKit
                    key={index}
                    title={kit.title}
                    description={kit.description}
                    icon={kit.icon}
                    tags={kit.tags}
                    comingSoon={kit.comingSoon}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Custom Solution Development</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Need a specialized solution for your unique business requirements? Our team can create 
                custom Solution Kits tailored to your specific data integration needs.
              </p>
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity px-6 py-6 text-lg">
                Request Custom Solution
              </Button>
            </div>
          </div>
        </section>
        
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default SolutionKitsPage;
