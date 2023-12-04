import { useVinylByIdQuery } from "@/query/vinyl.queries";
import { useRouter } from "next/router";
import Image from "next/image";
import { Spinner } from "@/components/ui/Spinner";

export const VinylDetailsScreen = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useVinylByIdQuery((id as string) ?? "");
  if (!data) {
    return <Spinner />;
  }
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div
        className="w-[1400px] h-[700px] bg-white shadow-md m-auto relative"
        style={{ borderRadius: 20 }}
      >
        <div className="flex ">
          <div className="w-1/2">
            {data?.info?.image && (
              <Image
                src={`http://localhost:3000/uploads/${data?.info?.image.replace(
                  "uploads\\",
                  ""
                )}`}
                alt="Image vinyl"
                fill
                style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
                className=" max-h-[700px] max-w-[700px] mr-auto  rounded-[20px] border object-cover"
              />
            )}
            <div
              style={{ borderTopLeftRadius: 20 }}
              className="w-[100px] h-[100px] absolute top-0 right-0 bg-white text-[48px] shadow-md grid place-items-center border "
            >
              {data.info.score}
            </div>
          </div>
          <div className="p-10 flex flex-col">
            <div className="text-[48px] text-slate-700 font-bold">
              {data.info.name}{" "}
              <span className="opacity-50 ml-2">({data.info.year})</span>{" "}
            </div>
            <div className=" flex justify-between items-center">
              <div className="text-[24px] text-slate-500 font-bold">
                {data.info.artist}
              </div>
              <div className="text-[24px] text-slate-700 opacity-50  font-bold ">
                {data.info.genre}
              </div>
            </div>
            <div
              className="max-w-[600px] max-h-[400px] mt-10 text-[18px]"
              style={{ overflow: "auto" }}
            >
              {data.info.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
