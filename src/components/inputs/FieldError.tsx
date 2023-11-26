interface FieldErrorProps {
  error: string | undefined;
}

export const FieldError = ({ error }: FieldErrorProps) => {
  return (
    <div className="0 absolute bottom-[-20px] left-1/2 z-10 min-w-[350px] -translate-x-1/2  rounded-xl bg-danger-400  shadow">
      <div className="font-regular text-center text-sm text-neutral-100">
        {error}
      </div>
    </div>
  );
};
