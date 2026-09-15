import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/compare/")({
  component: () => <div className="p-6"><h1 className="text-2xl font-bold">Compare Overview</h1></div>,
})
