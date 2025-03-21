"use client"

import Link from "next/link";
import { Suspense } from "react";
import { trpc } from "@/trpc/client";
import { ErrorBoundary } from "react-error-boundary";
import { InfiniteScroll } from "@/components/infinite-scroll"; // Ensure this import is correct
import { VideoThumbnail } from "@/modules/videos/ui/video-thumbnail";
import { DEFAULT_LIMIT } from "@/constants";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const VideosSection = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ErrorBoundary fallback={<p>Error</p>}>
        <VideoSectionSuspense />
      </ErrorBoundary>
    </Suspense>
  )
};

export const VideoSectionSuspense = () => {
 const [videos, query] = trpc.studio.getMany.useSuspenseQuery({
  limit: DEFAULT_LIMIT,
 }, {
    getNextPageParam: (lastPage) => lastPage.nextCursor,
 });

  return (
    <div>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="pl-6 w-[510px]">Video</TableHead>
              <TableHead>Visibility</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Views</TableHead>
              <TableHead className="text-right">Comments</TableHead>
              <TableHead className="text-right pr-6">Likes</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* {videos.pages.map((page) => page.items.map((video) => ( */}
            {videos.items.map((video) => (
              <Link href={`/studio/videos${video.id}`} key={video.id} legacyBehavior>
                <TableRow className="cursor-pointer">
                  <TableCell>
                    <div className="flex items-center gap-4">
                      <div className="relative aspect-video w-36 shrink-0">
                        <VideoThumbnail 
                        imageUrl={video.thumbnailUrl}
                        previewUrl={video.previewUrl}
                        title={video.title}
                        duration={video.duration || 0}
                      />
                      </div>
                      <div className="flex flex-col overflow-hidden gap-y-1"> 
                        <span className="text-sm line-clamp-1">{video.title}</span>
                        <span className="text-xs text-muted-forground line-clamp-1">
                          {video.description || "No description"}
                        </span>                        
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    Visibility
                  </TableCell>
                  <TableCell>
                    Status
                  </TableCell>
                  <TableCell>
                    Date
                  </TableCell>
                  <TableCell>
                    Views
                  </TableCell>
                  <TableCell>
                    Comments
                  </TableCell>
                  <TableCell>
                    Likes
                  </TableCell>
                </TableRow>
              </Link>
            ))}
          </TableBody>
        </Table>
      </div>
      <InfiniteScroll 
        isManual
        hasNextPage={query.hasNextPage}
        isFetchingNextPage={query.isFetchingNextPage}
        fetchNextPage={query.fetchNextPage}
      />
    </div>
  );
};