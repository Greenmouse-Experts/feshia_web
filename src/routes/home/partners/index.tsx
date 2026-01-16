import { createFileRoute } from "@tanstack/react-router";
import PARTNERS from "../-old-pages/Partner";

export const Route = createFileRoute("/home/partners/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <PARTNERS />
    </>
  );
}
