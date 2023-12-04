import { VinylListForUserScreen } from "@/features/vinyl/screens/VinylListForUserScreen";
import Head from "next/head";

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Vinyl Gallery - Vinyl List</title>
      </Head>{" "}
      <VinylListForUserScreen />
    </>
  );
}
