
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import EarlyAccessSignup from '@/components/EarlyAccessSignup';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Have questions about Mu-Pipelines? We're here to help you simplify your data landscape.
              </p>
            </div>
            
            <div className="grid gap-12 md:grid-cols-1 lg:grid-cols-2">
              <div>
                <ContactForm />
              </div>
              <div>
                <EarlyAccessSignup />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
