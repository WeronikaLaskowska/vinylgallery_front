import { useAllVinylInfiniteQuery } from "@/query/vinyl.queries";
import VinylCard from "@/features/vinyl/components/VinylCard";
import { Vinyl } from "@/models/vinyl";
import { SlideFromRight } from "@/components/animations/SlideFromRight";

const VinylPreview = ({ show }: { show: boolean }) => {
  const { data, isLoading } = useAllVinylInfiniteQuery({ page: 1, limit: 4 });

  if (isLoading) {
    return <>Loading...</>;
  }
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-[150px] place-items-center">
      {data.info.map((card: Vinyl) => {
        return (
          <SlideFromRight
            duration={0.4}
            delay={100}
            isVisible={show}
            key={card._id}
          >
            <VinylCard key={card?._id} vinyl={card} />
          </SlideFromRight>
        );
      })}
    </div>
  );
};

export default VinylPreview;
