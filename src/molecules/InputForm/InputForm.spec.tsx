import { render, RenderResult } from '@testing-library/react';
import { FormProvider, useForm, useFormState } from 'react-hook-form';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'styles/theme';
import { IInputForm, InputForm } from '.';

type IRenderComoponent = IInputForm;

const renderComponent = ({ ...rest }: IRenderComoponent): RenderResult => {
  function WrapperForm({ children }: any) {
    const methods = useForm();
    return <FormProvider {...methods}>{children}</FormProvider>;
  }
  return render(
    <ThemeProvider theme={defaultTheme}>
      <WrapperForm>
        <InputForm {...rest} />
      </WrapperForm>
    </ThemeProvider>
  );
};

describe('InputForm Molecule', () => {
  it('Should render InputForm', () => {
    const { getByText, debug } = renderComponent({
      label: 'Label Test',
      name: 'test-name'
    });

    expect(getByText('Label Test')).toBeInTheDocument();
  });
});
