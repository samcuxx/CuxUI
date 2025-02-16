"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "@/components/ui/Table";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

// Sample data
const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
    lastActive: "2 hours ago",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "User",
    status: "Inactive",
    lastActive: "1 day ago",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "Editor",
    status: "Active",
    lastActive: "5 minutes ago",
  },
  {
    id: 4,
    name: "Alice Brown",
    email: "alice@example.com",
    role: "User",
    status: "Active",
    lastActive: "1 hour ago",
  },
];

export default function TablesPage() {
  const [sortConfig, setSortConfig] = React.useState<{
    key: string;
    direction: "asc" | "desc" | false;
  }>({ key: "", direction: false });

  const handleSort = (key: string) => {
    setSortConfig((current) => ({
      key,
      direction:
        current.key === key
          ? current.direction === "asc"
            ? "desc"
            : current.direction === "desc"
            ? false
            : "asc"
          : "asc",
    }));
  };

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl font-bold text-[#101010] dark:text-[#94A9C9] mb-4">
          Tables
        </h1>
        <p className="text-gray-500 dark:text-[#66768f] mb-8">
          Flexible table components for displaying structured data.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-semibold text-[#101010] dark:text-[#94A9C9] mb-4">
          Simple Table
        </h2>
        <Table>
          <TableCaption>A basic table example.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.slice(0, 3).map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#101010] dark:text-[#94A9C9] mb-4">
          Advanced Table
        </h2>
        <Table bordered>
          <TableHeader>
            <TableRow>
              <TableHead
                sortable
                sorted={
                  sortConfig.key === "name" ? sortConfig.direction : false
                }
                onSort={() => handleSort("name")}
              >
                Name
              </TableHead>
              <TableHead
                sortable
                sorted={
                  sortConfig.key === "email" ? sortConfig.direction : false
                }
                onSort={() => handleSort("email")}
              >
                Email
              </TableHead>
              <TableHead
                sortable
                sorted={
                  sortConfig.key === "role" ? sortConfig.direction : false
                }
                onSort={() => handleSort("role")}
              >
                Role
              </TableHead>
              <TableHead
                sortable
                sorted={
                  sortConfig.key === "status" ? sortConfig.direction : false
                }
                onSort={() => handleSort("status")}
              >
                Status
              </TableHead>
              <TableHead>Last Active</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id} hoverable>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Badge
                    variant={user.status === "Active" ? "success" : "secondary"}
                  >
                    {user.status}
                  </Badge>
                </TableCell>
                <TableCell>{user.lastActive}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={6}>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500 dark:text-[#66768f]">
                    Showing {users.length} of {users.length} entries
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" disabled>
                      Previous
                    </Button>
                    <Button variant="outline" size="sm" disabled>
                      Next
                    </Button>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#101010] dark:text-[#94A9C9] mb-4">
          Striped Table
        </h2>
        <Table bordered>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id} striped>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Badge
                    variant={user.status === "Active" ? "success" : "secondary"}
                  >
                    {user.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </div>
  );
}
