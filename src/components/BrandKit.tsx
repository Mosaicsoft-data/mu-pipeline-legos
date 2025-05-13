
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Palette, Brush, Tag, FileText } from "lucide-react";

export default function BrandKit() {
  // Define your brand colors
  const brandColors = [
    { name: "Primary", value: "bg-primary", text: "text-primary-foreground" },
    { name: "Secondary", value: "bg-secondary", text: "text-secondary-foreground" },
    { name: "Accent", value: "bg-accent", text: "text-accent-foreground" },
    { name: "Muted", value: "bg-muted", text: "text-muted-foreground" },
    { name: "Destructive", value: "bg-destructive", text: "text-destructive-foreground" },
  ];

  // Define gray scales
  const grayScales = [
    { name: "Background", value: "bg-background", text: "text-foreground" },
    { name: "Foreground", value: "bg-foreground", text: "text-background" },
    { name: "Card", value: "bg-card", text: "text-card-foreground" },
    { name: "Border", value: "bg-border", text: "text-foreground" },
    { name: "Input", value: "bg-input", text: "text-foreground" },
  ];

  // Sample typography styles
  const typographyStyles = [
    { name: "Heading 1", class: "text-4xl font-bold tracking-tight" },
    { name: "Heading 2", class: "text-3xl font-semibold tracking-tight" },
    { name: "Heading 3", class: "text-2xl font-semibold tracking-tight" },
    { name: "Heading 4", class: "text-xl font-semibold tracking-tight" },
    { name: "Paragraph", class: "text-base leading-7" },
    { name: "Small", class: "text-sm font-light leading-6" },
    { name: "Lead", class: "text-xl text-muted-foreground" },
    { name: "Muted", class: "text-sm text-muted-foreground" },
  ];

  // Button variants
  const buttonVariants = [
    { name: "Default", variant: "default" },
    { name: "Secondary", variant: "secondary" },
    { name: "Outline", variant: "outline" },
    { name: "Ghost", variant: "ghost" },
    { name: "Link", variant: "link" },
    { name: "Destructive", variant: "destructive" },
  ];

  // Button sizes
  const buttonSizes = ["default", "sm", "lg", "icon"];

  return (
    <div className="container py-10 mx-auto">
      <div className="flex flex-col space-y-4">
        <h1 className="text-4xl font-bold">Brand Kit</h1>
        <p className="text-xl text-muted-foreground">
          A comprehensive guide to your brand's visual identity
        </p>
      </div>
      <Separator className="my-6" />

      <Tabs defaultValue="colors">
        <TabsList className="mb-6">
          <TabsTrigger value="colors" className="flex items-center gap-2">
            <Palette className="h-4 w-4" />
            Colors
          </TabsTrigger>
          <TabsTrigger value="typography" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Typography
          </TabsTrigger>
          <TabsTrigger value="components" className="flex items-center gap-2">
            <Brush className="h-4 w-4" />
            Components
          </TabsTrigger>
          <TabsTrigger value="usage" className="flex items-center gap-2">
            <Tag className="h-4 w-4" />
            Usage
          </TabsTrigger>
        </TabsList>

        <TabsContent value="colors">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Brand Colors</CardTitle>
                <CardDescription>The primary colors that represent your brand</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                  {brandColors.map((color) => (
                    <div key={color.name} className="flex flex-col">
                      <div className={`${color.value} h-24 rounded-md flex items-end p-4 mb-2`}>
                        <span className={`${color.text} font-medium`}>{color.name}</span>
                      </div>
                      <div className="text-sm text-muted-foreground font-mono mt-1">
                        {color.value.replace('bg-', 'var(--')}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Gray Scale</CardTitle>
                <CardDescription>Neutral colors for backgrounds, text, and UI elements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                  {grayScales.map((color) => (
                    <div key={color.name} className="flex flex-col">
                      <div className={`${color.value} h-24 rounded-md flex items-end p-4 mb-2 border`}>
                        <span className={`${color.text} font-medium`}>{color.name}</span>
                      </div>
                      <div className="text-sm text-muted-foreground font-mono mt-1">
                        {color.value.replace('bg-', 'var(--')}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="typography">
          <Card>
            <CardHeader>
              <CardTitle>Typography</CardTitle>
              <CardDescription>Text styles for different purposes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {typographyStyles.map((style) => (
                  <div key={style.name} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                    <div className="font-medium text-sm">{style.name}</div>
                    <div className={`${style.class} md:col-span-2`}>The quick brown fox jumps over the lazy dog.</div>
                    <div className="text-xs font-mono text-muted-foreground">{style.class}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="components">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Buttons</CardTitle>
                <CardDescription>Button variants and sizes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Variants</h3>
                    <div className="flex flex-wrap gap-4">
                      {buttonVariants.map((btn) => (
                        <Button key={btn.name} variant={btn.variant as any}>
                          {btn.name}
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-4">Sizes</h3>
                    <div className="flex flex-wrap items-center gap-4">
                      {buttonSizes.map((size) => (
                        <Button key={size} size={size as any}>
                          {size === "icon" ? <Palette className="h-4 w-4" /> : `Size ${size}`}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cards</CardTitle>
                <CardDescription>Card components for displaying content</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card description goes here</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>This is a basic card component.</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-primary">
                    <CardHeader className="bg-primary/10">
                      <CardTitle>Featured Card</CardTitle>
                      <CardDescription>A highlighted card variation</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p>This is a featured card with custom styling.</p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="usage">
          <Card>
            <CardHeader>
              <CardTitle>Usage Guidelines</CardTitle>
              <CardDescription>How to use brand elements effectively</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Color Usage</h3>
                  <p>
                    Use primary colors for main actions and important elements. Secondary colors should 
                    complement primary colors and be used for secondary actions or visual accents.
                    Accent colors can be used sparingly to draw attention to specific elements.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Typography</h3>
                  <p>
                    Maintain consistent text styles throughout the application. Use heading styles 
                    for titles and section headers. Body text should use the Paragraph style for optimal readability.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Component Usage</h3>
                  <p>
                    Choose the appropriate component variant based on context and hierarchy. 
                    Primary buttons should be used for main actions, while secondary or outline 
                    variants are better for less important actions.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Accessibility</h3>
                  <p>
                    Ensure sufficient contrast between text and background colors. 
                    Interactive elements should have clear focus states and be operable 
                    with keyboard navigation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
