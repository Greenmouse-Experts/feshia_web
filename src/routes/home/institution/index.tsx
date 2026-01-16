import { createFileRoute } from "@tanstack/react-router";
import ProgramSearch from "../-old-pages/Program";

export const Route = createFileRoute("/home/institution/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <ProgramSearch />;
}
