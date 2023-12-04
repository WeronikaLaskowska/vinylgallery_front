import { VinylDetailsScreen } from "@/features/admin/screens/VinylDetailsScreen";
import Head from "next/head";

const VinylByIdPage = () => {
  return (
    <>
      <Head>
        <title>Vinyl Gallery - Vinyl Details</title>
      </Head>
      <VinylDetailsScreen />
    </>
  );
};

export default VinylByIdPage;
