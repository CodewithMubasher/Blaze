import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/inspect/parameters")({
  component: () => <div className="p-6"><h1 className="text-2xl font-bold">Parameters</h1></div>,
})
