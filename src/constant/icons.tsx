import { CgWebsite } from 'react-icons/cg';
import { FaLinkedin } from 'react-icons/fa6';
import { IoLogoGithub } from 'react-icons/io';
import { MdOutlineEmail } from 'react-icons/md';

export default function icons({ className }: { className: string }) {
  return {
    IoLogoGithub: <IoLogoGithub className={className} />,
    FaLinkedin: <FaLinkedin className={className} />,
    CgWebsite: <CgWebsite className={className} />,
    MdOutlineEmail: <MdOutlineEmail className={className} />,
  };
}
