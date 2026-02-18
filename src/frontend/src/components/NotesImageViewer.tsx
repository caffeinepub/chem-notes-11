import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { ZoomIn } from 'lucide-react';

interface NotesImageViewerProps {
  src: string;
  alt: string;
}

export default function NotesImageViewer({ src, alt }: NotesImageViewerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <div className="relative cursor-pointer rounded-lg overflow-hidden border-2 border-border hover:border-primary/50 transition-all shadow-md hover:shadow-xl">
            <img
              src={src}
              alt={alt}
              className="w-full h-auto"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-primary-foreground rounded-full p-3">
                <ZoomIn className="h-6 w-6" />
              </div>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-2">
          <div className="overflow-auto max-h-[90vh]">
            <img
              src={src}
              alt={alt}
              className="w-full h-auto"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
