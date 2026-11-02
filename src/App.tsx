import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./components/Layout"
import { AuthModal, RequestModal } from "./components/Modals"
import type { DonationItem } from "./types"
import { AboutPage } from "./pages/AboutPage"
import { BrowsePage } from "./pages/BrowsePage"
import { DonatePage } from "./pages/DonatePage"
import { HomePage } from "./pages/HomePage"
import { NGOsPage } from "./pages/NGOsPage"
import { ProfilePage } from "./pages/ProfilePage"
import { RequestPage } from "./pages/RequestPage"

export type AppOutletContext = {
  location: string
  setLocation: (location: string) => void
  openAuth: (mode: "login" | "signup") => void
  requestItem: (item: DonationItem) => void
}

export default function App() {
  const [location, setLocation] = useState("Tumakuru")
  const [authMode, setAuthMode] = useState<"login" | "signup" | null>(null)
  const [requestedItem, setRequestedItem] = useState<DonationItem | null>(null)

  const context: AppOutletContext = {
    location,
    setLocation,
    openAuth: setAuthMode,
    requestItem: setRequestedItem,
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout context={context} />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/browse" element={<BrowsePage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/request" element={<RequestPage />} />
          <Route path="/ngos" element={<NGOsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
      {authMode && (
        <AuthModal mode={authMode} onClose={() => setAuthMode(null)} />
      )}
      {requestedItem && (
        <RequestModal
          item={requestedItem}
          onClose={() => setRequestedItem(null)}
        />
      )}
    </BrowserRouter>
  )
}
