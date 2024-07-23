"use client";
import { login } from "./actions";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";
import { UserCheck2 } from "lucide-react";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export default function LoginPage() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    login(values).then(
      () =>
        toast("Logged in successfully", {
          icon: <UserCheck2 className="h-4 w-4" />,
        }),
      (err) =>
        toast("An error occurred while logging in. ", { description: err }),
    );
  }

  return (
    <Card className="w-full max-w-[350px]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Login to your account</CardDescription>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="hi@jafupy.com"
                      type="email"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="••••••••••••"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button type="submit">Login</Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
