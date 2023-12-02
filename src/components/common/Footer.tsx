export default function Footer() {
  return (
    <footer className='flex items-center justify-center h-12 border-t'>
      <p className='text-sm'>
        © {new Date().getFullYear()} powered by <strong>Kunhee</strong>
      </p>
    </footer>
  );
}
