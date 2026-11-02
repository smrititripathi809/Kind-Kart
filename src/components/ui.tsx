import type {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
} from "react"
import { LoaderCircle } from "lucide-react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost" | "dark"
  loading?: boolean
}

export function Button({
  variant = "primary",
  loading,
  className = "",
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`button button--${variant} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <LoaderCircle aria-hidden="true" className="animate-spin" size={18} />
      )}
      {children}
    </button>
  )
}

type FieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  error?: string
  icon?: ReactNode
}

export function Field({
  label,
  error,
  icon,
  className = "",
  ...props
}: FieldProps) {
  return (
    <label className="field-label">
      <span>{label}</span>
      <span className={`field-control ${error ? "field-control--error" : ""}`}>
        {icon}
        <input className={className} {...props} />
      </span>
      {error && <small className="field-error">{error}</small>}
    </label>
  )
}

type SelectFieldProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string
  children: ReactNode
}

export function SelectField({ label, children, ...props }: SelectFieldProps) {
  return (
    <label className="field-label">
      <span>{label}</span>
      <span className="field-control">
        <select {...props}>{children}</select>
      </span>
    </label>
  )
}

export function TextareaField({
  label,
  error,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string
  error?: string
}) {
  return (
    <label className="field-label">
      <span>{label}</span>
      <span className={`field-control ${error ? "field-control--error" : ""}`}>
        <textarea {...props} />
      </span>
      {error && <small className="field-error">{error}</small>}
    </label>
  )
}

export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <header className="page-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{description}</p>
    </header>
  )
}
