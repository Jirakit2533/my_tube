import { useAuth, useClerk } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { UserAvatar } from "@/components/user-avatar";

import { UserGetOneOutput } from "../../type";
import Link from "next/link";

interface UserPageIngoProps {
  user: UserGetOneOutput;
};

export const UserPageInfo = ({ user }: UserPageIngoProps) => {
  const { userId } = useAuth();
  const clerk = useClerk();

  return (
    <div className="py-6">
      {/* Mobile layout */}
      <div className="flex flex-col md:hidden">
        <div className="flex items-center gap-3">
          <UserAvatar 
            size="lg" 
            imageUrl={user.imageUrl}
            name={user.name}
            className="h-[60px] w-[60px]"
            onClick={() => {
              if (user.clerkId === userId) {
                clerk.openUserProfile();
              }
            }}
          />
          <div className="flex-1 min-w-0">
            <h1 className="text-xl font-bold">{user.name}</h1>
            <div className="flex items-center gap-1 text-muted-foreground mt-1">
              <span>{user.subscriberCount} subscribers</span>
              <span>•</span>
              <span>{user.videoCount} videos</span>
            </div>
          </div>
        </div>
        {userId === user.clerkId && (
          <Button
            variant="secondary"
            asChild
            className="w-full mt-3 rounded-full"
          >
            <Link href="/studio">Fo to studio</Link>
          </Button>
        )}
      </div>
    </div>
  );
};