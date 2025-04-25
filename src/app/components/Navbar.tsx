import Image from "next/image";
import Time from "./Time";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-row bg-black w-full p-1.5 pl-4 pr-4 items-center justify-between">
      <Link href="/">
        <Image src="/favicon.ico" alt="Logo" width={32} height={32} className="rounded-full" />
      </Link>
      <div className="text-white text-md hidden md:block">
        <Time />
      </div>

    </nav>
  );
}
