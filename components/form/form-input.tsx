import { ComponentPropsWithoutRef } from "react";
import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";

import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

type FormInputProps<TFieldValues extends FieldValues> = {
  control: Control<TFieldValues>;
  name: FieldPath<TFieldValues>;
  label?: string;
  description?: string;
} & Omit<
  ComponentPropsWithoutRef<typeof Input>,
  "name" | "value" | "onChange" | "onBlur" | "ref"
>;

export function FormInput<TFieldValues extends FieldValues>({
  control,
  name,
  label,
  description,
  ...inputProps
}: FormInputProps<TFieldValues>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          {label && <FieldLabel htmlFor={field.name}>{label}</FieldLabel>}
          <Input
            {...field}
            {...inputProps}
            id={field.name}
            aria-invalid={fieldState.invalid}
          />
          {description && <FieldDescription>{description}</FieldDescription>}
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}
