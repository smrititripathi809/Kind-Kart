import { useEffect, useState } from "react"
import { ChevronDown, MapPin, Menu, UserRound, X } from "lucide-react"
import { NavLink, Outlet, useLocation } from "react-router-dom"
import type { AppOutletContext } from "../App"
import { locations } from "../data/mockData"
import { Brand } from "./Brand"
import { Button } from "./ui"

const navLinks = [
  ["Home", "/"],
  ["Browse Items", "/browse"],
  ["Request Item", "/request"],
  ["Donate", "/donate"],
  ["NGOs", "/ngos"],
  ["About", "/about"],
]

export function Layout({ context }: { context: AppOutletContext }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const route = useLocation()

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [route.pathname])

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container nav-bar">
          <Brand />
          <nav
            className={`main-nav ${menuOpen ? "main-nav--open" : ""}`}
            aria-label="Main navigation"
          >
            {navLinks.map(([label, href]) => (
              <NavLink
                key={href}
                to={href}
                end={href === "/"}
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link--active" : "nav-link"
                }
              >
                {label}
              </NavLink>
            ))}
            <div className="mobile-actions">
              <Button variant="ghost" onClick={() => context.openAuth("login")}>
                Log in
              </Button>
              <Button onClick={() => context.openAuth("signup")}>
                Join KindKart
              </Button>
            </div>
          </nav>
          <div className="nav-actions">
            <label className="location-select" aria-label="Select location">
              <MapPin size={16} aria-hidden="true" />
              <select
                value={context.location}
                onChange={(event) => context.setLocation(event.target.value)}
              >
                {locations.map((location) => (
                  <option key={location}>{location}</option>
                ))}
              </select>
              <ChevronDown size={14} aria-hidden="true" />
            </label>
            <Button variant="ghost" onClick={() => context.openAuth("login")}>
              Log in
            </Button>
            <Button onClick={() => context.openAuth("signup")}>Sign up</Button>
            <NavLink
              className="profile-link"
              to="/profile"
              aria-label="Open profile"
            >
              <UserRound size={19} />
            </NavLink>
          </div>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <main>
        <Outlet context={context} />
      </main>
      <Footer />
    </div>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Brand />
          <p>Making generosity local, simple, and sustainable.</p>
        </div>
        <div>
          <strong>Explore</strong>
          <NavLink to="/browse">Browse items</NavLink>
          <NavLink to="/donate">Donate an item</NavLink>
          <NavLink to="/ngos">NGO partners</NavLink>
        </div>
        <div>
          <strong>KindKart</strong>
          <NavLink to="/about">How it works</NavLink>
          <NavLink to="/about">Safety & trust</NavLink>
          <span>Help centre</span>
        </div>
        <div className="footer-note">
          <span>Built for kinder neighbourhoods.</span>
          <small>© 2026 KindKart. Demo experience.</small>
        </div>
      </div>
    </footer>
  )
}
