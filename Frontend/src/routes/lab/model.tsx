import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/lab/model")({
  component: () => <div className="p-6"><h1 className="text-2xl font-bold">Model</h1></div>,
})
