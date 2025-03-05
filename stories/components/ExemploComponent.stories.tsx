import React from "react";
import {
  ExemploComponent,
  TExemploComponentProps,
} from "../../src/components/ExemploComponent";

export default {
  title: "ExemploComponent",
  component: ExemploComponent,
};

export const Default = (args: TExemploComponentProps) => (
  <ExemploComponent {...args} />
);
