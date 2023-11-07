"use client";

import BtnGroupChap from "@/app/_components/btn-group-chap";
import { usePathname } from "next/navigation";

export default function ChapLayOut({ children }) {
  const pathname = usePathname();
  const currentChap = pathname.split("-").slice(-1);

  return (
    <div>
      <BtnGroupChap currentChap={currentChap} />
      {children}
    </div>
  );
}
