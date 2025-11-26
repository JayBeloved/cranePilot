import { cn } from "@/lib/utils";
import Image from "next/image";

export function CraneLogo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2 text-foreground", className)}>
      <Image src="/3dlogo.png" alt="CRANE JLA Consults Logo" width={70} height={70} />
      <span className="font-bold text-lg tracking-tight text-primary">CRANE JLA Consults</span>
    </div>
  );
}