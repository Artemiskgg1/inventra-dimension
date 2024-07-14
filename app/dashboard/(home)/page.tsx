import Posts from "@/components/Posts";
import React, { Suspense } from "react";

function DashboardPage() {
  return (
    <main className=" flex w-full flex-grow">
      <div className="flex flex-col flex-1 gap-y-8 max-w-lg mx-auto pb-20">
        <Suspense
        //   fallback={
        //   <PostsSkeleton />
        // }
        >
          <Posts />
        </Suspense>
      </div>
    </main>
  );
}

export default DashboardPage;
