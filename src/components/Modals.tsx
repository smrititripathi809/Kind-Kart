import { useState } from "react"
import { Check, HeartHandshake, Mail, X } from "lucide-react"
import type { DonationItem } from "../types"
import { Button, Field, TextareaField } from "./ui"

function ModalShell({
  children,
  onClose,
  title,
}: {
  children: React.ReactNode
  onClose: () => void
  title: string
}) {
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <X />
        </button>
        {children}
      </section>
    </div>
  )
}

export function AuthModal({
  mode,
  onClose,
}: {
  mode: "login" | "signup"
  onClose: () => void
}) {
  const [submitted, setSubmitted] = useState(false)
  const isLogin = mode === "login"

  return (
    <ModalShell
      onClose={onClose}
      title={isLogin ? "Log in" : "Create an account"}
    >
      {submitted ? (
        <div className="success-state">
          <span>
            <Check />
          </span>
          <h2>{isLogin ? "Welcome back!" : "Welcome to KindKart!"}</h2>
          <p>
            This demo form is ready to connect to your authentication service.
          </p>
          <Button onClick={onClose}>Continue exploring</Button>
        </div>
      ) : (
        <>
          <span className="modal-icon">
            <HeartHandshake />
          </span>
          <p className="eyebrow">
            {isLogin ? "Welcome back" : "Join the movement"}
          </p>
          <h2>
            {isLogin
              ? "Continue your kindness"
              : "Create your KindKart account"}
          </h2>
          <p>
            One account lets you donate, request, and coordinate safe local
            handovers.
          </p>
          <form
            className="modal-form"
            onSubmit={(event) => {
              event.preventDefault()

              const formData = new FormData(event.currentTarget)

              if (!isLogin) {
                const fullName = String(formData.get("fullName") || "").trim()
                const email = String(formData.get("email") || "").trim()

                localStorage.setItem(
                  "kindkartUser",
                  JSON.stringify({
                    name: fullName,
                    email: email,
                  })
                )
              }

              setSubmitted(true)
            }}
          >
            {!isLogin && (
              <Field
                label="Full name"
                name="fullName"
                placeholder="Your name"
                required
              />
            )}
            <Field
              label="Email address"
              type="email"
              name="email"
              placeholder="you@example.com"
              icon={<Mail size={17} />}
              required
            />
            <Field
              label="Password"
              type="password"
              placeholder="At least 8 characters"
              minLength={8}
              required
            />
            <Button type="submit">
              {isLogin ? "Log in" : "Create account"}
            </Button>
          </form>
        </>
      )}
    </ModalShell>
  )
}

export function RequestModal({
  item,
  onClose,
}: {
  item: DonationItem
  onClose: () => void
}) {
  const [submitted, setSubmitted] = useState(false)
  return (
    <ModalShell onClose={onClose} title={`Request ${item.title}`}>
      {submitted ? (
        <div className="success-state">
          <span>
            <Check />
          </span>
          <h2>Request sent</h2>
          <p>
            {item.donor} will be notified. For privacy, exact addresses are only
            shared after both people agree.
          </p>
          <Button onClick={onClose}>Done</Button>
        </div>
      ) : (
        <>
          <div className="request-item-preview">
            <img src={item.image} alt="" />
            <div>
              <small>YOU’RE REQUESTING</small>
              <strong>{item.title}</strong>
              <span>{item.distance.toFixed(1)} km away</span>
            </div>
          </div>
          <h2>Tell the donor a little more</h2>
          <p>
            A thoughtful note helps the donor understand how the item will be
            used.
          </p>
          <form
            className="modal-form"
            onSubmit={(event) => {
              event.preventDefault()
              setSubmitted(true)
            }}
          >
            <TextareaField
              label="Your message"
              rows={4}
              defaultValue={`Hi ${item.donor.split(" ")[0]}, I’m interested in this item and can collect it locally.`}
              required
            />
            <Field label="Preferred pickup day" type="date" required />
            <Button type="submit">Send request</Button>
          </form>
        </>
      )}
    </ModalShell>
  )
}
