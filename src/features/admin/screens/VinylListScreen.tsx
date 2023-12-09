import { PrimaryButton } from "@/components/inputs/PrimaryButton";
import Pagination from "@/components/ui/Pagination";
import { Spinner } from "@/components/ui/Spinner";
import VinylCard from "@/features/vinyl/components/VinylCard";
import { Vinyl } from "@/models/vinyl";
import {
  useAllVinylInfiniteQuery,
  useDeleteVinylMutation,
} from "@/query/vinyl.queries";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState } from "react";

export const VinylListScreen = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useAllVinylInfiniteQuery({
    page: page,
    limit: 6,
  });

  const deleteVinylMutation = useDeleteVinylMutation({
    onSuccess: () => {
      //@ts-ignore
      queryClient.invalidateQueries(["vinyls", page]);
    },
  });
  const handleStartVinylDelete = (id: string) => {
    const found = data.info.find((vinyl: Vinyl) => vinyl._id === id);
    if (!found) {
      return;
    }
    const response = confirm(
      "Are you sure you want to delete vinyl " + found.name + "?"
    );
    if (response) {
      deleteVinylMutation.mutateAsync(id);
    }
  };

  if (isError) {
    return (
      <div className="grid place-items-center mt-[30vh]">
        We are having some network issues. Please try again.
      </div>
    );
  }

  //todo add query loader and error handler
  return (
    <div className="min-h-screen relative">
      <PrimaryButton
        onClick={() => router.push("/admin/vinyl/add")}
        title="+ ADD NEW RECORD"
        className="max-w-[350px] m-auto mt-20 sm:mt-10 mb-10 grid place-items-center"
      />
      {isLoading && (
        <div className="grid place-items-center mt-[30vh]">
          <Spinner />
        </div>
      )}
      {!isLoading && (
        <div className="grid xl:grid-cols-2 2xl:grid-cols-3">
          {data?.info?.map((vinyl: Vinyl) => {
            return (
              <VinylCard
                key={vinyl._id}
                vinyl={vinyl}
                handleVinylDelete={(id: string) => handleStartVinylDelete(id)}
                handleVinylEdit={(id: string) =>
                  router.push(`/admin/vinyl/add?id=${id}`)
                }
              />
            );
          })}
        </div>
      )}

      <div
        className=" bg-white max-w-fit absolute -top-[70px] sm:top-[0px] left-[30px] px-5 py-2  shadow-md"
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
