interface AppButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  title: string;
  loading?: boolean;
  buttonType?: "PRIMARY" | "FADED";
}

export const PrimaryButton = ({
  title,
  loading,
  buttonType,
  className,
  ...props
}: AppButtonProps) => {
  return (
    <button
      className={`${className} ${
        buttonType === "FADED"
          ? "bg-[#a4bab7]"
          : "bg-[#33673b] hover:bg-[#559e61]"
      }   p-2 w-full text-white shadow-md transition-all font-bold text-[16px]`}
      {...props}
      style={{
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
        borderRadius: 20,
      }}
    >
      {title}
      {loading && "..."}
    </button>
  );
};
