import { HydrateClient, trpc } from "@/trpc/server";

import { SearchView } from "@/modules/search/ui/views/search-view";

export const dynamic = "force-dynamic";

interface PageProps {
  searchParams: Promise<{
    query: string | undefined;
    categoryId: string | undefined;
  }>
}

const Page = async ({searchParams}: PageProps) => {
  const { query, categoryId } = await searchParams;

  void trpc.categories.getMany.prefetch();
  
  return (
    <HydrateClient>
      <SearchView query={query} categoryId={categoryId} />
    </HydrateClient>
  );
};

export default Page;