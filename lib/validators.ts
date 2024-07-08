import { z } from "zod"

export const signUpFormSchema = z.object({
    name: z.string().min(2).max(50),
    email: z.string().min(2).max(50),
})

export const signInFormSchema = z.object({
    email: z.string().min(2).max(50),
})

export const pharmacistSchema = z.object({
    name: z.string().min(2).max(50),
    email: z.string().email(),
    license: z.string().min(2).max(100),
    experience_level: z.string().min(2).max(20),
    phone: z.string().min(2).max(150),
    address: z.string().min(2).max(80),
    bio: z.string().min(2).max(1000)
})

export const pharmacySchema = z.object({
    pharmacy_name: z.string().min(2).max(50),
    pharmacy_location: z.string().min(2).max(50),
    working_hours: z.string().min(2).max(100),
    pharmacy_address: z.string().min(2).max(100),
    pharmacy_email: z.string().email(),
    description: z.string().min(2).max(400),
})

export const addProductSchema = z.object({
    name: z.string().min(2).max(250),
    description: z.string().min(2).max(500),
    category: z.string().min(2).max(100),
    price: z.string().min(2).max(250),
    stock_quantity: z.string().min(2).max(100),
    require_prescription: z.boolean(),
    expiry_date: z.string().min(2).max(250),
})

export const settingsFormSchema = z.object({
    name: z.string().min(2).max(250),
    location: z.string().min(2).max(250),
    address: z.string().min(2).max(250),
    email: z.string().min(2).max(250),
})

export const customerFormSchema = z.object({
    age: z.string().min(2).max(50),
    location: z.string().min(2).max(50),
    ID: z.string().min(2).max(50),
    contact: z.string().min(2).max(50),
    address: z.string().min(2).max(50),
})
  