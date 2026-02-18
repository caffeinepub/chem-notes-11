import { Outlet, Link, useRouterState } from '@tanstack/react-router';
import { BookOpen, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SiteLayout() {
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold text-foreground hover:text-primary transition-colors">
              <BookOpen className="h-6 w-6" />
              <span>Chem Notes 11</span>
            </Link>
            <div className="flex items-center gap-2">
              <Button
                variant={currentPath === '/' ? 'default' : 'ghost'}
                size="sm"
                asChild
              >
                <Link to="/">
                  <Home className="h-4 w-4 mr-2" />
                  Home
                </Link>
              </Button>
              <Button
                variant={currentPath.startsWith('/reactions') ? 'default' : 'ghost'}
                size="sm"
                asChild
              >
                <Link to="/reactions">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Named Reactions
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-border bg-card/30 mt-auto">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Chem Notes 11. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Built with <span className="text-destructive">♥</span> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'chem-notes-11')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-foreground transition-colors underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
