"use client"

import { Sidebar, SidebarContent, SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";

import Link from "next/link";
import { LogOutIcon, VideoIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { StduioSidebarHeader } from "./studio-sidebar-header";

export const StudioSidebar = () => {
  const pathname = usePathname();

  return (
    <Sidebar className="pt-16 z-40 border-none" collapsible="icon"> 
      <SidebarContent className="bg-background">
        <SidebarGroup>
          <SidebarMenu>
            <StduioSidebarHeader />
            <SidebarMenuItem>
              <SidebarMenuButton isActive={pathname === "/studio"} tooltip="Exit stuio" asChild>
                <Link href="/">
                  <VideoIcon className="size-5" />
                  <span className="text-sm">Content</span>         
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Exit stuio" asChild>
                <Link href="/">
                  <LogOutIcon className="size-5" />
                  <span className="text-sm">Exit studio</span>         
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}