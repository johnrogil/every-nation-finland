import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import Maintenance from "@/pages/Maintenance";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import CityPage from "./pages/CityPage";

// Toggle maintenance mode here - set to true to show maintenance page
const MAINTENANCE_MODE = false;

function Router() {
  // If maintenance mode is enabled, show maintenance page for all routes
  if (MAINTENANCE_MODE) {
    return (
      <Switch>
        <Route path={"*"} component={Maintenance} />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/city/:citySlug"} component={CityPage} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
