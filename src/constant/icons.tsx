import { CgWebsite } from 'react-icons/cg';
import { FaLinkedin } from 'react-icons/fa6';
import { IoLogoGithub } from 'react-icons/io';

export default function icons({ className }: { className: string }) {
  return {
    IoLogoGithub: <IoLogoGithub className={className} />,
    FaLinkedin: <FaLinkedin className={className} />,
    CgWebsite: <CgWebsite className={className} />,
  };
}
