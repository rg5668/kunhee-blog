import { ChildrenProps } from "@/app/layout";

export default function Layout({ children }: ChildrenProps) {
  return (
    <div className="relative">
      <div className="max-w-3xl mx-auto my-2 pt-4">{children}</div>
    </div>
  );
}
