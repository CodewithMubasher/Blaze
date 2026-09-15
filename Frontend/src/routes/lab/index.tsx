import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/lab/")({
  component: () => <div className="p-6"><h1 className="text-2xl font-bold">Lab Overview</h1></div>,
})
