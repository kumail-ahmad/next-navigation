"use client";
import { usePathname } from "next/navigation";
export default function Home() {
  const pathname = usePathname();
  return <div className="">hello</div>;
}
