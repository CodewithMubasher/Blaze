import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/system/about")({
  component: () => <div className="p-6"><h1 className="text-2xl font-bold">About</h1></div>,
})
