import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/inspect/embeddings")({
  component: () => <div className="p-6"><h1 className="text-2xl font-bold">Embeddings</h1></div>,
})
