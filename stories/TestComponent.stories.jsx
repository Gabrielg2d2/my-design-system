const TestComponent = () => {
  return (
    <div style={{ padding: "20px", backgroundColor: "lightgray" }}>
      Hello Storybook!
    </div>
  );
};

export default {
  title: "Example/TestComponent",
  component: TestComponent,
};

export const Default = () => <TestComponent />;
