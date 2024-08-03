"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Pencil } from "lucide-react";
import { createClient } from "@/utils/supabase/client";

const formSchema = z.object({
  shortcut: z.string().min(2),
  destination: z.string().min(2),
  // -----
  title: z.string().min(2),
  description: z.string().min(2),
  // -----
  tags: z.array(z.string().min(0)).optional(),
});

export default function ProfileForm({ data }) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      shortcut: data.shortcut,
      destination: data.destination,
      title: data.title,
      description: data.description,
      tags: data.tags,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    const supabase = createClient();
    const { error } = supabase.from("links").update(values).eq("id", data.id);
    if (error) {
      toast.error("Failed to edit link", {
        description: error.message,
      });
    } else {
      toast.success("Link updated");
    }
    fetchData();
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <Pencil className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Tabs defaultValue="params" className="">
            <DialogContent className="">
              <DialogHeader>
                <DialogTitle>Edit Link</DialogTitle>
                <DialogDescription>Edit the link details.</DialogDescription>
              </DialogHeader>
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
              </TabsContent>
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
              </TabsContent>
              <DialogFooter className="flex justify-between sm:justify-between">
                <TabsList>
                  <TabsTrigger value="params">Parameters</TabsTrigger>
                  <TabsTrigger value="meta">Metadata</TabsTrigger>
                </TabsList>
                <DialogClose asChild>
                  <Button type="submit" className="ml-auto">
                    Save
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Tabs>
        </form>
      </Form>
    </Dialog>
  );
}
