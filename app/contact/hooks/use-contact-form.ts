"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must not exceed 100 characters")
    .regex(
      /^[a-zA-ZÀ-ÿ\s'-]+$/,
      "Name can only contain letters, spaces, hyphens, and apostrophes"
    )
    .trim(),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(254, "Email must not exceed 254 characters")
    .toLowerCase()
    .trim(),
  phone: z
    .string()
    .optional()
    .transform((val) => val?.replace(/\s+/g, "") || "")
    .refine(
      (val) => !val || /^\+?[1-9]\d{1,14}$/.test(val),
      "Please enter a valid phone number (e.g., +420777073441)"
    ),
  message: z
    .string()
    .min(1, "Message is required")
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must not exceed 1000 characters")
    .trim(),
});

export type ContactFieldValues = z.infer<typeof contactSchema>;

export function useContactForm() {
  return useForm({
    resolver: zodResolver(contactSchema),
  });
}
