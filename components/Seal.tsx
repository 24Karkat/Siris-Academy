export function Seal({ className }: { className?: string }) {
  return (
    <span className={`seal${className ? ` ${className}` : ""}`}>
      <svg viewBox="0 0 522.86 424.79">
        <use href="#s-glyph" />
      </svg>
    </span>
  );
}

export function Arr({ size = 10 }: { size?: number }) {
  return (
    <span className="arr">
      <svg width={size} height={size}>
        <use href="#arr" />
      </svg>
    </span>
  );
}
