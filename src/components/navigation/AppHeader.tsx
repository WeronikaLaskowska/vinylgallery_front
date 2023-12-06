import React from "react";
import { useRouter } from "next/router";
import { useAuthStore } from "@/stores/auth-store";
import { useQueryClient } from "@tanstack/react-query";

export const AppHeader = () => {
  const router = useRouter();
  console.log(router);
  const setToken = useAuthStore((state) => state.setToken);
  const queryClient = useQueryClient();

  const handleLogout = () => {
    setToken(null);
    queryClient.clear();
    router.push("/auth/login");
  };
  return (
    <header className="sticky inset-x-0 top-0 z-10 flex w-full flex-wrap  bg-white py-2.5 text-sm   sm:flex-nowrap sm:justify-start sm:py-4 pl-12">
      <nav
        className="mx-auto flex w-full basis-full items-center px-4 sm:px-6 md:px-8 gap-10"
        aria-label="Global"
      >
        <div
          onClick={() => router.push("/admin/vinyl/list")}
          className={`cursor-pointer font-bold ${
            router.pathname.includes("vinyl")
              ? "text-primary-500 underline"
              : ""
          }`}
        >
          Vinyls
        </div>
        {/* <div
          className={`cursor-pointer font-bold ${
            router.pathname.includes("blog") ? "text-primary-500 underline" : ""
          }`}
        >
          Blog
        </div> */}
      </nav>
      <div onClick={handleLogout} className="cursor-pointer mr-10">
        Logout
      </div>
    </header>
  );
};
