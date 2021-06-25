import { Profile } from "@/core/types/profile";
import { Tag } from "@/core/types/tags";

export type Article = {
  slug: string
  title: string
  description: string
  body: string
  tagList: Tag[]
  createdAt: string
  updatedAt: string
  favorited: boolean
  favoritesCount: number
  author: Profile
}

export type Articles = {
  article: Article[]
  articlesCount: number
}
