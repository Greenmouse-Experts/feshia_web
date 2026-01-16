import { createFileRoute } from "@tanstack/react-router";
import EventTabs from "../-old-pages/Event";

export const Route = createFileRoute("/home/events/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <EventTabs />;
}
