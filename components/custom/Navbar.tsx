import Image from "next/image";
import { Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { siteConfig } from "@/lib/site";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between sticky top-0 z-50 bg-background border-b border-border c-px">
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center gap-2"
        aria-label={`${siteConfig.name} — pagina principală`}
      >
        <Image
          src="/danca-acoperisuri.svg"
          alt="Dancă Acoperișuri"
          width={100}
          height={100}
          priority
        />
      </Link>

      <Button
        size="default"
        className="sm:h-9 sm:px-4 sm:text-base transition-transform hover:scale-[1.3]"
      >
        <Link href={`tel:${siteConfig.phone}`} className="flex items-center gap-2">
          <Phone className="w-4 h-4" aria-hidden="true" />
          {siteConfig.phoneDisplay}
        </Link>
      </Button>
    </header>
  );
}
