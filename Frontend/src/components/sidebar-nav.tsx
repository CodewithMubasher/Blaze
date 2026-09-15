import { Link } from "@tanstack/react-router"
import {
  Box,
  Dumbbell,
  Eye,
  FlaskConical,
  Info,
  Layers,
  LayoutDashboard,
  Play,
  Scissors,
  Settings,
  SlidersHorizontal,
  TrendingDown,
  TrendingUp,
  Zap,
} from "lucide-react"

import { Card } from "@/components/ui/card"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"

export function SidebarNavLeft() {
  return (
    <div className="flex h-full w-55 flex-col gap-4">
      <Card className="overflow-hidden py-0">
        <SidebarProvider className="min-h-0">
          <Sidebar collapsible="none" className="w-full bg-transparent">
            <SidebarContent className="gap-0">
              <SidebarGroup>
                <SidebarGroupLabel>LAB</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link to="/lab" className="flex items-center gap-2">
                          <LayoutDashboard />
                          Overview
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link to="/lab/playground" className="flex items-center gap-2">
                          <Play />
                          Playground
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link to="/lab/training" className="flex items-center gap-2">
                          <Dumbbell />
                          Training
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link to="/lab/model" className="flex items-center gap-2">
                          <Box />
                          Model
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link to="/lab/tokenizer" className="flex items-center gap-2">
                          <Scissors />
                          Tokenizer
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link to="/lab/experiments" className="flex items-center gap-2">
                          <FlaskConical />
                          Experiments
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
        </SidebarProvider>
      </Card>

      <Card className="mt-auto overflow-hidden py-0">
        <SidebarProvider className="min-h-0">
          <Sidebar collapsible="none" className="w-full bg-transparent">
            <SidebarContent className="gap-0">
              <SidebarGroup>
                <SidebarGroupLabel>COMPARE</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link to="/compare/models" className="flex items-center gap-2">
                          <Box />
                          Models
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link to="/compare/experiments" className="flex items-center gap-2">
                          <FlaskConical />
                          Experiments
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
        </SidebarProvider>
      </Card>
    </div>
  )
}

export function SidebarNavRight() {
  return (
    <div className="flex h-full w-55 flex-col gap-4">
      <Card className="overflow-hidden py-0">
        <SidebarProvider className="min-h-0">
          <Sidebar collapsible="none" className="w-full bg-transparent">
            <SidebarContent className="gap-0">
              <SidebarGroup>
                <SidebarGroupLabel>INSPECT</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link to="/inspect/embeddings" className="flex items-center gap-2">
                          <Layers />
                          Embeddings
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link to="/inspect/attention" className="flex items-center gap-2">
                          <Eye />
                          Attention
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link to="/inspect/activations" className="flex items-center gap-2">
                          <Zap />
                          Activations
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link to="/inspect/gradients" className="flex items-center gap-2">
                          <TrendingUp />
                          Gradients
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link to="/inspect/parameters" className="flex items-center gap-2">
                          <SlidersHorizontal />
                          Parameters
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link to="/inspect/loss" className="flex items-center gap-2">
                          <TrendingDown />
                          Loss
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
        </SidebarProvider>
      </Card>

      <Card className="mt-auto overflow-hidden py-0">
        <SidebarProvider className="min-h-0">
          <Sidebar collapsible="none" className="w-full bg-transparent">
            <SidebarContent className="gap-0">
              <SidebarGroup>
                <SidebarGroupLabel>SYSTEM</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link to="/system/settings" className="flex items-center gap-2">
                          <Settings />
                          Settings
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link to="/system/about" className="flex items-center gap-2">
                          <Info />
                          About
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
        </SidebarProvider>
      </Card>
    </div>
  )
}
