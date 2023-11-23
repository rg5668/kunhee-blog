import { ChildrenProps } from '@/app/layout';

export default function Layout({ children }: ChildrenProps) {
  return (
    <div className='relative'>
      <div className='relative max-w-3xl mx-auto mb-14 -md:px-3 -md:mt-3'>{children}</div>
    </div>
  );
}
