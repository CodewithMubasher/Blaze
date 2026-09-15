import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/lab/playground")({
  component: () => <div className="p-6"><h1 className="text-2xl font-bold">Playground</h1></div>,
})
