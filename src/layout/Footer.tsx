import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-8 mt-20">
      <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
        <p className="flex items-center justify-center gap-1">
          © Copyright {new Date().getFullYear()} powered by Vignesh V
        </p>
      </div>
    </footer>
  );
}
