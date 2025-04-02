"use client";

import { useState } from "react";
import { PlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PlaylistsSection } from "../sections/playlists-section";
import { PlaylistCreateModal } from "../component/playlist-create-modal";

export const PlaylistsView = () => {
const [createModalOpen, setCreateModalOpen] = useState(false);

  return (
    <div className="max-w-[2400px] mx-auto mb-10 px-4 pt-2.5 flex-col gap-y-6">
      <PlaylistCreateModal 
        open={createModalOpen}
        onOpenChange={setCreateModalOpen}
      />
      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-2xl font-bold">Playlists</h1>
          <p className="text-xs text-muted-foreground">
            Collections you have created
          </p>
        </div>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={() => setCreateModalOpen(true)}
        >
          <PlusIcon />
        </Button>
      </div>
      <PlaylistsSection />
    </div>
  );
};