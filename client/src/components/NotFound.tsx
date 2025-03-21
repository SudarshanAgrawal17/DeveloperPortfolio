import { Link } from "wouter";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-8">The page you're looking for doesn't exist.</p>
      <Link href="/">
        <a className="text-primary hover:underline">Go back home</a>
      </Link>
    </div>
  );
}