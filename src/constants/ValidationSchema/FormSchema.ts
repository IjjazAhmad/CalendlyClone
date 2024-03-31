import * as z  from "zod";


export const userSchema = z
  .object({
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    fullname: z.string().min(2, 'Fullname min 2 character'),
    username: z.string().min(3, 'Username min 3 character').max(100,'Username max 10 character'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must have than 8 characters'),
  })
 
