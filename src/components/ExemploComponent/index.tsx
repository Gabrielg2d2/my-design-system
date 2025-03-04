export type TExemploComponentProps = {
  title: string;
};

export function ExemploComponent({
  title = "Hello world!",
}: TExemploComponentProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">{title}</h1>
    </div>
  );
}
