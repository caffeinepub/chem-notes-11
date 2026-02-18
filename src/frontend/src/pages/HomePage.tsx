import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BookOpen, FlaskConical } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section with Background */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/assets/generated/hero-bg.dim_1920x1080.png)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        
        <div className="container relative z-10 px-4 py-16 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <FlaskConical className="h-4 w-4" />
              CBSE Class 11 Chemistry
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Named Reactions
              <span className="block text-primary mt-2">Study Notes</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Handwritten notes on essential named reactions from your chemistry curriculum
            </p>

            <div className="pt-4">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link to="/reactions">
                  Explore Notes
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Credit Section */}
      <section className="py-16 bg-card/30">
        <div className="container px-4">
          <Card className="max-w-2xl mx-auto border-2 border-primary/20 shadow-lg">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-3xl font-bold">made by PIYUSH SRIVASTAVA</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-base">
                Curated handwritten notes to help you master Class 11 Chemistry named reactions
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Handwritten Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Clear, detailed handwritten notes for better understanding and retention
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <FlaskConical className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Named Reactions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Comprehensive coverage of all important named reactions in CBSE Class 11
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <ArrowRight className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Easy Access</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Quick navigation to find exactly what you need for your studies
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
