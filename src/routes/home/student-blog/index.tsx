import { createFileRoute } from "@tanstack/react-router";
import StudentBlog from "../-old-pages/StudentBlog";

export const Route = createFileRoute("/home/student-blog/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <StudentBlog />
    </div>
  );
}
