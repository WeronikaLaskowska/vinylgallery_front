import { LoginScreen } from "@/features/auth/screens/LoginScreen";
import Head from "next/head";

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Vinyl Gallery - Admin Panel</title>
      </Head>
      <LoginScreen />
    </>
  );
}

LoginPage.auth = {
  role: "AUTH",
};
