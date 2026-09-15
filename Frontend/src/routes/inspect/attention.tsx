import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/inspect/attention")({
  component: () => <div className="p-6"><h1 className="text-2xl font-bold">Attention</h1></div>,
})
