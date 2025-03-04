import { ExemploComponent, TExemploComponentProps } from ".";

export default {
  title: "ExemploComponent",
  component: ExemploComponent,
};

export const Default = (args: TExemploComponentProps) => (
  <ExemploComponent {...args} />
);
