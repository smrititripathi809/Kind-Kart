import { HandHeart } from "lucide-react"
import { Link } from "react-router-dom"

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link className="brand" to="/" aria-label="KindKart home">
      <span className="brand__mark">
        <HandHeart
          aria-hidden="true"
          size={compact ? 24 : 28}
          strokeWidth={2.2}
        />
      </span>
      <span className="brand__copy">
        <strong>KindKart</strong>
        {!compact && <small>Give More. Waste Less.</small>}
      </span>
    </Link>
  )
}
