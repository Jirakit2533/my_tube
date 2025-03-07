import Link from "next/link";
import Image from "next/image";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { AuthButton } from "@/modules/auth/ui/components/auth-button";


export const StudioNavbar = () => { 
  return (
    <nav className="fixed w-full top-0 left-0 h-16 bg-white flex items-center px-2 pr-5 z-50">
      <div className="flex items-center gap-4 w-full">
        {/* Slide Menu and Logo */}
        <div className="flex items-center flex-shrink-0">
          <SidebarTrigger />
            <Link href="/studio">
              <div className="p-4 flex items-center gap-1">
                <Image src="/logo.svg" alt="Logo" height={32} width={32} />
                <p className="text-xl font-semibold tracking-tight">MyStudio</p>
              </div>  
            </Link>
          </div>

          {/* Spacer */}
          <div className="flex-1"></div>
          
        <div className="flex-shrink-0 items-center gap-4 z-30">
          {/* Add header icons as needed */}
          <AuthButton />     
        </div>
      </div>
    </nav>
  );
};
