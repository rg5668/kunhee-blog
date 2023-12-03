import { ChildrenProps } from '@/app/layout';

export default async function Layout({ children }: ChildrenProps) {
  return (
    <section className='relative max-w-3xl mx-auto mb-14 pt-20 -md:px-3 -md:mt-3 min-h-[calc(100vh-105px)] h-full'>
      {children}
    </section>
  );
}
