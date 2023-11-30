import { VinylAddScreen } from "@/features/admin/screens/VinylAddScreen";
import { VinylListScreen } from "@/features/admin/screens/VinylListScreen";
import { AdminLayout } from "@/layout/AdminLayout";
import Head from "next/head";

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Vinyl Gallery - Admin Panel</title>
      </Head>
      <AdminLayout>
        <VinylAddScreen />
      </AdminLayout>
    </>
  );
}

LoginPage.auth = {
  role: "ADMIN",
};
