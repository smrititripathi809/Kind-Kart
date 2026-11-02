import { BookOpen, Gift, Heart, PackageOpen, Shirt, Sprout } from "lucide-react"

export function HeroIllustration() {
  return (
    <div
      className="hero-art"
      aria-label="A KindKart donation box filled with reusable items"
    >
      <span className="art-spark art-spark--one">
        <Heart />
      </span>
      <span className="art-spark art-spark--two">
        <Sprout />
      </span>
      <div className="art-circle">
        <div className="art-item art-book">
          <BookOpen />
        </div>
        <div className="art-item art-shirt">
          <Shirt />
        </div>
        <div className="art-item art-plant">
          <Sprout />
        </div>
        <div className="art-item art-gift">
          <Gift />
        </div>
        <div className="art-box">
          <PackageOpen />
          <strong>KindKart</strong>
          <small>pass kindness on</small>
        </div>
      </div>
      <span className="art-note">
        <Heart size={16} fill="currentColor" /> 2,400+ items given
      </span>
    </div>
  )
}
