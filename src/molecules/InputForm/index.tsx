import { Input } from 'atoms/Input';
import { Inputs } from 'pages/Payment';
import { InputHTMLAttributes, useMemo } from 'react';
import { Control, Controller, useFormState } from 'react-hook-form';

interface IInputForm extends InputHTMLAttributes<HTMLInputElement> {
  name: 'cardNumber' | 'cardHolder' | 'cardValidity' | 'cvv';
  control: Control<Inputs, object>;
  label: string;
  mask?: string;
}

export function InputForm({ name, control, mask, label, ...rest }: IInputForm) {
  const { errors } = useFormState({ control });
  const errorMessage: string | undefined = useMemo(() => errors[name]?.message, [errors]);

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => {
        return <Input mask={mask} label={label} error={errorMessage} {...rest} {...field} />;
      }}
    />
  );
}
