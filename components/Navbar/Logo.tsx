import Link from "next/link";
import { IconType } from "react-icons";

interface LogoProps {
  logo: IconType;
}

const Logo = ({ logo: Icon }: LogoProps) => {
  return (
    <div className="flex gap-[3px] items-center hover:scale-110 active:scale-110 transition">
      <Icon size={25} />
      <Link href="/">NexTracker</Link>
    </div>
  );
};

export default Logo;
