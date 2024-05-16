import Link from "next/link";
import Image from "next/image";

export const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className="hidden items-center lg:flex">
        <Image src="/logo.svg" width={144} height={38} alt="Logo" />
      </div>
    </Link>
  );
};
