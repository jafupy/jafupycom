"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, Plus, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { supabase } from "@/lib/utils";

import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CopyClipboard from "@/components/jaf-ui/copy-clipboard";
import HoldToDeleteButton from "./hold-button";
import { on } from "events";
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
} from "@tanstack/react-query";

export type Link = {
  id: string;

  destination: string;
  shortUrl: string;

  title: string;
  description: string;
};

export default function Page() {
  const [data, setData] = React.useState([]);
  const [newDestination, setNewDestination] = React.useState("");
  const [newShortcut, setNewShortcut] = React.useState("");
  const [newTitle, setNewTitle] = React.useState("");
  const [newDescription, setNewDescription] = React.useState("");
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });
  const [isPending, setIsPending] = React.useState(true);
  React.useEffect(() => {
    async function getData() {
      const { data, error } = await supabase.from("links").select("*");

      if (error) {
        console.error(error);
      } else {
        setIsPending(false);
        setData(
          data.map((link) => {
            const { destination, shortcut, title, description, tags } = link;

            return {
              destination,
              shortcut,
              title,
              description,
              tags,
              setData,
            };
          }),
        );
      }
    }
    getData().catch((error) => console.error(error));
    // console.log(data);
  });

  return (
    <div className="w-full">
      <h1 className="text-5xl">Redirects</h1>
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter links..."
          value={
            (table.getColumn("destination")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("destination")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />

        <NewLinkSheet
          newShortcut={newShortcut}
          setNewShortcut={setNewShortcut}
          newDestination={newDestination}
          setNewDestination={setNewDestination}
          newTitle={newTitle}
          setNewTitle={setNewTitle}
          newDescription={newDescription}
          setNewDescription={setNewDescription}
          setData={setData}
          data={data}
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export function NewLinkSheet({
  newDestination,
  newShortcut,
  newTitle,
  newDescription,
  data,

  setNewDestination,
  setNewShortcut,
  setNewTitle,
  setNewDescription,
  setData,
}) {
  const createNewLink = (data) => {
    async function getData() {
      const { data, error } = await supabase
        .from("links")
        .insert([
          {
            destination: newDestination,
            shortcut: newShortcut,
            title: newTitle,
            description: newDescription,
          },
        ])
        .select("*");
      if (error) {
        console.error(error);
      }
      // console.log("data", typeof data);
      console.table(data);
      setData(
        data.map((link) => {
          const { destination, shortcut, title, description, tags } = link;

          return data?.push({
            destination,
            shortcut,
            title,
            description,
            tags,
            setData,
          });
        }),
      );

      getData().catch((error) => console.error(error));
      // console.log("Successfully created new link");
    }
    getData().catch((error) => console.error(error));
  };
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="default" className="ml-auto mr-4">
          <Plus className="mr-2 h-4 w-4" />
          New link
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>New link</SheetTitle>
          <SheetDescription>Create a new shortened link</SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="shortcut" className="text-right">
              Shortcut
            </Label>
            <div className="col-span-3 flex items-center">
              <span className="mr-1 text-muted-foreground">/r/</span>
              <Input
                id="shortcut"
                value={newShortcut}
                onChange={(event) =>
                  setNewShortcut(
                    event.target.value.toLowerCase().replaceAll(" ", "-"),
                  )
                }
              />
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="destination" className="text-right">
              Destination
            </Label>
            <Input
              id="destination"
              className="col-span-3"
              value={newDestination}
              onChange={(event) =>
                setNewDestination(
                  event.target.value
                    .toLowerCase()
                    .replace("http://", "")
                    .replace("https://", ""),
                )
              }
            />
          </div>
          <hr />
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input id="title" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input id="description" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button
              type="submit"
              onClick={() =>
                createNewLink({
                  newDescription,
                  newDestination,
                  newShortcut,
                  newTitle,
                })
              }
            >
              Create
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export const columns: ColumnDef<Link>[] = [
  // Checkbox column
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: () => <div>Title</div>,
    cell: ({ row }) => <div className="">{row.getValue("title")}</div>,
  },
  {
    accessorKey: "description",
    header: () => <div>Description</div>,
    cell: ({ row }) => <div className="">{row.getValue("description")}</div>,
  },
  {
    accessorKey: "tags",
    header: () => <div>Tags</div>,
    cell: ({ row }) => {
      if (!row.getValue("tags")) {
        return <div />;
      }
      return (
        <div className="flex items-center justify-center rounded-xl border-2  bg-opacity-15 bg-gradient-to-br from-[#65adda]/15 to-[#777ddb]/15 px-1 py-1 text-xs">
          {JSON.parse(row.getValue("tags"))}
        </div>
      );
    },
  },
  {
    accessorKey: "shortcut",
    header: "Short URL",
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("shortcut")}</div>
    ),
  },
  {
    accessorKey: "destination",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Destination
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("destination")}</div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const handleDelete = (e) => {
        (async (e) => {
          // console.log("Row.original: ", row.original.shortcut);

          // e.preventDefault();

          const { error } = await supabase
            .from("links")
            .delete()
            // .select("*")
            .eq("shortcut", row.original.shortcut);
          // .select("*");
          if (error) {
            console.error(error);
          } else {
            // console.log("deleted");
            // console.log("Deleted Data: ", deletedData);

            const { data: newData, error: error2 } = await supabase
              .from("links")
              .select("*");

            if (error2) {
              console.error(error2);
            } else {
              // console.log("New Data: ", newData);
              row.original.setData(
                newData.map((link) => {
                  const { destination, shortcut, title, description, tags } =
                    link;
                  console.log("New Data: ", link);
                  return {
                    destination,
                    shortcut,
                    title,
                    description,
                    tags,
                    setData: row.original.setData,
                  };
                }),
              );
            }
          }
        })(e).catch((error) => console.error(error));
      };
      return (
        <div className="flex items-center justify-center">
          <CopyClipboard
            value={row.getValue("destination")}
            tooltip="Copy link to clipboard"
          />
          <HoldToDeleteButton
            onDelete={handleDelete}
            holdTime={2500}
            buttonProps={{
              variant: "ghost",
            }}
          >
            <Trash2 className="h4 w-4 text-red-500" />
          </HoldToDeleteButton>
        </div>
      );
    },
  },
];
