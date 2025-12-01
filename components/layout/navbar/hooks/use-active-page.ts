import { mainNav } from "@/lib/navigation";
import { usePathname } from "next/navigation";

export function useActivePage() {
  const pathname = usePathname();
  return mainNav.find((page) => page.href === pathname);
}
