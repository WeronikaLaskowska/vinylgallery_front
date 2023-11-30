import "@/styles/globals.css";
import "@/styles/vinyl-spinner.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { NextComponentType } from "next";
import { AuthProvider } from "@/utils/AuthProvider";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount, error) => {
        if (failureCount >= 3) {
          return false;
        }
        if (isAxiosError(error)) {
          const statusCode = error.response?.status;
          if (!statusCode) {
            return true;
          }
          if (statusCode <= 500) {
            return false;
          }
          return true;
        }
        return true;
      },
    },
  },
});

type CustomAppProps = AppProps & {
  Component: NextComponentType & { auth?: { role: string } };
};

export default function App({ Component, pageProps }: CustomAppProps) {
  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          duration: 8000,
        }}
      />
      <QueryClientProvider client={queryClient}>
        <main className={`flex min-h-screen flex-col`}>
          {Component.auth ? (
            <AuthProvider role={Component.auth.role}>
              <Component {...pageProps} />
            </AuthProvider>
          ) : (
            <Component {...pageProps} />
          )}
        </main>
      </QueryClientProvider>
      <div id="modal-root" />
    </>
  );
}
