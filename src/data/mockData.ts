import type { Category, DonationItem, NgoPartner } from "../types"

export const categories: Category[] = [
  "Clothes",
  "Books",
  "Electronics",
  "Furniture",
  "Toys",
  "Utensils",
  "Home & Living",
  "Others",
]

export const locations = ["Tumakuru", "Bengaluru", "Mysuru", "Hassan", "Mandya"]

const images = {
  books:
    "https://images.unsplash.com/photo-1761821170049-a61c69851b0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=82&w=1080",
  clothes:
    "https://images.unsplash.com/photo-1604072374690-0e7d7bddd54e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=82&w=1080",
  headphones:
    "https://images.unsplash.com/photo-1546435770-a3e426bf472b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=82&w=1080",
  table:
    "https://images.unsplash.com/photo-1653971858270-c6f28319797c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=82&w=1080",
}

export const donationItems: DonationItem[] = [
  {
    id: 1,
    title: "Engineering Books (CSE)",
    category: "Books",
    distance: 1.2,
    location: "Tumakuru",
    condition: "Good",
    image: images.books,
    donor: "Ananya S.",
    posted: "Today",
  },
  {
    id: 2,
    title: "Clothes Bundle (Mixed)",
    category: "Clothes",
    distance: 2.4,
    location: "Tumakuru",
    condition: "Good",
    image: images.clothes,
    donor: "Rahul K.",
    posted: "Today",
  },
  {
    id: 3,
    title: "Headphones (Working)",
    category: "Electronics",
    distance: 3,
    location: "Tumakuru",
    condition: "Like New",
    image: images.headphones,
    donor: "Meera P.",
    posted: "Yesterday",
  },
  {
    id: 4,
    title: "Solid Wood Study Table",
    category: "Furniture",
    distance: 3.7,
    location: "Tumakuru",
    condition: "Fair",
    image: images.table,
    donor: "Kiran R.",
    posted: "Yesterday",
  },
  {
    id: 5,
    title: "Semester Reference Books",
    category: "Books",
    distance: 4.1,
    location: "Bengaluru",
    condition: "Good",
    image: images.books,
    donor: "Nisha A.",
    posted: "2 days ago",
  },
  {
    id: 6,
    title: "Winter Clothes Set",
    category: "Clothes",
    distance: 5.3,
    location: "Mysuru",
    condition: "Like New",
    image: images.clothes,
    donor: "Dev M.",
    posted: "3 days ago",
  },
  {
    id: 7,
    title: "Over-ear Headphones",
    category: "Electronics",
    distance: 6.1,
    location: "Hassan",
    condition: "Good",
    image: images.headphones,
    donor: "Sara J.",
    posted: "3 days ago",
  },
  {
    id: 8,
    title: "Compact Work Desk",
    category: "Furniture",
    distance: 7.4,
    location: "Mandya",
    condition: "Good",
    image: images.table,
    donor: "Naveen B.",
    posted: "4 days ago",
  },
]

export const ngoPartners: NgoPartner[] = [
  {
    id: 1,
    name: "Sparsha Learning Trust",
    focus: "Education for children",
    location: "Tumakuru",
    needs: ["School books", "Stationery", "Backpacks"],
    initials: "SL",
    tone: "amber",
  },
  {
    id: 2,
    name: "Namma Community Kitchen",
    focus: "Food security & family care",
    location: "Bengaluru",
    needs: ["Utensils", "Appliances", "Storage boxes"],
    initials: "NK",
    tone: "green",
  },
  {
    id: 3,
    name: "Second Spring Collective",
    focus: "Elder care and dignity",
    location: "Mysuru",
    needs: ["Clean clothing", "Books", "Home essentials"],
    initials: "SS",
    tone: "blue",
  },
]
