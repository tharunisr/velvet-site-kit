import { createFileRoute } from "@tanstack/react-router";
import Contact from "../pages/Contact";
import { salonConfig } from "../config/salonConfig";

const title = `Contact ${salonConfig.name} — Book a Beauty Appointment`;
const description =
  "Call, WhatsApp or send an enquiry to book hair, skincare, bridal or spa treatments. Find our address, opening hours and location map.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Contact,
});
