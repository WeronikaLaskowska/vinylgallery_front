import VinylCard from "@/features/vinyl/components/VinylCard";
import { Vinyl } from "@/models/vinyl";
import { useAllVinylInfiniteQuery } from "@/query/vinyl.queries";

export const VinylListScreen = () => {
  const { data } = useAllVinylInfiniteQuery({ page: 1, limit: 2 });
  return (
    <div className="min-h-screen">
      <div className="flex flex-col">
        {data?.info?.map((vinyl: Vinyl) => {
          return <VinylCard key={vinyl._id} vinyl={vinyl} />;
        })}
      </div>
    </div>
  );
};
