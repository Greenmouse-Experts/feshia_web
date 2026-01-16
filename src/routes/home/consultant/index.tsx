import { createFileRoute } from "@tanstack/react-router";
import ConsultationForm from "../-old-pages/Consultant";

export const Route = createFileRoute("/home/consultant/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <ConsultationForm />;
}
