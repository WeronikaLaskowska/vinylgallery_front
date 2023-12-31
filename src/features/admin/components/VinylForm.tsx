import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AppInputControlled } from "@/components/inputs/AppInputControlled";
import { PrimaryButton } from "@/components/inputs/PrimaryButton";
import { useFileUpload } from "@/utils/useFileUpload";
import Image from "next/image";
import {
  useAddVinylMutation,
  useEditVinylMutation,
  useVinylByIdQuery,
} from "@/query/vinyl.queries";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { AppSelectControlled } from "@/components/inputs/AppSelectControlled";
import { genresSelect, typesSelect } from "@/utils/enums";
import { AppTextareaControlled } from "@/components/inputs/AppTextareaControlled";

export type VinylSchema = z.infer<ReturnType<typeof getSchema>>;

export const VinylForm = () => {
  const schema = getSchema();
  const router = useRouter();

  const { id } = router.query;
  const { data } = useVinylByIdQuery((id as string) ?? "");

  useEffect(() => {
    if (!data) {
      reset();
      return;
    }
    data.info.year = data.info.year.toString();
    data.info.score = data.info.score.toString();
    reset(data.info);
  }, [data]);

  const { handleFileUpload, selectedImage } = useFileUpload({
    newImageSelected: (file: File) => {
      console.log(file);
    },
  });

  const addVinylMutation = useAddVinylMutation({
    onSuccess: () => {
      toast.success("Vinyl added succesfully");
      router.push("/admin/vinyl/list");
    },
  });
  const editVinylMutation = useEditVinylMutation({
    onSuccess: () => {
      toast.success("Vinyl edited succesfully");
      router.push("/admin/vinyl/list");
    },
  });

  const { control, handleSubmit, reset } = useForm<VinylSchema>({
    mode: "onBlur",
    defaultValues: {
      artist: undefined,
      type: undefined,
      name: undefined,
      year: undefined,
      score: undefined,
      description: undefined,
      genre: undefined,
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<VinylSchema> = (formData) => {
    if (id) {
      editVinylMutation.mutateAsync({
        //@ts-ignore
        image: selectedImage ? selectedImage.file : undefined,
        id: id as string,
        ...formData,
      });
      return;
    }
    if (!selectedImage) {
      toast.error("You can not add vinyl without an image");
      return;
    }

    addVinylMutation.mutateAsync({
      image: selectedImage.file as File,
      ...formData,
    });
  };

  return (
    <form
      className="flex h-full flex-col items-center justify-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-4 mt-2 text-center text-2xl text-6xl font-bold text-slate-700">
        {id ? "Edit vinyl" : "Add new Vinyl"}
      </div>
      <div className="mt-2 flex w-3/4 flex-col gap-3 lg:w-2/5">
        <div className="mb-5">
          <AppInputControlled
            control={control}
            name="artist"
            placeholder="Artist"
          />
        </div>

        <div className="mb-5">
          <AppInputControlled
            control={control}
            name="name"
            placeholder="Name"
          />
        </div>
        <div className="mb-5">
          <AppInputControlled
            control={control}
            name="year"
            placeholder="Year"
          />
        </div>
        <div className="mb-5">
          <AppInputControlled
            control={control}
            name="score"
            placeholder="Score"
          />
        </div>

        <div className="mb-5">
          <AppTextareaControlled
            control={control}
            name="description"
            placeholder="Description"
          />
        </div>

        <div className="mb-5">
          <AppSelectControlled
            control={control}
            name="genre"
            placeholder="Genre"
            data={genresSelect}
          />
        </div>
        <div className="mb-5">
          <AppSelectControlled
            control={control}
            name="type"
            placeholder="Vinyl type"
            data={typesSelect}
          />
        </div>
        {/* File input for image */}
        {!selectedImage && !data?.info?.image && (
          <div className="mb-5">
            <div
              onClick={handleFileUpload}
              className="w-full cursor-pointer h-[100px] flex justify-center items-center font-semibold text-[30px] gap-5 text-[#33673b] "
              style={{
                border: "3px solid #33673b",
                borderRadius: 15,
                boxShadow: " rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-plus-square"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
              Add Cover
            </div>
          </div>
        )}
        {data?.info?.image && !selectedImage && (
          <Image
            onClick={handleFileUpload}
            src={`http://localhost:3000/uploads/${data?.info?.image
              .replace("uploads\\", "")
              .replace("uploads", "")}`}
            alt="Image vinyl"
            width={140}
            height={140}
            className="h-[240px] w-[240px] m-auto cursor-pointer rounded-full border object-cover"
          />
        )}
        {selectedImage && (
          <Image
            onClick={handleFileUpload}
            className="h-[240px] w-[240px] m-auto cursor-pointer rounded-full border object-cover"
            alt="img"
            //@ts-ignore
            src={selectedImage?.preview}
            width={140}
            height={140}
          />
        )}
      </div>
      <div className="w-[350px] mt-10">
        <PrimaryButton
          title={id ? "Save record" : "Add record"}
          type="submit"
        />
      </div>
    </form>
  );
};

function getSchema() {
  const schema = z.object({
    artist: z
      .string()
      .min(3, "Field too small")
      .max(150, "Exceeds maximum length (150)")
      .regex(
        /^[a-zA-Z\s,]{3,150}$/,
        "Must be 3 to 150 characters and contain only letters."
      ),
    type: z.string().min(1, "Field too small"),
    name: z
      .string()
      .min(1, "Field too small")
      .max(150, "Exceeds maximum length (150)"),
    year: z
      .string()
      .max(4, "Invalid year")
      .regex(
        /^\d{1,4}$/,
        "Invalid year format. Must be digits and maximum 4 characters."
      ),
    score: z
      .string()
      .regex(
        /^([0-9](\.[0-9])?|10)$/,
        "Invalid score format. Must be a number between 0 and 10 (including decimals)."
      ),
    description: z
      .string()
      .min(1, "Field too small")
      .max(2500, "Exceeds maximum length (2500)"),
    genre: z.string().min(1, "Field too small"),
  });
  return schema;
}
