"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";

import EditLink from "./edit-link";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
    header: "Shortcut",
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
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost">
                <Pencil className="h-4 w-4" />
              </Button>
              {/* <span className="sr-only">Edit</span> */}
            </DialogTrigger>
            <DialogContent className="">
              <Tabs defaultValue="params" className="">
                <TabsList className="absolute -left-32 top-1/2 -translate-y-1/2 rotate-90 transform shadow-md">
                  <TabsTrigger value="params">Parameters</TabsTrigger>
                  <TabsTrigger value="meta">Metadata</TabsTrigger>
                </TabsList>
                <DialogHeader>
                  <DialogTitle>Edit Link</DialogTitle>
                  <DialogDescription>Hi</DialogDescription>
                </DialogHeader>
                <EditLink data={row.original} />
              </Tabs>
            </DialogContent>
          </Dialog>
        </div>
      );
    },
  },
];
