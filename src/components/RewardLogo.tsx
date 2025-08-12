import { cn } from "@/lib/utils";

interface RewardLogoProps {
  className?: string;
}

export const RewardLogo = ({ className }: RewardLogoProps) => {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="relative bg-logo-bg rounded-xl p-3 shadow-lg">
        <div className="w-8 h-8 bg-card rounded border-2 border-logo-bg relative">
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-logo-accent rounded-full"></div>
        </div>
      </div>
    </div>
  );
};