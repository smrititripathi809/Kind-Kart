export type Category = "Clothes" | "Books" | "Electronics" | "Furniture" | "Toys" | "Utensils" | "Home & Living" | "Others"

export interface DonationItem {
  id: number
  title: string
  category: Category
  distance: number
  location: string
  condition: "Like New" | "Good" | "Fair"
  image: string
  donor: string
  posted: string
}

export interface NgoPartner {
  id: number
  name: string
  focus: string
  location: string
  needs: string[]
  initials: string
  tone: string
}
