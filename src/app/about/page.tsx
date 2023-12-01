import AboutList from '@/components/abouts/AboutList';
import MainBanner from '@/components/common/MainBanner';

export default function About() {
  return (
    <div>
      <h1 className='text-lg font-bold pb-4 mb-7 text-center border-b-2 underline underline-offset-4'>About</h1>
      <MainBanner />
      <AboutList />
    </div>
  );
}
