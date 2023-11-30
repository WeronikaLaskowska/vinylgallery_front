import { AppHeader } from "@/components/navigation/AppHeader";
import React, { ReactNode, useState } from "react";

interface AdminLayoutProps {
  children: ReactNode;
}

export const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div className="bg-white-50">
      <AppHeader />
      <div>{children}</div>
    </div>
  );
};
