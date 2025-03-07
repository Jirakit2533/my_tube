import { Sidebar, SidebarContent, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";

import { MainSection } from "./main-section";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { LogOutIcon } from "lucide-react";



export const StudioSidebar = () => {
  return (
    <Sidebar className="pt-16 z-40 border-none" collapsible="icon"> 
      <SidebarContent className="bg-background">
        <MainSection />
        <Separator />
        <SidebarMenuItem>
          <SidebarMenuButton tooltip="Exit stuio" asChild>
            <Link href="/">
              <LogOutIcon className="size-5" />
              <span className="text-sm">Exit studio</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarContent>
    </Sidebar>
  );
}