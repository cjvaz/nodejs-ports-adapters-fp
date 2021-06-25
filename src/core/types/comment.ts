import { Profile } from "@/core/types/profile";

export type Comment = {
  id: number
  createAt: string
  updateAt: string
  body: string
  author: Profile
}
