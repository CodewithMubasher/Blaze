import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/lab/training")({
  component: () => <div className="p-6"><h1 className="text-2xl font-bold">Training</h1></div>,
})
