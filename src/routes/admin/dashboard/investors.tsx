import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/dashboard/investors")({
  component: partnersLayout,
});

function partnersLayout() {
  return <Outlet />;
}
