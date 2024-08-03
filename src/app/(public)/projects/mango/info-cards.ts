type InfoCard = {
  title: string;
  subtext: string;
  description: string;
  wikipedia: string;
  id: string;
};

export default [
  {
    id: "shadowing",
    title: "Variable shadowing",
    subtext: "a variable in an inner scope hiding an identically named variable in an outer scope",
    description:
      "In computer programming, variable shadowing occurs when a variable declared within a certain scope (decision block, method, or inner class) has the same name as a variable declared in an outer scope. At the level of identifiers (names, rather than variables), this is known as name masking.",
    wikipedia: "https://en.wikipedia.org/wiki/Variable_shadowing",
  },
];
