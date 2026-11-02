import {
  BookOpen,
  CheckCircle2,
  Clock3,
  Gift,
  MapPin,
  Pencil,
  UserRound,
} from "lucide-react"
import { donationItems } from "../data/mockData"
import { Button, PageIntro } from "../components/ui"

export function ProfilePage() {
  return (
    <div className="page">
      <div className="container">
        <PageIntro
          eyebrow="Your KindKart"
          title="Giving feels good, Ananya."
          description="Track your donations, requests, and the positive impact you’re creating in your community."
        />
        <section className="profile-card">
          <span className="profile-avatar">
            <UserRound />
          </span>
          <div>
            <h2>Ananya Sharma</h2>
            <p>
              <MapPin size={15} /> Tumakuru, Karnataka
            </p>
            <small>KindKart member since January 2026</small>
          </div>
          <Button variant="secondary">
            <Pencil size={16} /> Edit profile
          </Button>
        </section>
        <div className="profile-stats">
          {[
            [Gift, "12", "Items donated"],
            [Clock3, "3", "Open requests"],
            [BookOpen, "5", "Items received"],
            [CheckCircle2, "17", "Completed handovers"],
          ].map(([Icon, number, label]) => (
            <article key={String(label)}>
              <span>
                <Icon />
              </span>
              <div>
                <strong>{String(number)}</strong>
                <small>{String(label)}</small>
              </div>
            </article>
          ))}
        </div>
        <section className="profile-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Your activity</p>
              <h2>My donations</h2>
            </div>
            <Button>List a new item</Button>
          </div>
          <div className="activity-list">
            {donationItems.slice(0, 3).map((item, index) => (
              <article key={item.id}>
                <img src={item.image} alt="" />
                <div>
                  <strong>{item.title}</strong>
                  <span>
                    {item.category} · {item.condition}
                  </span>
                </div>
                <span
                  className={`activity-status ${
                    index === 0 ? "" : "activity-status--done"
                  }`}
                >
                  {index === 0 ? "Available" : "Completed"}
                </span>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
