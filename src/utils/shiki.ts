import { createHighlighter } from "shiki";
import mangoGrammar from "./mango.json";

export const shiki = await createHighlighter({
  langs: ["go", "javascript", "typescript", "json", mangoGrammar],
  themes: ["poimandres"],
});

export const tokens = shiki.codeToTokens;
