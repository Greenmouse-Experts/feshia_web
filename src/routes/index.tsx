import { createFileRoute, redirect } from "@tanstack/react-router";
import logo from "../logo.svg";

export const Route = createFileRoute("/")({
  component: App,
  loader: async () => {
    return redirect({
      to: "/home",
      // replace: true,
    });
  },
});

function App() {
  return <></>;
}
