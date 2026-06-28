import { cn } from "@/lib/utils";

type PageContainerProps = {
  children: React.ReactNode;
  className?: string;
  /** Extra bottom padding when bottom nav is visible */
  withBottomNav?: boolean;
};

export function PageContainer({ children, className, withBottomNav }: PageContainerProps) {
  return (
    <main
      className={cn(
        "mx-auto w-full max-w-lg px-4 pt-6 sm:px-5",
        withBottomNav ? "pb-24" : "pb-8",
        "pt-[max(1.5rem,env(safe-area-inset-top))]",
        className,
      )}
    >
      {children}
    </main>
  );
}
