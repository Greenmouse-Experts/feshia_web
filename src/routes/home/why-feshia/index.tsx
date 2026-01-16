import { createFileRoute } from "@tanstack/react-router";
import WhyFeshia from "../-old-pages/WhyFeshia";

export const Route = createFileRoute("/home/why-feshia/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <WhyFeshia />;
}
