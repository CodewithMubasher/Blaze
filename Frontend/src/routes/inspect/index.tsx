import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/inspect/")({
  component: () => <div className="p-6"><h1 className="text-2xl font-bold">Inspect Overview</h1></div>,
})
