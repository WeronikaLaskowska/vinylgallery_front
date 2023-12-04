import { SlideFromRight } from "@/components/animations/SlideFromRight";
import VinylSpin from "../components/VinylSpin";
import VinylPreview from "../components/VinylPreview";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { PrimaryButton } from "@/components/inputs/PrimaryButton";
import { useRouter } from "next/router";

export const DashboardScreen = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();
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
      <div className="min-h-[700px] gap-20 w-full relative">
        <Fade
          onVisibilityChange={(inView) => {
            if (inView) {
              setShow(true);
            }
          }}
        >
          <div className="flex justify-between items-center">
            <div className=" text-[108px] font-bold  text-slate-700  w-fit mr-auto flex flex-col ">
              <div className="flex ml-8">
                <span style={{ opacity: 0.5 }}>OUR </span>
                <span className="ml-5">RECORDS </span>{" "}
              </div>
              <div
                className=" text-[24px] max-w-[850px] px-10  "
                style={{ opacity: 0.5 }}
              >
                Explore our curated collection of vinyl records, where music
                aficionados can discover a diverse range of classics, hidden
                gems, and contemporary favorites. Dive into our selection and
                find the perfect addition to your vinyl library.
              </div>
              <PrimaryButton
                onClick={() => router.push("/vinyls")}
                title="See all"
                className="mt-10 max-w-[350px] m-auto"
              />
            </div>
            <div className=" ml-auto">
              <VinylPreview show={show} />
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};
