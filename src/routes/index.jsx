import { createFileRoute } from "@tanstack/react-router";
import Home from "../pages/Home";
import { salonConfig } from "../config/salonConfig";

const title = `${salonConfig.name} — Luxury Beauty Parlour & Salon`;
const description =
  "Premium hair, skin, bridal and spa treatments in a calm, luxurious salon. Book your appointment today.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Home,
});
