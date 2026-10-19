export function PageHeader({ kicker, title, children }: { kicker: string; title: string; children?: React.ReactNode }) {
  return (
    <header className="text-center pt-16 pb-12 sm:pt-20 sm:pb-16 px-6">
      <p className="lab">{kicker}</p>
      <h1 className="display font-light text-[44px] sm:text-[60px] leading-[1.05] mt-4 text-balance">{title}</h1>
      {children && <div className="mt-6 max-w-[640px] mx-auto text-[19px] text-caption">{children}</div>}
    </header>
  );
}
