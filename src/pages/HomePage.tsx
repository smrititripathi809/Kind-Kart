import { useMemo, useState } from "react"
import {
  ArrowRight,
  BookOpen,
  Boxes,
  HandHeart,
  HeartHandshake,
  Home,
  LampDesk,
  Laptop,
  PackageCheck,
  Search,
  Shirt,
  Smile,
  Sparkles,
  Sprout,
  ToyBrick,
  Users,
  UtensilsCrossed,
} from "lucide-react"
import { Link, useNavigate, useOutletContext } from "react-router-dom"
import type { AppOutletContext } from "../App"
import { categories, donationItems } from "../data/mockData"
import type { Category } from "../types"
import { HeroIllustration } from "../components/HeroIllustration"
import { ListingCard } from "../components/ListingCard"
import { Button } from "../components/ui"

const categoryIcons = [
  Shirt,
  BookOpen,
  Laptop,
  LampDesk,
  ToyBrick,
  UtensilsCrossed,
  Home,
  Boxes,
]

export function HomePage() {
  const context = useOutletContext<AppOutletContext>()
  const navigate = useNavigate()
  const [category, setCategory] = useState<Category | "All">("All")
  const [query, setQuery] = useState("")
  const [sort, setSort] = useState("newest")

  const filteredItems = useMemo(() => {
    const result = donationItems.filter(
      (item) =>
        (category === "All" || item.category === category) &&
        item.title.toLowerCase().includes(query.toLowerCase()),
    )
    if (sort === "nearest")
      return [...result].sort((a, b) => a.distance - b.distance)
    if (sort === "category")
      return [...result].sort((a, b) => a.category.localeCompare(b.category))
    return result
  }, [category, query, sort])

  function selectCategory(value: Category) {
    setCategory((current) => (current === value ? "All" : value))
    document
      .querySelector("#recent-donations")
      ?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <Sparkles size={16} /> Neighbours helping neighbours
            </p>
            <h1>
              Share what you <span>don’t need.</span>
              <br />
              Give what others need.
            </h1>
            <p className="hero-lede">
              A trusted community platform to donate and receive usable
              items—easily, safely, and locally.
            </p>
            <div className="hero-actions">
              <Button onClick={() => navigate("/donate")}>
                Donate an item <ArrowRight size={18} />
              </Button>
              <Button
                variant="secondary"
                onClick={() =>
                  document
                    .querySelector("#recent-donations")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Find items
              </Button>
            </div>
            <div className="trust-row">
              <span>
                <strong>12k+</strong>
                <small>kind members</small>
              </span>
              <span>
                <strong>8.6k</strong>
                <small>items reused</small>
              </span>
              <span>
                <strong>4.9/5</strong>
                <small>community rating</small>
              </span>
            </div>
          </div>
          <HeroIllustration />
          <aside className="how-card">
            <p className="eyebrow">Simple by design</p>
            <h2>How it works</h2>
            {[
              [
                PackageCheck,
                "01",
                "List or request",
                "Post an item to donate or tell your community what you need.",
              ],
              [
                Users,
                "02",
                "Connect locally",
                "Match with a verified donor or recipient near you.",
              ],
              [
                HeartHandshake,
                "03",
                "Reuse & share",
                "Arrange a safe handover and give good things a new life.",
              ],
            ].map(([Icon, number, title, copy]) => (
              <div className="how-step" key={String(number)}>
                <span className="how-step__icon">
                  <Icon />
                </span>
                <div>
                  <small>STEP {String(number)}</small>
                  <strong>{String(title)}</strong>
                  <p>{String(copy)}</p>
                </div>
              </div>
            ))}
          </aside>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Something for everyone</p>
            <h2>Browse by category</h2>
          </div>
          <Link to="/browse">
            View all items <ArrowRight size={17} />
          </Link>
        </div>
        <div className="category-grid">
          {categories.map((item, index) => {
            const Icon = categoryIcons[index]
            return (
              <button
                key={item}
                onClick={() => selectCategory(item)}
                className={`category-card ${
                  category === item ? "category-card--active" : ""
                }`}
              >
                <span>
                  <Icon />
                </span>
                <strong>{item}</strong>
                <small>{12 + index * 7} items</small>
              </button>
            )
          })}
        </div>
      </section>

      <section className="section section--soft" id="recent-donations">
        <div className="container">
          <div className="section-heading donation-heading">
            <div>
              <p className="eyebrow">Freshly listed near {context.location}</p>
              <h2>Recent donations near you</h2>
            </div>
            <div className="listing-tools">
              <label className="search-control">
                <Search size={18} />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search items"
                  aria-label="Search items"
                />
              </label>
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                aria-label="Sort donations"
              >
                <option value="newest">Newest</option>
                <option value="nearest">Nearest</option>
                <option value="category">Category</option>
              </select>
            </div>
          </div>
          {filteredItems.length > 0 ? (
            <div className="listing-grid">
              {filteredItems.slice(0, 4).map((item) => (
                <ListingCard
                  key={item.id}
                  item={item}
                  onRequest={context.requestItem}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <Search />
              <h3>No matching items yet</h3>
              <p>Try another search or clear the category filter.</p>
              <Button
                onClick={() => {
                  setQuery("")
                  setCategory("All")
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
          <div className="center-action">
            <Button variant="secondary" onClick={() => navigate("/browse")}>
              Explore all donations <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="impact-panel">
          <div className="impact-copy">
            <p className="eyebrow">A more circular community</p>
            <h2>
              Small actions.
              <br />
              <span>Big impact.</span>
            </h2>
            <p>
              Every item passed on keeps value in our neighbourhood and waste
              out of landfills.
            </p>
            <Link to="/about">
              See our community impact <ArrowRight size={17} />
            </Link>
          </div>
          <div className="impact-items">
            {[
              [
                Sprout,
                "Reuse",
                "Promote sustainability",
                "Give useful things a longer, fuller life.",
              ],
              [
                Users,
                "Share",
                "Support your community",
                "Build stronger local connections through generosity.",
              ],
              [
                HandHeart,
                "Care",
                "Help someone nearby",
                "Make everyday essentials easier to access.",
              ],
            ].map(([Icon, title, subtitle, copy]) => (
              <article key={String(title)}>
                <span>
                  <Icon />
                </span>
                <div>
                  <small>{String(subtitle)}</small>
                  <h3>{String(title)}</h3>
                  <p>{String(copy)}</p>
                </div>
              </article>
            ))}
          </div>
          <Smile className="impact-smile" />
        </div>
      </section>
    </>
  )
}
