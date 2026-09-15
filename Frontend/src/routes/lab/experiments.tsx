import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/lab/experiments")({
  component: () => <div className="p-6"><h1 className="text-2xl font-bold">Experiments</h1></div>,
})
