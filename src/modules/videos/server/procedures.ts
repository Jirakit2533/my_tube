import { db } from "@/db";
import { videos } from "@/db/schema";
import { createTRPCRouter, protectedProcedure } from "@/trpc/init";
import { mux } from './../../../lib/mux';


export const videosRouter = createTRPCRouter({
  create: protectedProcedure.mutation(async ({ ctx }) => {
    const { id: userId } = ctx.user;

    const upload = await mux.video.uploads.create({
      new_asset_settings: {
        passthrough: userId,
        playback_policy: ["public"],
        mp4_support: "standard",
      },
      cors_origin: "*", //TODO: In production, set to url
    });

    const [video] =  await db
    .insert(videos)
    .values({
      userId,
      title: "Untitled",
    })
    .returning();
  
    return {
      video: video,
      url: upload.url,
    };
  }),
});