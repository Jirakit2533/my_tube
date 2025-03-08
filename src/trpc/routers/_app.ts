import { categoriesRouter } from '@/modules/categories/procedures';
import { createTRPCRouter } from '../init';
import { studioRuoter } from '@/modules/studio/server/procedures';
import { videosRuoter } from '@/modules/videos/server/procedures';

export const appRouter = createTRPCRouter({
  studio: studioRuoter,
  videos: videosRuoter,
  categories: categoriesRouter,

});
// export type definition of API
export type AppRouter = typeof appRouter;