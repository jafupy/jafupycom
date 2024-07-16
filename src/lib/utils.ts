import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { createClient } from "@supabase/supabase-js";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const supabase = createClient(
  "https://nftbzvgoupexfysxqttf.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5mdGJ6dmdvdXBleGZ5c3hxdHRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTczODk3NTYsImV4cCI6MjAxMjk2NTc1Nn0.q3Zzu33vBzmP0Nck8stBT1a9LrhGKJ2vGEqpfM-n8-g",
);
