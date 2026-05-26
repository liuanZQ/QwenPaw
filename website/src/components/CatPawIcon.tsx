/**
 * QwenPaw branding logo (zdLogo.png). Favicon uses qwenpaw-symbol.svg.
 */
interface CatPawIconProps {
  size: number;
  className?: string;
}

const LOGO_SRC = "/zdLogo.png";

export function CatPawIcon({ size, className = "" }: CatPawIconProps) {
  return (
    <img
      src={LOGO_SRC}
      alt=""
      height={size}
      className={className}
      style={{
        display: "block",
        width: "auto",
        height: size,
        margin: "0 auto",
        objectFit: "contain",
      }}
      aria-hidden
    />
  );
}
