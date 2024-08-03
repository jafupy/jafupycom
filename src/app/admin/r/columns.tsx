"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

import EditLink from "./edit-link";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Link = {
  shortcut: string;
  destination: string;
  title: string;
  description: string;
  tags: { name: string; color: string }[];
};

export const columns: ColumnDef<Link>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
        onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={value => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "shortcut",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Shortcut
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "destination",
    header: "Destination",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  { accessorKey: "description", header: "Description" },
  {
    accessorKey: "tags",
    header: "Tags",
    cell: ({ row }) => {
      if (!row.getValue("tags")) return <span className="text-muted-foreground">No tags</span>;
      return (
        <div className="flex flex-wrap gap-2">
          {row.getValue("tags").map((tag, index) => (
            <Badge key={index} color={tag.color}>
              {tag.name}
            </Badge>
          ))}
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      row;
      return (
        <div className="flex flex-row gap-2">
          <EditLink data={row.original} />
        </div>
      );
    },
  },
];
