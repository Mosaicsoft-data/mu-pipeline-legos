
import React from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "@/hooks/use-toast";
import { Mail, Sparkles, Cpu, ArrowRight } from "lucide-react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  currentTool: z.string().min(2, { message: "Please specify your current ETL tool." }),
  updates: z.boolean().default(true),
});

type FormValues = z.infer<typeof formSchema>;

const EarlyAccessSignup = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      currentTool: "",
      updates: true,
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      // In a real implementation, you would send this to a server endpoint
      // For now, we'll simulate sending an email using a client-side approach
      
      // Create email content
      const emailContent = `
        Email: ${data.email}
        Current ETL Tool: ${data.currentTool}
        Receive Updates: ${data.updates ? 'Yes' : 'No'}
        Subject: Early Access Request for AI-Powered Migration
      `;
      
      // Open the default email client
      window.location.href = `mailto:mupipelines@gmail.com?subject=Early Access Request - ${data.currentTool}&body=${encodeURIComponent(emailContent)}`;
      
      toast({
        title: "Early access request submitted",
        description: "Thank you for your interest! We'll contact you when the AI migration tool is ready.",
      });
      
      form.reset();
    } catch (error) {
      console.error("Error sending early access form:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later or contact us directly at mupipelines@gmail.com",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="w-full max-w-xl mx-auto bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
            <Cpu className="h-4 w-4 text-primary" />
          </div>
          <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full font-medium">Coming Soon</span>
        </div>
        <CardTitle className="text-2xl">AI-Powered Migration</CardTitle>
        <CardDescription>
          Sign up for early access to our AI-powered migration tool that helps you move from legacy ETL systems like SAS, SSIS, and Informatica to Mu-Pipelines.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <div className="flex items-center border rounded-md focus-within:ring-2 focus-within:ring-ring">
                      <Mail className="ml-2 h-5 w-5 text-muted-foreground" />
                      <Input placeholder="your.email@example.com" className="border-0 focus-visible:ring-0" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="currentTool"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current ETL Tool</FormLabel>
                  <FormControl>
                    <div className="flex items-center border rounded-md focus-within:ring-2 focus-within:ring-ring">
                      <Sparkles className="ml-2 h-5 w-5 text-muted-foreground" />
                      <Input placeholder="SAS, SSIS, Informatica, etc." className="border-0 focus-visible:ring-0" {...field} />
                    </div>
                  </FormControl>
                  <FormDescription>
                    Tell us which ETL tool you're currently using.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="updates"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Keep me updated on Mu-Pipelines news and features
                    </FormLabel>
                    <FormDescription>
                      We'll send occasional updates about new features and improvements.
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
            
            <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              Request Early Access
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default EarlyAccessSignup;
