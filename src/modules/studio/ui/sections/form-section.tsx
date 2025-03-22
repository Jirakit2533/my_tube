"use client";

import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { MoreVerticalIcon } from "lucide-react";

import { trpc } from "@/trpc/client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface FromSectionProps {
  videoId: string;
}

export const FormSection = ({ videoId }: FromSectionProps) => {
  return (
    <Suspense fallback={<FormSectionSkeleton />}>
      <ErrorBoundary fallback={<p>Error</p>}>
        <FormSectionSuspence videoId={videoId} />
      </ErrorBoundary>
    </Suspense> 
  )
}

const FormSectionSkeleton = () => {
  return <p>Loading...</p>
}

const FormSectionSuspence = ({ videoId }: FromSectionProps) => {
  const [video] = trpc.studio.getOne.useSuspenseQuery({ id: videoId });

  return (
    <div className="flex items-center justify-between mb-6"> 
      <div>
        <h1 className="text=2xl font-bold">Video details</h1>
        <p className="text-xs text-muted-foreground">Manage your video details</p>
      </div>
      <div className="flex items-center gap-x-2">
        <Button type="submit" disabled={false}>
          Save
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreVerticalIcon />
            </Button>
          </DropdownMenuTrigger>
        </DropdownMenu>
      </div>
    </div>
  );
};
