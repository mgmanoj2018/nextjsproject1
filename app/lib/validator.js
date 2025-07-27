import z from "zod";
export const usernameSchema = z.object({
  username:z.string().min(3).max(20).regex(/^[a-zA-Z0-9-]+$/,"username can only contain letters, numers, and underscores")
})