/**
 * Reusable inline-SVG floral decorations in the poster's purple / lavender / gold palette.
 * All shapes are decorative, so they are hidden from assistive technology.
 */

export function Flower({ size = 80, petals = 8, className = '', style }) {
  const angles = Array.from({ length: petals }, (_, i) => (360 / petals) * i);
  const innerAngles = angles.map((a) => a + 360 / petals / 2);

  return (
    <svg
      className={className}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      aria-hidden="true"
      focusable="false"
    >
      <g transform="translate(50 50)">
        {angles.map((a) => (
          <ellipse
            key={`o${a}`}
            cx="0"
            cy="-24"
            rx="10"
            ry="24"
            fill="#C5A2DB"
            opacity="0.85"
            transform={`rotate(${a})`}
          />
        ))}
        {innerAngles.map((a) => (
          <ellipse
            key={`i${a}`}
            cx="0"
            cy="-17"
            rx="7"
            ry="17"
            fill="#7A3C9C"
            opacity="0.9"
            transform={`rotate(${a})`}
          />
        ))}
        <circle r="8" fill="#B69A62" />
        <circle r="4" fill="#E9D7A8" />
      </g>
    </svg>
  );
}

function Leaf({ x, y, rotate, scale = 1 }) {
  return (
    <path
      d="M0 0 C 18 -26, 56 -26, 76 0 C 56 26, 18 26, 0 0 Z"
      fill="#8FA68A"
      opacity="0.55"
      transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}
    />
  );
}

/** A corner arrangement drawn for the top-left; flipped with CSS for other corners. */
export function FloralCorner({ position = 'tl', className = '' }) {
  return (
    <div className={`floral-corner floral-corner--${position} ${className}`} aria-hidden="true">
      <svg viewBox="0 0 300 300" focusable="false">
        <g className="floral-sway">
          <Leaf x={20} y={110} rotate={25} scale={1.3} />
          <Leaf x={110} y={20} rotate={65} scale={1.2} />
          <Leaf x={60} y={170} rotate={5} scale={1} />
          <Leaf x={170} y={50} rotate={35} scale={0.9} />
          <Leaf x={30} y={40} rotate={45} scale={1.1} />

          <g transform="translate(70 70) scale(1.9)">
            <FlowerShape petals={9} />
          </g>
          <g transform="translate(180 40) scale(1.1)">
            <FlowerShape petals={7} />
          </g>
          <g transform="translate(40 190) scale(1.05)">
            <FlowerShape petals={7} />
          </g>
          <g transform="translate(150 140) scale(0.7)">
            <FlowerShape petals={6} />
          </g>
          <circle cx="235" cy="95" r="6" fill="#B69A62" opacity="0.8" />
          <circle cx="105" cy="235" r="5" fill="#B69A62" opacity="0.8" />
          <circle cx="215" cy="160" r="4" fill="#C5A2DB" />
        </g>
      </svg>
    </div>
  );
}

// Flower shape without the <svg> wrapper, for use inside another SVG
function FlowerShape({ petals = 8 }) {
  const angles = Array.from({ length: petals }, (_, i) => (360 / petals) * i);
  const innerAngles = angles.map((a) => a + 360 / petals / 2);
  return (
    <g>
      {angles.map((a) => (
        <ellipse key={`o${a}`} cx="0" cy="-24" rx="10" ry="24" fill="#C5A2DB" opacity="0.88" transform={`rotate(${a})`} />
      ))}
      {innerAngles.map((a) => (
        <ellipse key={`i${a}`} cx="0" cy="-17" rx="7" ry="17" fill="#7A3C9C" opacity="0.92" transform={`rotate(${a})`} />
      ))}
      <circle r="8" fill="#B69A62" />
      <circle r="4" fill="#E9D7A8" />
    </g>
  );
}

/** Gold ornamental separator with a small flower in the middle. */
export function GoldDivider({ className = '' }) {
  return (
    <div className={`gold-divider ${className}`} aria-hidden="true">
      <span className="gold-divider__line" />
      <span className="gold-divider__diamond" />
      <Flower size={34} petals={6} className="gold-divider__flower" />
      <span className="gold-divider__diamond" />
      <span className="gold-divider__line" />
    </div>
  );
}

/** Small corner flourish for cards. */
export function CardCorner({ position = 'tl' }) {
  return (
    <span className={`card-corner card-corner--${position}`} aria-hidden="true">
      <Flower size={46} petals={6} />
    </span>
  );
}
