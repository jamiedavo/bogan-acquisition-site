type SiteShellProps = {
  children: React.ReactNode;
};

export default function SiteShell({ children }: SiteShellProps) {
  return (
    <main className="page-shell">
      <div className="grain-layer" />

      <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-px bg-gradient-to-r from-transparent via-cream/25 to-transparent" />
      <div className="pointer-events-none fixed right-0 top-0 z-0 h-[28rem] w-[28rem] rounded-full bg-red/10 blur-3xl" />

      {children}

      <footer className="section-shell relative z-10 border-t fine-border py-8">
        <div className="flex flex-col gap-2 text-xs uppercase tracking-[0.18em] text-bone/50 md:flex-row md:items-center md:justify-between">
          <span>bogan.co.nz</span>
          <span>Premium NZ domain for acquisition</span>
        </div>
      </footer>
    </main>
  );
}