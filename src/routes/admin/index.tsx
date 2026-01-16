import { Outlet, redirect } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import AdminHeader from "./-components/AdminHeader";

export const Route = createFileRoute("/admin/")({
  component: RouteComponent,
  // loader: () => {
  //   return redirect({ to: "/admin/dashboard" });
  // },
});

function RouteComponent() {
  return <>soso</>;
}
