import { useParams, Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { namedReactions } from '../data/namedReactions';
import NotesImageViewer from '../components/NotesImageViewer';

export default function ReactionPage() {
  const { slug } = useParams({ from: '/reactions/$slug' });
  const reaction = namedReactions.find((r) => r.slug === slug);

  if (!reaction) {
    return (
      <div className="py-12">
        <div className="container px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Reaction Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The reaction you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link to="/reactions">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Reactions
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <Button variant="ghost" asChild className="mb-6">
            <Link to="/reactions">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Reactions
            </Link>
          </Button>

          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{reaction.title}</h1>
            <p className="text-lg text-muted-foreground">{reaction.description}</p>
          </div>

          <div className="space-y-6">
            {reaction.images.map((image, index) => (
              <NotesImageViewer
                key={index}
                src={image}
                alt={`${reaction.title} - Notes ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
