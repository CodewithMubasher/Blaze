import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/inspect/gradients")({
  component: () => <div className="p-6"><h1 className="text-2xl font-bold">Gradients</h1></div>,
})
