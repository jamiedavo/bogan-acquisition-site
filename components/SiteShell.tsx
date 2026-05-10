import { AnimatedGlow } from "@/components/MotionPrimitives";

type SiteShellProps = {
  children: React.ReactNode;
};

export default function SiteShell({ children }: SiteShellProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0E0E0C] text-[#F1E6CF]">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(163,58,42,0.16), transparent 36%), radial-gradient(circle at 85% 18%, rgba(155,122,66,0.08), transparent 28%), linear-gradient(180deg, #0E0E0C 0%, #151411 46%, #0E0E0C 100%)",
        }}
      />

      <AnimatedGlow className="pointer-events-none fixed left-1/2 top-[-190px] z-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#A33A2A]/20 blur-3xl" />

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(241,230,207,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(241,230,207,0.18) 1px, transparent 1px)",
          backgroundSize: "46px 46px",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.42)_78%)]"
      />

      <div className="relative z-10">{children}</div>
    </main>
  );
}