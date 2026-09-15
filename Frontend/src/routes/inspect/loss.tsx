import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/inspect/loss")({
  component: () => <div className="p-6"><h1 className="text-2xl font-bold">Loss</h1></div>,
})
