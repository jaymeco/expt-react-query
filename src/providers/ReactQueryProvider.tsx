'use client'

import queryClient from "@/plugins/query-client";
import { QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

export default function ReactQueryProvider({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
