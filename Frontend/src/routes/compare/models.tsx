import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/compare/models")({
  component: () => <div className="p-6"><h1 className="text-2xl font-bold">Models</h1></div>,
})
