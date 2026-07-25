import Image from "next/image";
import { Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between sticky top-0 z-50 bg-background border-b border-border c-px">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/danca-acoperisuri.svg"
          alt="Dancă Acoperișuri"
          width={100}
          height={100}
          priority
        />
      </Link>

      <Button className="">
        <Link href="tel:+40753828259" className="flex items-center gap-2">
          <Phone className="w-4 h-4" />
          0753 828 259
        </Link>
      </Button>
    </header>
  );
}
