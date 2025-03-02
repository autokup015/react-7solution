import DummyPage from "@/pages/dummy";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dummy")({
  component: DummyPage,
});
