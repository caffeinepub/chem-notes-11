import { Link } from '@tanstack/react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, FlaskConical } from 'lucide-react';
import { namedReactions } from '../data/namedReactions';

export default function NamedReactionsIndexPage() {
  return (
    <div className="py-12">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              <FlaskConical className="h-4 w-4" />
              CBSE Class 11
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Named Reactions</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse through handwritten notes on essential named reactions from your chemistry curriculum
            </p>
          </div>

          <div className="grid gap-6">
            {namedReactions.map((reaction) => (
              <Card key={reaction.slug} className="hover:shadow-lg transition-all hover:border-primary/50">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{reaction.title}</CardTitle>
                      <CardDescription className="text-base">
                        {reaction.description}
                      </CardDescription>
                    </div>
                    <Button asChild>
                      <Link to="/reactions/$slug" params={{ slug: reaction.slug }}>
                        View Notes
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
