import { ChildrenProps } from "@/app/layout";

export default function Layout({ children }: ChildrenProps) {
  return (
    <section className="bg-black h-full relative">
      <div className="max-w-5xl h-full mx-auto my-0 py-7">{children}</div>
    </section>
  );
}
