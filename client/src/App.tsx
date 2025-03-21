import { Router, Route } from "wouter";
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
        <Route path="/" component={Home} />
        {/* Add other routes here */}
        <Route component={NotFound} />
      </Router>
      <Toaster />
    </QueryClientProvider>
  );
}