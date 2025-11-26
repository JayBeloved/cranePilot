import { cn } from "@/lib/utils";

export function CraneLogo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2 text-foreground", className)}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto"
      >
        <path
          d="M25 5C20 15 20 25 25 35"
          stroke="#A1783D"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25 25C15 20 5 25 5 35C5 45 15 50 25 45"
          stroke="#A1783D"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25 25C35 20 45 25 45 35C45 45 35 50 25 45"
          stroke="#678DBB"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25 15C35 10 45 10 45 20"
          stroke="#678DBB"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="25" cy="10" r="3" fill="#A1783D" />
      </svg>
      <span className="font-bold text-lg tracking-tight text-primary">CRANE JLA Consults</span>
    </div>
  );
}
