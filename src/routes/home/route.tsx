import Footer from "@/components/Footer";
import NavBar from "@/components/Header";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/home")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <NavBar></NavBar>
      <Outlet />
      <Footer />
    </>
  );
}
