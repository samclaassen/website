/** A thin rule with a small diamond at its centre. Pure SVG, inherits currentColor. */
export function Ornament({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 12" className={className} aria-hidden="true" focusable="false">
      <line x1="0" y1="6" x2="102" y2="6" stroke="currentColor" strokeWidth="1" />
      <line x1="138" y1="6" x2="240" y2="6" stroke="currentColor" strokeWidth="1" />
      <polygon points="120,1 125,6 120,11 115,6" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="108" cy="6" r="1.3" fill="currentColor" />
      <circle cx="132" cy="6" r="1.3" fill="currentColor" />
    </svg>
  );
}
