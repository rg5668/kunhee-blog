import AboutList from '@/components/abouts/AboutList';
import MainBanner from '@/components/common/MainBanner';

export default function About() {
  return (
    <>
      <h1 className='pb-4 text-lg font-bold text-center underline border-b-2 mb-7 underline-offset-4'>About</h1>
      <MainBanner />
      <AboutList />
    </>
  );
}
