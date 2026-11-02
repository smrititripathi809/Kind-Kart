import { useMemo, useState } from "react"
import { Search, SlidersHorizontal } from "lucide-react"
import { useOutletContext } from "react-router-dom"
import type { AppOutletContext } from "../App"
import { categories, donationItems, locations } from "../data/mockData"
import { ListingCard } from "../components/ListingCard"
import { Button, PageIntro } from "../components/ui"

export function BrowsePage() {
  const context = useOutletContext<AppOutletContext>()
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")
  const [condition, setCondition] = useState("All")
  const [location, setLocation] = useState("All locations")
  const [sort, setSort] = useState("newest")

  const items = useMemo(() => {
    const filtered = donationItems.filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) &&
        (category === "All" || item.category === category) &&
        (condition === "All" || item.condition === condition) &&
        (location === "All locations" || item.location === location),
    )
    if (sort === "nearest")
      return [...filtered].sort((a, b) => a.distance - b.distance)
    if (sort === "category")
      return [...filtered].sort((a, b) => a.category.localeCompare(b.category))
    return filtered
  }, [search, category, condition, location, sort])

  const clear = () => {
    setSearch("")
    setCategory("All")
    setCondition("All")
    setLocation("All locations")
  }

  return (
    <div className="page">
      <div className="container">
        <PageIntro
          eyebrow="Give good things a new home"
          title="Find something useful nearby"
          description="Browse free reusable items from kind people in your community. Exact addresses remain private until a handover is agreed."
        />
        <div className="browse-shell">
          <aside className="filter-panel">
            <div className="filter-title">
              <SlidersHorizontal size={19} />
              <strong>Filters</strong>
              <button onClick={clear}>Clear all</button>
            </div>
            <label className="filter-group">
              <span>Category</span>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>All</option>
                {categories.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
            <label className="filter-group">
              <span>Approximate location</span>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option>All locations</option>
                {locations.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
            <label className="filter-group">
              <span>Condition</span>
              <select
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
              >
                <option>All</option>
                <option>Like New</option>
                <option>Good</option>
                <option>Fair</option>
              </select>
            </label>
            <div className="privacy-note">
              KindKart only shows approximate areas and distances publicly.
            </div>
          </aside>
          <section className="browse-results">
            <div className="browse-toolbar">
              <label className="search-control search-control--wide">
                <Search size={18} />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search books, furniture, clothes..."
                />
              </label>
              <select value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="newest">Newest first</option>
                <option value="nearest">Nearest first</option>
                <option value="category">By category</option>
              </select>
            </div>
            <div className="result-count">
              <strong>{items.length} items</strong>
              <span>available around {context.location}</span>
            </div>
            {items.length ? (
              <div className="listing-grid listing-grid--browse">
                {items.map((item) => (
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
                <h3>No items match those filters</h3>
                <p>
                  Try widening your search area or choosing another category.
                </p>
                <Button onClick={clear}>Reset filters</Button>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  )
}
