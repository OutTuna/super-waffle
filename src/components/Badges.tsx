// Classic 88x31 web buttons, drawn with CSS so no image files are needed.
const badges = [
  { left: 'C++', right: 'POWERED', className: 'badge-cpp' },
  { left: 'NIX', right: 'OS', className: 'badge-nix' },
  { left: 'NO', right: 'TRACKING', className: 'badge-track' },
  { left: '800', right: 'x600', className: 'badge-res' },
  { left: 'RUST', right: 'INSIDE', className: 'badge-rust' },
  { left: '♫', right: 'MUSIC', className: 'badge-music' },
]

export default function Badges() {
  return (
    <ul className="badges">
      {badges.map((badge) => (
        <li key={badge.className} className={`badge ${badge.className}`}>
          <span className="badge-left">{badge.left}</span>
          <span className="badge-right">{badge.right}</span>
        </li>
      ))}
    </ul>
  )
}
