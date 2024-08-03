"use client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  GridFormItem,
  FormLabel,
  FormMessage,
  FormItem,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Plus } from "lucide-react";
import { z } from "zod";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
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

export default function NewLink() {
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

  async function onSubmit(values: z.infer<typeof formSchema>) {
    toast.loading("Creating link...");
    console.log(values);
    const supabase = createClient();
    const { error } = await supabase.from("links").insert([
      {
        shortcut: values.shortcut,
        destination: values.destination,
        title: values.title,
        description: values.description,
        tags: values.tags,
      },
    ]);
    if (error) {
      toast.error("Error creating link", {
        description: (
          <pre>
            <code>{JSON.stringify(error, null, 2)}</code>
          </pre>
        ),
      });
    } else {
      toast.success("Link created", {
        description: (
          <pre>
            <code>{JSON.stringify(values, null, 2)}</code>
          </pre>
        ),
      });
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="">
          <CardHeader className="flex flex-col items-start bg-muted/50">
            <CardTitle className="group flex flex-col items-center gap-2 text-lg">New Link</CardTitle>
            <CardDescription>Create a new /r/ link</CardDescription>
          </CardHeader>
          <ScrollArea>
            <CardContent className=" max-h-[400px]  gap-2 space-y-4 p-6 text-sm">
              <h2 className="col-span-3 font-semibold">Link Parameters</h2>
              <Field
                name="shortcut"
                form={form}
                description={
                  <span>
                    The alias for the link. Eg, /r/<strong>somewhere</strong>
                  </span>
                }
                label={"Shortcut"}
                placeholder="somewhere"
              />
              <Field
                name="destination"
                form={form}
                description={"Where the link points to."}
                label={"Destination"}
                placeholder="www.somewhere.com"
              />
              <Separator className="col-span-3 my-2" />
              <h2 className="col-span-3 font-semibold">Link Metadata</h2>
              <Field
                name="title"
                form={form}
                description={"The title of the link"}
                label={"Title"}
                placeholder="Somewhere"
              />
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem className="col-span-3 pb-4">
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Somewhere is a website placeholder." className="resize-y" {...field} />
                    </FormControl>
                    <FormDescription>What is the destination about?</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </ScrollArea>
          <CardFooter
            className="pr-auto pr -6 flex flex-row items-center border-t bg-muted/50
            py-3"
          >
            <Button variant="destructive" size={"sm"} className="ml-auto mr-2" type="reset">
              Cancel
            </Button>
            <Button variant="outline" type="submit">
              <Plus className="mr-2 h-4 w-4" />
              Create New Link
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}

function Field({ name, form, label, description, placeholder }) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl className="col-span-2 ">
            <Input placeholder={placeholder} {...field} />
          </FormControl>
          <FormDescription className="col-span-3">{description}</FormDescription>
          <FormMessage className="col-span-3" />
        </FormItem>
      )}
    />
  );
}
