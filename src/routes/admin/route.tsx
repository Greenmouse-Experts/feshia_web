import { Outlet } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import AdminHeader from "./-components/AdminHeader";

export const Route = createFileRoute("/admin")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="drawer lg:drawer-open">
      <input id="admin-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <AdminHeader />
        <div className="container mx-auto p-4 min-h-screen">
          <label
            htmlFor="admin-sidebar"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <Outlet />
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="admin-sidebar"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li className="menu-title">Admin Panel</li>
          <li>
            <a>Dashboard</a>
          </li>
          <li>
            <a className="active">Routes</a>
          </li>
          <li>
            <a>Users</a>
          </li>
          <li>
            <a>Settings</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
