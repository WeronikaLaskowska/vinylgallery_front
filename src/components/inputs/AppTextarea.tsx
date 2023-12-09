import { FieldError } from "./FieldError";

interface AppTextareaProps {
  error?: string;
  id?: string;
}

export const AppTextarea = ({ error, id, ...props }: AppTextareaProps) => {
  const isError = Boolean(error);

  return (
    <>
      {isError && <FieldError error={error} />}
      <textarea
        id={id}
        {...props}
        className={
          "relative flex h-10 min-h-[78px] w-full items-center justify-center rounded-xl border  border-gray-300 bg-white p-2 pr-8 placeholder:translate-y-5 placeholder:text-center"
        }
      ></textarea>
    </>
  );
};
