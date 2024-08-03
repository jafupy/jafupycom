"use server";
import { CopyToClipboard } from "@/components/jaf-ui/copy-clipboard";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { shiki } from "@/utils/shiki";

const colToClass = {
  "__shade": 300,
  "#5DE4C7": `text-emerald-300`,
  "#5DE4C7C0": "text-emerald-300/75",
  "#A6ACCD": "text-purple-300",
  "#ADD7FF": "text-blue-300",
  "#EFF0FB": "text-slate-300",
  "#EFF0FBD0": "text-slate-300/75",
  "#91B4D5": "text-purple-300/75",
  "#767C9DB0": "text-slate-300/50",
};

export default async function CodeBlock({ children, file, language, lineNos = true, linePrefix, copy = true }) {
  const { tokens } = shiki.codeToTokens(children, {
    lang: language,
    theme: "poimandres",
    transformers: [
      {
        pre(node) {
          this.addClassToHast(node, "p-4 rounded-lg");
        },
        line(node, line) {
          node.properties["data-line"] = line;
        },
        span(node, line, col) {
          const hex = node.properties.style.replace("color:", "");
          this.addClassToHast(node, colToClass[hex]);

          node.properties.style = null;
          node.properties["data-token"] = `token:${line}:${col}`;
        },
      },
    ],
  });
  return (
    <div className="relative max-w-ch-md ">
      <pre class="relative mb-4 mt-6 overflow-visible rounded-lg border bg-slate-950 py-4 text-slate-200 dark:bg-slate-900">
        {copy && (
          <CopyToClipboard
            value={children}
            className="absolute -top-1 right-0 translate-y-[-100%] text-muted-foreground"
            buttonProps={{
              size: "sm",
              variant: "outline",
            }}
          />
        )}
        <span className="col-span-2 flex px-4 text-muted-foreground">
          <span className="">{file}</span>
          <span className="ml-auto ">{language}</span>
        </span>
        <code
          class="grid max-h-[650px] rounded p-4 font-mono text-sm"
          style={{
            gridTemplateColumns:
              lineNos || linePrefix
                ? `${Math.floor(tokens.length / 10) !== 0 ? Math.floor(tokens.length / 10) + 1 : 2}ch auto`
                : `auto`,
          }}
        >
          {tokens.map((line, lineNo) => (
            <>
              <span className="select-none text-slate-200/50" key={lineNo + 354}>
                {linePrefix ? linePrefix : lineNo + 1}
                {/* {lineNo + 1} */}
              </span>
              <span>
                {line.map(token => (
                  <span className={cn(colToClass[token.color], token.color)} key={token.offset}>
                    {token.content}
                  </span>
                ))}
              </span>
            </>
          ))}
        </code>
      </pre>
    </div>
  );
}
