import { Input } from 'atoms/Input';
import { InputHTMLAttributes } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

export interface IInputForm extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  mask?: string;
}

export function InputForm({ name, mask, label, ...rest }: IInputForm) {
  const {
    control,
    formState: { errors }
  } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => {
        return (
          <Input mask={mask} label={label} error={errors[name]?.message} {...rest} {...field} />
        );
      }}
    />
  );
}
