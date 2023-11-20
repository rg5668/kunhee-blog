import Image from 'next/image';
import Link from 'next/link';
// 임시 이미지
import dog from '/public/dog.jpg';

export default function Post() {
  return (
    <Link
      href={'/'}
      className='w-[230px] -md:max-w-[200px] -sm:max-w-[155px] items-center border rounded-2xl scale-100 hover:scale-95 transition-all'
    >
      <div className='items-center flex-wrap flex'>
        <Image src={dog} alt={''} width={0} height={0} unoptimized={true} className='rounded-t-2xl' />
        <span className='text-base -sm:text-sm font-bold p-3'>클로저에 대해서 클로저에 대해서 클로저에 대해서</span>
        <span className='opacity-[0.7] pl-3 pb-3 -sm:text-xs'>2023.11.07</span>
      </div>
    </Link>
  );
}
