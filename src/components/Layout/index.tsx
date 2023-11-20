import { ChildrenProps } from '@/app/layout';

export default function Layout({ children }: ChildrenProps) {
  return (
    <div className='relative'>
      <div className='relative max-w-3xl mx-auto mt-3 mb-14 pt-4 -md:px-3'>{children}</div>
    </div>
  );
}
