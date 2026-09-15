import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  component: () => (
    <div className="flex items-center justify-center h-full">
      <h1 className="text-2xl font-bold text-muted-foreground">Select a section to begin</h1>
    </div>
  ),
})
