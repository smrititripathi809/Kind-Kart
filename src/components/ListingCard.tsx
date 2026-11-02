import { Clock3, MapPin } from "lucide-react"
import type { DonationItem } from "../types"
import { Button } from "./ui"

export function ListingCard({
  item,
  onRequest,
}: {
  item: DonationItem
  onRequest: (item: DonationItem) => void
}) {
  return (
    <article className="listing-card">
      <div className="listing-card__image">
        <img src={item.image} alt={item.title} loading="lazy" />
        <span className="free-badge">FREE</span>
        <span className="condition-badge">{item.condition}</span>
      </div>
      <div className="listing-card__body">
        <p className="listing-category">{item.category}</p>
        <h3>{item.title}</h3>
        <div className="listing-meta">
          <span>
            <MapPin size={15} /> {item.distance.toFixed(1)} km away
          </span>
          <span>
            <Clock3 size={15} /> {item.posted}
          </span>
        </div>
        <div className="listing-card__footer">
          <span>From {item.donor}</span>
          <Button onClick={() => onRequest(item)}>Request item</Button>
        </div>
      </div>
    </article>
  )
}
