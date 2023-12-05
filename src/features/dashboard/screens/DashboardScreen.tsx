import { SlideFromRight } from "@/components/animations/SlideFromRight";
import VinylSpin from "../components/VinylSpin";
import VinylPreview from "../components/VinylPreview";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { PrimaryButton } from "@/components/inputs/PrimaryButton";
import { useRouter } from "next/router";
import VinylPreviewMobile from "../components/VinylPreviewMobile";

export const DashboardScreen = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  return (
    <>
      <div className="min-h-screen">
        <div className="flex flex-col justify-center items-center xl:flex-row">
          <VinylSpin />
          <div className="flex flex-col mt-[270px] sm:mt-[450px] xl:mt-0  xl:ml-auto xl:justify-end xl:mr-2 2xl:mr-20 my-auto">
            <SlideFromRight isVisible>
              <div className=" text-[58px] lg:text-[74px] 2xl:text-[108px] text-center font-bold ml-auto text-slate-700 mt-[300px] ">
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
          <div className="flex flex-col  3xl:flex-row  justify-between items-center mt-20 3xl:mt-0">
            <div className=" text-center text-[48px] sm:text-[58px] lg:text-[108px] font-bold  text-slate-700  w-fit 3xl:mr-auto flex flex-col ">
              <div className="flex text-center 3xl:ml-8">
                <span style={{ opacity: 0.5 }}>OUR </span>
                <span className="ml-5 ">RECORDS </span>{" "}
              </div>
              <div
                className="mt-5 text-[18px] lg:text-[24px] max-w-[850px] px-10  "
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
            <div className=" m-auto hidden 3xl:inline-flex 3xl:ml-auto">
              <VinylPreview show={show} />
            </div>
            <div className=" mt-20 m-auto inline-flex 3xl:hidden 3xl:ml-auto">
              <VinylPreviewMobile show={show} />
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};
