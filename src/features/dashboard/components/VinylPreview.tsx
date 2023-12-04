import { useAllVinylInfiniteQuery } from "@/query/vinyl.queries";
import VinylCard from "@/features/vinyl/components/VinylCard";
import { useEffect, useState } from "react";
import { Vinyl } from "@/models/vinyl";
import { SlideFromRight } from "@/components/animations/SlideFromRight";

const VinylPreview = ({ show }: { show: boolean }) => {
  const { data, isLoading } = useAllVinylInfiniteQuery({ page: 1, limit: 4 });
  const [cards, setCards] = useState<
    { right: number; top: number; delay: number; vinyl: Vinyl }[]
  >([]);

  useEffect(() => {
    if (data?.info) {
      setCards([
        {
          top: 0,
          right: 100,
          delay: 1000,
          vinyl: data?.info[0] ?? undefined,
        },
        {
          top: 60,
          right: 200,
          delay: 1500,
          vinyl: data?.info[1] ?? undefined,
        },
        {
          top: 80,
          right: 300,
          delay: 2000,
          vinyl: data?.info[2] ?? undefined,
        },
        {
          top: 120,
          right: 500,
          delay: 2500,
          vinyl: data?.info[3] ?? undefined,
        },
      ]);
    }
  }, [data]);

  if (isLoading) {
    return <>Loading...</>;
  }
  return (
    <>
      {cards.map((card) => {
        return (
          <SlideFromRight
            duration={0.4}
            delay={card.delay}
            isVisible={show}
            key={card.vinyl._id}
          >
            <div
              style={{
                position: "absolute",
                right: card.right,
                top: card.top,
                bottom: "unset",
              }}
            >
              <VinylCard key={card?.vinyl._id} vinyl={card.vinyl} />
            </div>
          </SlideFromRight>
        );
      })}
    </>
  );
};

export default VinylPreview;
