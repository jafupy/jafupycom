"use server";

import { createServerClient } from "@/utils/supabase/server";

import { MDXRemote } from "next-mdx-remote";
import { toast } from "sonner";

export default async function Page({ params }: { params: { year: string; month: string; id: string } }) {
  const supabase = createServerClient();
  const { data: _data, error } = await supabase.from("blog").select("*").eq("slug", params.id);
  const data = _data[0];
  if (error) {
    toast.error(error.message);
    throw error;
  }

  return (
    <article>
      <h1>{data?.title}</h1>
      <MDXRemote source={data.body} />
    </article>
  );
}
