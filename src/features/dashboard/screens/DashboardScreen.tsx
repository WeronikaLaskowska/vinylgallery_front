import { SlideFromRight } from "@/components/animations/SlideFromRight";
import VinylSpin from "../components/VinylSpin";
import VinylPreview from "../components/VinylPreview";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { PrimaryButton } from "@/components/inputs/PrimaryButton";

export const DashboardScreen = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="min-h-screen">
        <div className="flex flex-row">
          <VinylSpin />
          <div className="flex flex-col ml-auto justify-end mr-20 my-auto">
            <SlideFromRight isVisible>
              <div className=" text-[108px] font-bold ml-auto text-slate-700 mt-[300px] ">
                <span className="fancy">Vinyl</span>{" "}
                <span style={{ opacity: 0.5 }}>GALLERY</span>
              </div>
            </SlideFromRight>
          </div>
        </div>
      </div>
      <div className="min-h-screen grid place-items-center gap-20">
        <div className=" text-[108px] font-bold ml-auto text-slate-700 m-auto w-fit ">
          <span style={{ opacity: 0.5 }}>OUR </span>
          <span className="fancy">RECORDS </span>{" "}
        </div>

        <Fade
          onVisibilityChange={(inView) => {
            if (inView) {
              setShow(true);
            }
          }}
        >
          <div>
            <VinylPreview show={show} />
          </div>
        </Fade>
      </div>
    </>
  );
};
