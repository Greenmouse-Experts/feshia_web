import { createFileRoute } from "@tanstack/react-router";
import FAQSection from "../-old-pages/Faqs";

export const Route = createFileRoute("/home/faqs/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <FAQSection />;
}
