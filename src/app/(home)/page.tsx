import { trpc } from "@/trpc/server";
import { PageClient } from "./client";

export default async function Home() { 
  void trpc.hello({ text: "Antonio" });

  return (
    <div>
      <PageClient />
    </div>
  )
};
