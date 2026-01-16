import { createFileRoute } from "@tanstack/react-router";
import UNIVERSITYSEARCH from "../-old-pages/University";

export const Route = createFileRoute("/home/university-search/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <UNIVERSITYSEARCH />;
}
