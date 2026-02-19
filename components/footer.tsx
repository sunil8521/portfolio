import { Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-8 border-t border-card-border">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <p className="text-sm text-muted-dark flex items-center justify-center gap-1.5">
                   Built with
                    <Heart size={14} className="text-red-400 fill-red-400" />
                    using AI
                </p>
            </div>
        </footer>
    );
}
