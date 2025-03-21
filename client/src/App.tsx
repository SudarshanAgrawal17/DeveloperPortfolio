import { Router, Route, Switch } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/components/NotFound";
import Home from "@/pages/Home";
import Navigation from "@/components/Navigation";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
      <Router base="/DeveloperPortfolio">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/DeveloperPortfolio" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Router>
      <Toaster />
    </QueryClientProvider>
  );
}