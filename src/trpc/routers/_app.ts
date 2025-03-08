import { categoriesRouter } from '@/modules/categories/procedures';
import { createTRPCRouter } from '../init';
import { studioRuoter } from '@/modules/studio/server/procedures';

export const appRouter = createTRPCRouter({
  studio: studioRuoter,
  categories: categoriesRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;