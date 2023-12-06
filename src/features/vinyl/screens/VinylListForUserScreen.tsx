import FilteringComponent from "@/components/ui/FilteringComponent";
import Pagination from "@/components/ui/Pagination";
import { Spinner } from "@/components/ui/Spinner";
import VinylCard from "@/features/vinyl/components/VinylCard";
import { Vinyl } from "@/models/vinyl";
import { useAllVinylInfiniteQuery } from "@/query/vinyl.queries";
import { genresSelect } from "@/utils/enums";
import { useRouter } from "next/router";
import { useState } from "react";

export const VinylListForUserScreen = () => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [genre, setGenre] = useState("ALL");
  const { data, isLoading, isError } = useAllVinylInfiniteQuery({
    page: page,
    limit: 6,
    genre: genre === "ALL" ? undefined : genre,
  });

  if (isError) {
    return (
      <div className="grid place-items-center mt-[30vh]">
        We are having some network issues. Please try again.
      </div>
    );
  }
  //todo add query loader and error handler
  return (
    <div className="min-h-screen relative mt-10">
      <div className="mx-auto w-full lg:w-fit lg:ml-auto w-fit mr-20 mt-[100px]  lg:mt-0">
        <FilteringComponent
          options={genresSelect}
          onFilter={(gen) => {
            setGenre(gen);
          }}
        />
      </div>
      {isLoading && (
        <div className="grid place-items-center mt-[30vh]">
          <Spinner />
        </div>
      )}
      {!isLoading && (
        <div className="grid xl:grid-cols-2 2xl:grid-cols-3 mt-20">
          {data?.info?.map((vinyl: Vinyl) => {
            return (
              <VinylCard
                onClick={() => router.push(`/vinyls/${vinyl._id}`)}
                key={vinyl._id}
                vinyl={vinyl}
              />
            );
          })}
        </div>
      )}

      <div
        className=" bg-white max-w-fit absolute top-[0px] left-[30px] px-5 py-2  shadow-md "
        style={{ borderRadius: 15 }}
      >
        <Pagination
          page={page}
          setPage={(page) => {
            console.log("page change", page);
            setPage(page);
          }}
          totalPages={Math.ceil(data?.totalItems / 6)}
        />
      </div>
    </div>
  );
};
