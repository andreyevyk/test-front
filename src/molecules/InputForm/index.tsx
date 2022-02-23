import { Input } from 'atoms/Input';
import { Inputs } from 'pages/Payment';
import { InputHTMLAttributes } from 'react';
import { Control, Controller, useFormState } from 'react-hook-form';

interface IInputForm extends InputHTMLAttributes<HTMLInputElement> {
  name: 'cardNumber' | 'cardHolder' | 'cardValidity' | 'cvv';
  control: Control<Inputs, object>;
  label: string;
  mask?: string;
}

export function InputForm({ name, control, mask, label, ...rest }: IInputForm) {
  const { errors } = useFormState({ control });
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
