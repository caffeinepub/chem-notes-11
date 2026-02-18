import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import HomePage from './pages/HomePage';
import NamedReactionsIndexPage from './pages/NamedReactionsIndexPage';
import ReactionPage from './pages/ReactionPage';
import SiteLayout from './components/SiteLayout';

const rootRoute = createRootRoute({
  component: SiteLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const reactionsIndexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/reactions',
  component: NamedReactionsIndexPage,
});

const reactionDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/reactions/$slug',
  component: ReactionPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  reactionsIndexRoute,
  reactionDetailRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
