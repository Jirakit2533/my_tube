"use client";

import { ClapperboardIcon, UserCircleIcon } from "lucide-react";
import { UserButton, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";


export const AuthButton = () => {
  const pathname = usePathname();
  const isStudioPage = pathname === "/studio";
  // TODO: Add different auth states
  return (
    <>
      <SignedIn>
      {/* {!isStudioPage && (
          <Button asChild variant="secondary">
            <Link href="/studio">
              <ClapperboardIcon />
              Studio
            </Link>
          </Button>
        )} */}
        <UserButton>
          <UserButton.MenuItems>
            {/* TODO: Add user profile menu button */}
          {!isStudioPage && (
            <UserButton.Link 
              label="Studio"
              href="/studio"
              labelIcon={<ClapperboardIcon className="size-4" />}
            />
          )}
            <UserButton.Action label="manageAccount"
            />
          </UserButton.MenuItems>
        </UserButton>  
        {/* Add menu items for Studio and User profile */}
      </SignedIn>
      <SignedOut>   
        <SignInButton mode="modal">
          <Button 
            variant="outline"
            className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 border-blue-500/20 rounded-full shadow-none"
          >
            <UserCircleIcon />
              Sign in
          </Button>
        </SignInButton>  
      </SignedOut>
    </>
  );
}