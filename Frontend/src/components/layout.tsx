import { Outlet } from "@tanstack/react-router"
import { SidebarNavLeft, SidebarNavRight } from "@/components/sidebar-nav"

export function Layout() {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-64 shrink-0 overflow-y-auto overflow-x-hidden p-6">
        <SidebarNavLeft />
      </div>
      <div className="flex-1 overflow-auto p-6">
        <Outlet />
      </div>
      <div className="w-64 shrink-0 overflow-y-auto overflow-x-hidden p-6">
        <SidebarNavRight />
      </div>
    </div>
  )
}
