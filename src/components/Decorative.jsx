/* Abstract, discreet decorative motifs. No literal childhood clip-art,
   only soft organic shapes and a single delicate line motif, kept sparse. */

export function SoftBlob({ className, tone = "sage" }) {
  const fill = tone === "blush" ? "#F6E6DC" : "#E6ECDF";

  return (
    <svg
      className={className}
      viewBox="0 0 400 400"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill={fill}
        d="M320.5 88.5C355 130 372 190 358 246C344 302 291 344 232 358C173 372 108 358 66 316C24 274 5 204 26 148C47 92 108 50 168 41C228 32 286 47 320.5 88.5Z"
      />
    </svg>
  );
}

export function LeafMotif({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      aria-hidden="true"
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <path d="M24 42C24 42 8 34 8 18C8 9 15 4 24 4C33 4 40 9 40 18C40 34 24 42 24 42Z" />
      <path d="M24 42V10" />
    </svg>
  );
}

export function DottedDivider({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 16"
      aria-hidden="true"
      focusable="false"
    >
      <line
        x1="4"
        y1="8"
        x2="236"
        y2="8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="0.5 14"
      />
    </svg>
  );
}
