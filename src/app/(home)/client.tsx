"use clint";

import { trpc } from "@/trpc/client";

export const PageClient = () => {
  const [data] = trpc.hello.useSuspenseQuery({
    text: "Jirakit",
  });
  return (
    <div>
      Page Client says: {data.greeting}
    </div>
  );
};