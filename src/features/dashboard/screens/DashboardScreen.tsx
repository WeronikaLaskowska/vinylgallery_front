import { SlideFromRight } from "@/components/animations/SlideFromRight";
import VinylSpin from "../components/VinylSpin";

export const DashboardScreen = () => {
  return (
    <div className="min-h-screen">
      <div className="flex flex-row">
        <VinylSpin />
        <div className="flex flex-col ml-auto justify-end mr-20 mt-20">
          <SlideFromRight isVisible>
            <div className=" text-[108px] font-bold ml-auto text-slate-700 ">
              <span className="fancy">Vinyl</span>{" "}
              <span style={{ opacity: 0.5 }}>GALLERY</span>
            </div>
          </SlideFromRight>
        </div>
      </div>
    </div>
  );
};
