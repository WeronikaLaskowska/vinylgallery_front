import { useAllVinylInfiniteQuery } from "@/query/vinyl.queries";
import VinylCard from "@/features/vinyl/components/VinylCard";
import Animate from "react-move/Animate";
import { easePolyOut } from "d3-ease";
import { useEffect, useState } from "react";
import { Vinyl } from "@/models/vinyl";
import { SlideFromRight } from "@/components/animations/SlideFromRight";
import { PrimaryButton } from "@/components/inputs/PrimaryButton";

const VinylPreview = ({ show }: { show: boolean }) => {
  const { data, isLoading } = useAllVinylInfiniteQuery({ page: 1, limit: 4 });
  const [cards, setCards] = useState<
    { left: number; bottom: number; delay: number; vinyl: Vinyl }[]
  >([]);

  useEffect(() => {
    if (data?.info) {
      setCards([
        {
          bottom: 90,
          left: -300,
          delay: 1000,
          vinyl: data?.info[0] ?? undefined,
        },
        {
          bottom: 60,
          left: -200,
          delay: 1500,
          vinyl: data?.info[1] ?? undefined,
        },
        {
          bottom: 30,
          left: -100,
          delay: 2000,
          vinyl: data?.info[2] ?? undefined,
        },
        {
          bottom: 0,
          left: 0,
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
    <div className="relative mt-20">
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
                left: card.left,
                bottom: card.bottom,
              }}
            >
              <VinylCard key={card?.vinyl._id} vinyl={card.vinyl} />
            </div>
          </SlideFromRight>
        );
      })}
    </div>
  );
};

export default VinylPreview;
