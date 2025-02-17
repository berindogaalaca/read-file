import { CSSProperties } from "react";
import { UseFormReturn, FormProvider as Form } from "react-hook-form";

type Props = {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  methods: UseFormReturn<any>;
  onSubmit?: VoidFunction;
  style?: CSSProperties;
};

export default function FormProvider({
  children,
  onSubmit,
  methods,
  style,
}: Props) {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit} style={style}>
        {children}
      </form>
    </Form>
  );
}
