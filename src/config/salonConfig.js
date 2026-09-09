// Central salon configuration — replace these placeholder values for each client.
export const salonConfig = {
  name: "Maison Élan",
  tagline: "Beauty Atelier",
  logoInitials: "MÉ",
  email: "hello@maisonelan-demo.com",
  phone: "+1 (555) 010-2288",
  phoneHref: "+15550102288",
  whatsapp: "15550102288", // digits only, international format
  whatsappMessage: "Hello, I would like to know more about your beauty services.",
  address: {
    line1: "18 Rosewood Avenue, Suite 200",
    line2: "Beverly Gardens, CA 90210",
  },
  openingHours: [
    { days: "Monday – Friday", time: "9:00 AM – 8:00 PM" },
    { days: "Saturday", time: "9:00 AM – 7:00 PM" },
    { days: "Sunday", time: "10:00 AM – 5:00 PM" },
  ],
  // Replace with the client's own Google Maps embed URL.
  mapEmbedUrl:
    "https://www.google.com/maps?q=Beverly+Hills,+CA&output=embed",
  mapDirectionsUrl: "https://www.google.com/maps?q=Beverly+Hills,+CA",
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "Pinterest", href: "https://pinterest.com" },
    { label: "TikTok", href: "https://tiktok.com" },
  ],
  stats: [
    { value: "12+", label: "Years of experience" },
    { value: "8,500+", label: "Happy clients" },
    { value: "20", label: "Professional experts" },
  ],
};

export const whatsappLink = () =>
  `https://wa.me/${salonConfig.whatsapp}?text=${encodeURIComponent(
    salonConfig.whatsappMessage,
  )}`;

export const callLink = () => `tel:${salonConfig.phoneHref}`;

export const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
