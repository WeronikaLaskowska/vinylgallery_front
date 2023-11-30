import React from "react";
import { useRouter } from "next/router";

export const AppHeader = () => {
  const router = useRouter();
  return (
    <header className="sticky inset-x-0 top-0 z-10 flex w-full flex-wrap  bg-white py-2.5 text-sm   sm:flex-nowrap sm:justify-start sm:py-4 pl-12">
      <nav
        className="mx-auto flex w-full basis-full items-center px-4 sm:px-6 md:px-8"
        aria-label="Global"
      >
        itsn av
      </nav>
    </header>
  );
};
