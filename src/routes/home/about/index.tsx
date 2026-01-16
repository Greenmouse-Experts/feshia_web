import { createFileRoute } from "@tanstack/react-router";
import AboutUs from "../-old-pages/About";

export const Route = createFileRoute("/home/about/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <AboutUs />
    </>
  );
}
