import {
  ArrowRight,
  Heart,
  Leaf,
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react"
import { Link } from "react-router-dom"
import { Button, PageIntro } from "../components/ui"

export function AboutPage() {
  return (
    <div className="page about-page">
      <div className="container">
        <PageIntro
          eyebrow="Our reason for being"
          title="Useful things deserve another chapter."
          description="KindKart is building a simple, trusted way for neighbours to share what they have and find what they need—without waste or stigma."
        />
        <div className="about-values">
          {[
            [
              Leaf,
              "Waste less",
              "Keep usable goods in circulation and out of landfills.",
            ],
            [
              Users,
              "Share locally",
              "Build resilient neighbourhoods through everyday generosity.",
            ],
            [
              Heart,
              "Give with dignity",
              "Make requesting and receiving feel welcoming and respectful.",
            ],
          ].map(([Icon, title, copy]) => (
            <article key={String(title)}>
              <span>
                <Icon />
              </span>
              <h2>{String(title)}</h2>
              <p>{String(copy)}</p>
            </article>
          ))}
        </div>
        <section className="safety-section">
          <div>
            <p className="eyebrow">Trust is the foundation</p>
            <h2>Designed for safer local sharing</h2>
            <p>
              KindKart limits public location detail, encourages handovers in
              public places, and is designed for future identity and community
              verification.
            </p>
            <ul>
              <li>
                <ShieldCheck /> No exact public addresses
              </li>
              <li>
                <MapPin /> Approximate distance only
              </li>
              <li>
                <Users /> Community reporting and moderation
              </li>
            </ul>
          </div>
          <div className="safety-stat">
            <strong>1 item</strong>
            <span>
              can save resources, help a neighbour, and start a ripple of
              kindness.
            </span>
            <Heart fill="currentColor" />
          </div>
        </section>
        <section className="about-cta">
          <p className="eyebrow">Ready to start?</p>
          <h2>Your shelf could be someone’s fresh start.</h2>
          <div>
            <Link to="/donate">
              <Button>
                Donate an item <ArrowRight />
              </Button>
            </Link>
            <Link to="/browse">
              <Button variant="secondary">Browse donations</Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
