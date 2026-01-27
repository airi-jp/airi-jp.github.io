import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AlertCircle, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-4">
      <div className="glass-card p-12 rounded-3xl text-center space-y-6 max-w-md w-full border-2 border-primary/10">
        <div className="w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center mx-auto text-destructive">
          <AlertCircle className="w-10 h-10" />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-4xl font-display text-foreground">404</h1>
          <p className="text-muted-foreground">
            Oops! This page seems to be missing from my world.
          </p>
        </div>

        <Link href="/">
          <Button className="w-full rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground">
            <Home className="mr-2 h-4 w-4" />
            Go back home
          </Button>
        </Link>
      </div>
    </div>
  );
}
