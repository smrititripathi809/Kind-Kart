import { useState } from "react"
import { Check, ImagePlus, Lightbulb, MapPin } from "lucide-react"
import { categories, locations } from "../data/mockData"
import {
  Button,
  Field,
  PageIntro,
  SelectField,
  TextareaField,
} from "../components/ui"

export function RequestPage() {
  const [submitted, setSubmitted] = useState(false)
  if (submitted)
    return (
      <div className="page container">
        <div className="form-success">
          <span>
            <Check />
          </span>
          <p className="eyebrow">Request posted</p>
          <h1>Your community can now help.</h1>
          <p>
            This demo request has been saved locally for the current session.
          </p>
          <Button onClick={() => setSubmitted(false)}>
            Post another request
          </Button>
        </div>
      </div>
    )
  return (
    <div className="page">
      <div className="container">
        <PageIntro
          eyebrow="Ask your community"
          title="What do you need?"
          description="Post a respectful request and let nearby donors know how they can help. Please request only what you genuinely need."
        />
        <div className="form-layout">
          <form
            className="form-card"
            onSubmit={(event) => {
              event.preventDefault()
              setSubmitted(true)
            }}
          >
            <div className="form-section-title">
              <span>01</span>
              <div>
                <h2>Describe your need</h2>
                <p>Specific requests are easier to fulfil.</p>
              </div>
            </div>
            <div className="form-grid">
              <Field
                label="Request title"
                placeholder="e.g. Textbooks for first-year engineering"
                required
              />
              <SelectField label="Category" required defaultValue="">
                <option value="" disabled>
                  Select a category
                </option>
                {categories.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </SelectField>
              <div className="full-field">
                <TextareaField
                  label="Why this would help"
                  rows={6}
                  placeholder="Tell potential donors what you need, what it will be used for, and any important details..."
                  required
                  minLength={20}
                />
              </div>
              <SelectField label="Approximate location" defaultValue="Tumakuru">
                {locations.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </SelectField>
              <Field label="Needed by (optional)" type="date" />
            </div>
            <label className="upload-zone upload-zone--small">
              <ImagePlus />
              <strong>Add an optional reference image</strong>
              <span>A photo can help explain exactly what you need.</span>
              <input type="file" accept="image/png,image/jpeg" />
            </label>
            <div className="form-submit">
              <Button type="submit">Submit request</Button>
              <small>Your exact address will never be shown publicly.</small>
            </div>
          </form>
          <aside className="form-aside form-aside--request">
            <Lightbulb />
            <h3>A kind request is...</h3>
            <ul>
              <li>Clear and specific about the need.</li>
              <li>Honest about condition flexibility.</li>
              <li>Respectful of donors’ time.</li>
              <li>Safe and free of private details.</li>
            </ul>
            <div className="aside-location">
              <MapPin />
              <span>
                <strong>Approximate areas only</strong>
                <small>Addresses stay private until you choose to share.</small>
              </span>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
