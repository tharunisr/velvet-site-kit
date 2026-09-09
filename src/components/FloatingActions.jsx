import { Phone, MessageCircle } from "lucide-react";
import { callLink, whatsappLink } from "../config/salonConfig";

export default function FloatingActions() {
  return (
    <div className="fixed right-4 bottom-5 z-50 flex flex-col gap-3 sm:right-6">
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="animate-float-soft grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-luxe transition-transform duration-300 hover:scale-110"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
      <a
        href={callLink()}
        aria-label="Call the salon"
        className="grid h-12 w-12 place-items-center rounded-full border border-gold/50 bg-card text-foreground shadow-soft transition-transform duration-300 hover:scale-110"
      >
        <Phone className="h-5 w-5" />
      </a>
    </div>
  );
}
