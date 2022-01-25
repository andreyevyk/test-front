import { Input } from 'atoms/Input';
import { InputHTMLAttributes, useMemo } from 'react';
import { Control, Controller, FieldValues, useFormState } from 'react-hook-form';

interface IInputForm extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control: Control<FieldValues, object> | undefined;
  label: string;
  mask?: string;
}

export function InputForm({ name, control, mask, label, ...rest }: IInputForm) {
  const { errors } = useFormState({ control });
  const errorMessage: string = useMemo(() => errors[name]?.message, [errors]);

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <Input mask={mask} label={label} error={errorMessage} {...field} {...rest} />
      )}
    />
  );
}
