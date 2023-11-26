import {
  Field,
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";
import { AppInput, AppInputProps } from "./AppInput";

type OmitedProps = Omit<AppInputProps, "name" | "defaultValue" | "id">;

interface AppInputControlledProps<T extends FieldValues>
  extends UseControllerProps<T>,
    OmitedProps {
  label?: string;
}

export function AppInputControlled<T extends FieldValues>({
  label,
  ...props
}: AppInputControlledProps<T>) {
  const { field, fieldState } = useController(props);
  return (
    <AppInput
      id={field.name}
      label={label}
      value={field.value}
      onChange={(e) => field.onChange(e.target.value)}
      onBlur={field.onBlur}
      error={fieldState.error?.message}
      {...props}
    />
  );
}
