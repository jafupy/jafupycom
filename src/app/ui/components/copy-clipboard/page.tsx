import CopyClipboard from "@/components/jaf-ui/copy-clipboard";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code2, Eye } from "lucide-react";

export default function CopyClipboardPage() {
  return (
    <div>
      <h1 className="text-3xl">CopyClipboard</h1>
      <p>
        CopyClipboard is a component that allows you to copy text to the
        clipboard.
      </p>
      <div className="relative flex aspect-[7/3] items-center justify-center gap-4 rounded-xl border-2 border-slate-300 px-16 py-4">
        <Tabs defaultValue="preview" className="w-full">
          <TabsList className="group absolute right-2 top-2  grid  grid-cols-2">
            <TabsTrigger
              value="preview"
              className="flex items-center justify-center gap-2"
            >
              <Eye className=" h-4 w-4" />
              <span className="hidden group-hover:block ">Preview</span>
            </TabsTrigger>
            <TabsTrigger
              value="code"
              className="flex items-center justify-center gap-2"
            >
              <Code2 className=" h-4 w-4" />
              <span className="sr-only  group-hover:not-sr-only">Code</span>
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="preview"
            className="flex items-center justify-center gap-2"
          >
            <p>Hello World</p>
            <CopyClipboard value="Hello World" />
          </TabsContent>
          <TabsContent value="code">
            <pre className="h-full w-full">
              <code className="h-full w-full">hello</code>
            </pre>
          </TabsContent>
        </Tabs>
      </div>
      <h2>Usage</h2>
      <h3>Import</h3>
      use the ShadCn-ui cli to install the following:
      <ul>
        <li>Button</li>
        <li>Toast</li>
      </ul>
      <pre>
        <code>hello</code>
      </pre>
    </div>
  );
}
