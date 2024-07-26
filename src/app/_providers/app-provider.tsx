"use client";
import { ThemeProvider } from "@/features/theme/theme-provider";
import { AppSessionProvider } from "@/kernel/lib/next-auth/client";
import { queryClient } from "@/shared/api/query-client";
import { ComposeChildren } from "@/shared/lib/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { useState } from "react";
import { sharedApi } from "./../../kernel/lib/trpc/client";
import { publicConfig } from "@/shared/config/publick";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    sharedApi.createClient({
      links: [
        httpBatchLink({
          url: `${publicConfig.PUBLIC_URL}/trpc`,
        }),
      ],
    }),
  );

  return (
    <ComposeChildren>
      <sharedApi.Provider client={trpcClient} queryClient={queryClient}>
        <></>{" "}
      </sharedApi.Provider>
      <QueryClientProvider client={queryClient} />
      <ThemeProvider />
      <AppSessionProvider />
      {children}
    </ComposeChildren>
  );
};
