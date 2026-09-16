import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/portfolio-page";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Refilwe Thando Tladi | Technology Portfolio" },
      { name: "description", content: "Explore Refilwe Thando Tladi’s portfolio, skills, education and growing work in full-stack and AI development." },
      { property: "og:title", content: "Refilwe Thando Tladi | Technology Portfolio" },
      { property: "og:description", content: "A professional portfolio showcasing Refilwe’s skills, learning journey and career interests in technology." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});
