import { createFileRoute } from "@tanstack/react-router";
import BookApppointment from "../-old-pages/BookApppointment";

export const Route = createFileRoute("/home/book-appointment/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <BookApppointment />
    </div>
  );
}
