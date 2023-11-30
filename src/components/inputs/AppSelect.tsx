import React from "react";

import Select from "react-select";
import { FieldError } from "./FieldError";

type Data = {
  label: string;
  value: string;
};

export interface AppSelectProps {
  id: string;
  value?: string;
  data: Data[];
  onChange: (values: string) => void;
  onBlur?: () => void;
  error?: string;
  label?: string;
  placeholder?: string;
}
export function AppSelect({
  id,
  data,
  value = undefined,
  onChange,
  onBlur,
  error,
  label,
  placeholder,
}: AppSelectProps) {
  const isError = Boolean(error);
  return (
    <div className="relative">
      {isError && <FieldError error={error} />}
      {label ? (
        <label className="mb-2 text-sm font-medium text-slate-800">
          {label}
        </label>
      ) : null}
      <Select<Data, false>
        name={id}
        instanceId={id}
        placeholder={placeholder}
        value={data.find((item) => item.value === value)}
        onChange={(e) => {
          if (e?.value) {
            onChange(e.value);
          }
        }}
        onBlur={onBlur}
        options={data}
        className="basic-multi-select"
        classNamePrefix="select"
      />
    </div>
  );
}
