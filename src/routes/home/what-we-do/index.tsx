import { createFileRoute } from "@tanstack/react-router";
import WhatWeDo from "../-old-pages/WhatWeDo";

export const Route = createFileRoute("/home/what-we-do/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <WhatWeDo />;
}
