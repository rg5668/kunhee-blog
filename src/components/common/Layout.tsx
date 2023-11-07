import { ChildrenProps } from "@/app/layout";

export default function Layout({ children }: ChildrenProps) {
  return (
    <section className="relative">
      <div className="max-w-3xl mx-auto my-0 p-4">{children}</div>
    </section>
  );
}
