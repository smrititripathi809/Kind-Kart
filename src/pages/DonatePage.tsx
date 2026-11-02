import { useState } from "react"
import { Check, ImagePlus, Info, PackageCheck, ShieldCheck } from "lucide-react"
import { categories, locations } from "../data/mockData"
import {
  Button,
  Field,
  PageIntro,
  SelectField,
  TextareaField,
} from "../components/ui"

export function DonatePage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function submit(event: React.FormEvent) {
    event.preventDefault()
    setLoading(true)
    window.setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 650)
  }

  if (submitted)
    return (
      <div className="page container">
        <div className="form-success">
          <span>
            <Check />
          </span>
          <p className="eyebrow">Donation submitted</p>
          <h1>Your kindness is on its way.</h1>
          <p>
            We’ve saved this demo listing. A real account would now let you
            review and publish it.
          </p>
          <Button onClick={() => setSubmitted(false)}>List another item</Button>
        </div>
      </div>
    )

  return (
    <div className="page">
      <div className="container">
        <PageIntro
          eyebrow="Pass it forward"
          title="Donate an item"
          description="Tell your community what you’re giving away. A clear, honest listing helps it reach the right person faster."
        />
        <div className="form-layout">
          <form className="form-card" onSubmit={submit}>
            <div className="form-section-title">
              <span>01</span>
              <div>
                <h2>Item details</h2>
                <p>What would you like to give?</p>
              </div>
            </div>
            <div className="form-grid">
              <Field
                label="Item title"
                placeholder="e.g. Engineering books bundle"
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
                  label="Description"
                  rows={5}
                  placeholder="Include size, age, any signs of use, and what’s included..."
                  required
                  minLength={20}
                />
              </div>
              <SelectField label="Condition" required defaultValue="">
                <option value="" disabled>
                  Select condition
                </option>
                <option>Like New</option>
                <option>Good</option>
                <option>Fair</option>
              </SelectField>
              <SelectField
                label="Approximate location"
                required
                defaultValue="Tumakuru"
              >
                {locations.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </SelectField>
            </div>
            <label className="upload-zone">
              <ImagePlus />
              <strong>Add item photographs</strong>
              <span>Choose up to 5 clear JPG or PNG images</span>
              <input type="file" accept="image/png,image/jpeg" multiple />
            </label>
            <div className="form-section-title">
              <span>02</span>
              <div>
                <h2>Handover preference</h2>
                <p>Choose what feels safe and convenient.</p>
              </div>
            </div>
            <div className="option-cards">
              <label>
                <input type="radio" name="pickup" defaultChecked />
                <span>
                  <PackageCheck />
                  <strong>Recipient pickup</strong>
                  <small>Meet at a mutually agreed public place.</small>
                </span>
              </label>
              <label>
                <input type="radio" name="pickup" />
                <span>
                  <ShieldCheck />
                  <strong>NGO drop-off</strong>
                  <small>Drop the item at a partner collection point.</small>
                </span>
              </label>
            </div>
            <div className="form-submit">
              <Button type="submit" loading={loading}>
                Submit donation
              </Button>
              <small>
                By submitting, you confirm the item is safe and accurately
                described.
              </small>
            </div>
          </form>
          <aside className="form-aside">
            <Info />
            <h3>Make your listing shine</h3>
            <ul>
              <li>Use natural light for photographs.</li>
              <li>Mention any wear or missing parts.</li>
              <li>Never include an exact home address.</li>
              <li>Meet in a safe, public place.</li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  )
}
