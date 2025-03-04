import Button from "../src/components/Button";

export default {
  title: "Components/Button",
  component: Button,
};

export const Primary = () => <Button>Primary My</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
