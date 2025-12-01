import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";

type FormTextareaProps<TFieldValues extends FieldValues> = {
  control: Control<TFieldValues>;
  name: FieldPath<TFieldValues>;
  label?: string;
  description?: string;
} & Omit<
  React.ComponentPropsWithoutRef<typeof Textarea>,
  "name" | "value" | "onChange" | "onBlur" | "ref"
>;

export function FormTextarea<TFieldValues extends FieldValues>({
  control,
  name,
  label,
  description,
  ...textareaProps
}: FormTextareaProps<TFieldValues>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          {label && <FieldLabel htmlFor={field.name}>{label}</FieldLabel>}
          <Textarea
            {...field}
            {...textareaProps}
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
