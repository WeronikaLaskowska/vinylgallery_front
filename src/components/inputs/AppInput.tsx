import { DetailedHTMLProps, InputHTMLAttributes, useState } from "react";
import { FieldError } from "./FieldError";
import Image from "next/image";

export interface AppInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  id: string;
  label?: string;
  error?: string;
  isPassword?: boolean;
}

export const AppInput = ({
  id,
  label,
  error,
  isPassword,
  ...props
}: AppInputProps) => {
  const isError = Boolean(error);
  const [isPasswordHidden, setIsPasswordHidden] = useState(false);

  return (
    <div className="relative flex flex-col">
      {isError && <FieldError error={error} />}
      <label className="mb-0 text-sm font-medium text-slate-800">{label}</label>
      {isPassword ? (
        <div
          className={
            "relative flex h-10 w-full items-center justify-center rounded-3xl border border-gray-300 bg-white p-1 pr-8 border-danger-500"
          }
        >
          <input
            className="ml-8 flex w-full items-center justify-center bg-white text-center text-primary-1000 outline-none placeholder:text-neutral-500"
            id={id}
            {...props}
            type={`${isPasswordHidden ? "text" : "password"}`}
          />

          <div
            onClick={() => setIsPasswordHidden(!isPasswordHidden)}
            className="absolute right-2  cursor-pointer"
          >
            {!isPasswordHidden && (
              <Image src="/eye.svg" alt="Eye" width={20} height={20} />
            )}
            {isPasswordHidden && (
              <Image src="/eyeOff.svg" alt="Eye off" width={20} height={20} />
            )}
          </div>
        </div>
      ) : (
        <input
          id={id}
          className={
            "h-10 rounded-3xl border border-gray-300 p-1 text-center text-primary-1000 outline-none placeholder:text-neutral-500 border-danger-500"
          }
          {...props}
        />
      )}
    </div>
  );
};
