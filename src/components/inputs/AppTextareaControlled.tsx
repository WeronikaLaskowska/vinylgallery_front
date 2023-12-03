import { AppTextarea } from "./AppTextarea";
import {
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";
import { AppInputProps } from "./AppInput";

type OmitedProps = Omit<AppInputProps, "name" | "defaultValue" | "id">;

interface AppInputControlledProps<T extends FieldValues>
  extends UseControllerProps<T>,
    OmitedProps {
  label?: string;
}

export function AppTextareaControlled<T extends FieldValues>({
  label,
  ...props
}: AppInputControlledProps<T>) {
  const { field, fieldState } = useController(props);
  return (
    <AppTextarea
      id={field.name}
      value={field.value}
      onChange={(e: any) => field.onChange(e.target.value)}
      onBlur={field.onBlur}
      error={fieldState.error?.message}
      {...props}
    />
  );
}
