import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/inspect/activations")({
  component: () => <div className="p-6"><h1 className="text-2xl font-bold">Activations</h1></div>,
})
