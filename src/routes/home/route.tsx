import Footer from "@/components/Footer";
import NavBar from "@/components/Header";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/home")({
  component: RouteComponent,
  notFoundComponent: () => (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="text-6xl font-bold text-gray-900">404</h1>
      <p className="mt-4 text-xl text-gray-600">
        Oops! The page you're looking for doesn't exist.
      </p>
      <a
        href="/home"
        className="mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
      >
        Back to Home
      </a>
    </div>
  ),
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
