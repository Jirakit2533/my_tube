import { usersRouter } from '@/modules/users/server/procedures';
import { searchRouter } from '@/modules/search/server/procedures';
import { studioRouter } from '@/modules/studio/server/procedures';
import { videosRouter } from '@/modules/videos/server/procedures';
import { commentsRouter } from '@/modules/comments/server/procedures';
import { playlistsRouter } from '@/modules/playlist/server/procedures';
import { categoriesRouter } from '@/modules/categories/procedures';
import { videoViewsRouter } from '@/modules/video-views/server/procedures';
import { suggestionsRouter } from '@/modules/suggestions/server/procedures';
import { subscriptionsRouter } from '@/modules/subscriptions/server/procedures';
import { videoReactionsRouter } from '@/modules/video-reactions/server/procedures';
import { commentReactionsRouter } from '@/modules/comment-reactions/procedures';

import { createTRPCRouter } from '../init';


export const appRouter = createTRPCRouter({
  users: usersRouter,
  search: searchRouter,
  studio: studioRouter,
  videos: videosRouter,
  comments: commentsRouter,
  playlists: playlistsRouter,
  categories: categoriesRouter,
  videoViews: videoViewsRouter,
  suggestions: suggestionsRouter,
  subscriptions: subscriptionsRouter,
  videoReactions: videoReactionsRouter,
  commentReactions: commentReactionsRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;