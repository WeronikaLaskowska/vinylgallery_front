import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AppInputControlled } from "@/components/inputs/AppInputControlled";
import { PrimaryButton } from "@/components/inputs/PrimaryButton";

export type LoginSchema = z.infer<ReturnType<typeof getSchema>>;

export const LoginForm = () => {
  const schema = getSchema();
  const router = useRouter();

  //   const setUserId = useAuthStore((state) => state.setUserId);

  const { control, handleSubmit } = useForm<LoginSchema>({
    mode: "onBlur",
    defaultValues: {
      email: undefined,
      pin: undefined,
    },
    resolver: zodResolver(schema),
  });
  //   const mutation = useLoginMutation({
  //     onSuccess: (data) => {
  //       setToken(data?.data?.accessToken);
  //       setUserId(data?.data?.userId);
  //       router.push("/users/users-list");
  //     },
  //   });

  const onSubmit: SubmitHandler<LoginSchema> = (formData) => {
    console.log(formData, "@");
    // mutation.mutate({
    //   email: formData.email,
    //   pin: formData.pin,
    // });
  };

  return (
    <form
      className="flex h-full flex-col items-center justify-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-4 mt-2 text-center text-2xl text-6xl font-bold	text-slate-700	">
        Vinyl Gallery
      </div>
      <div className="mb-6  text-center text-2xl font-bold text-[#a4bab7]">
        Administration Panel
      </div>
      <div className="mt-2 flex w-3/4 flex-col  gap-3 lg:w-2/5">
        <div className="mb-5">
          <AppInputControlled
            control={control}
            name="email"
            placeholder={"Email"}
          />
        </div>

        <div className="mb-5">
          <AppInputControlled
            control={control}
            name="pin"
            type="password"
            placeholder={"Password"}
            isPassword
          />
        </div>
      </div>
      <div className="w-[350px] mt-10">
        <PrimaryButton
          title={"Login"}
          type="submit"
          //   loading={mutation.isLoading}
        />
      </div>
    </form>
  );
};

function getSchema() {
  const schema = z.object({
    email: z.string().min(1, "Field too small"),
    // .regex(/^(?:\d{9}|[^\s@]+@[^\s@]+\.[^\s@]+)$/, "Invalid contact format"),
    pin: z.string().min(8, "Field too small"),
  });
  return schema;
}
