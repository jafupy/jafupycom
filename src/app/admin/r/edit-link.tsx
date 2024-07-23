"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { DialogClose, DialogFooter } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ArrowUpDown, Check } from "lucide-react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";

const formSchema = z.object({
  shortcut: z.string().min(2),
  destination: z.string().min(2),
  // -----
  title: z.string().min(2),
  description: z.string().min(2),
  // -----
  tags: z.array(z.string().min(2)).optional(),
});

const languages = [
  { label: "English", value: "en" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Spanish", value: "es" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Japanese", value: "ja" },
  { label: "Korean", value: "ko" },
  { label: "Chinese", value: "zh" },
] as const;

export default function ProfileForm({ data }) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      shortcut: "",
      destination: "",
      title: "",
      description: "",
      tags: [],
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast("Submitted edit link", { description: JSON.stringify(values) });
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <TabsContent value="params">
          <FormField
            control={form.control}
            name="shortcut"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Shortcut</FormLabel>
                <FormControl>
                  <Input placeholder="somewhere" {...field} defaultValue={data.shortcut} />
                </FormControl>
                <FormDescription>
                  The alias for the link. Eg, /r/<strong>somewhere</strong>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="destination"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Destination</FormLabel>
                <FormControl>
                  <Input placeholder="www.somewhere.com" {...field} defaultValue={data.destination} />
                </FormControl>
                <FormDescription>Where the link points to.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <DialogFooter>
            <TabsList>
              <TabsTrigger value="meta" asChild>
                <Button>Next (Metadata)</Button>
              </TabsTrigger>
            </TabsList>
          </DialogFooter>
        </TabsContent>

        {/* 
          ███    ███ ███████ ████████  █████  
          ████  ████ ██         ██    ██   ██ 
          ██ ████ ██ █████      ██    ███████ 
          ██  ██  ██ ██         ██    ██   ██ 
          ██      ██ ███████    ██    ██   ██              
          */}

        <TabsContent value="meta">
          <FormField
            control={form.control}
            name="shortcut"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Somewhere" {...field} defaultValue={data.title} />
                </FormControl>
                <FormDescription>The title of the link.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="shortcut"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder="somewhere" {...field} defaultValue={data.shortcut} />
                </FormControl>
                <FormDescription>What is the destination about?</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem control={form.control} name="tags">
                <FormLabel>Tags</FormLabel>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select tags" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hidden">Hidden</SelectItem>
                    <SelectItem value="next">Next.js</SelectItem>
                    <SelectItem value="svelte">Svelte</SelectItem>
                    <SelectItem value="vue">Vue</SelectItem>
                    <SelectItem value="angular">Angular</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  You can manage email addresses in your <Link href="/examples/forms">email settings</Link>.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <DialogFooter>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </TabsContent>
      </form>
    </Form>
  );
}
