import {
  ArrowRight,
  BadgeCheck,
  HeartHandshake,
  MapPin,
  PackagePlus,
} from "lucide-react"
import { ngoPartners } from "../data/mockData"
import { Button, PageIntro } from "../components/ui"

export function NGOsPage() {
  return (
    <div className="page">
      <div className="container">
        <PageIntro
          eyebrow="Community partners"
          title="Give where it matters most"
          description="Connect with local organisations that turn reusable goods into practical support for people and families."
        />
        <div className="demo-banner">
          <BadgeCheck />
          <span>
            <strong>Demonstration partners</strong> These profiles and
            requirements are sample content for the KindKart prototype.
          </span>
        </div>
        <div className="ngo-grid">
          {ngoPartners.map((ngo) => (
            <article className="ngo-card" key={ngo.id}>
              <div className="ngo-card__top">
                <span className={`ngo-logo ngo-logo--${ngo.tone}`}>
                  {ngo.initials}
                </span>
                <span className="verified">
                  <BadgeCheck size={15} /> Verified partner
                </span>
              </div>
              <p className="eyebrow">{ngo.focus}</p>
              <h2>{ngo.name}</h2>
              <p className="ngo-location">
                <MapPin size={16} /> {ngo.location}
              </p>
              <div className="needs-list">
                <small>CURRENTLY NEEDING</small>
                {ngo.needs.map((need) => (
                  <span key={need}>{need}</span>
                ))}
              </div>
              <Button variant="secondary">
                View partner profile <ArrowRight size={17} />
              </Button>
            </article>
          ))}
        </div>
        <section className="partner-cta">
          <span>
            <HeartHandshake />
          </span>
          <div>
            <p className="eyebrow">Grow your impact</p>
            <h2>Is your organisation ready to join?</h2>
            <p>
              Partner with KindKart to reach local donors and publish your
              current material needs.
            </p>
          </div>
          <Button variant="dark">
            Become a partner <PackagePlus size={18} />
          </Button>
        </section>
      </div>
    </div>
  )
}
