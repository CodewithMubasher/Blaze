import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/system/")({
  component: () => <div className="p-6"><h1 className="text-2xl font-bold">System Overview</h1></div>,
})
