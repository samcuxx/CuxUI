import React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp, ChevronsUpDown } from "lucide-react";

interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  striped?: boolean;
  hoverable?: boolean;
  bordered?: boolean;
  compact?: boolean;
}

const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ className, striped, hoverable, bordered, compact, ...props }, ref) => {
    return (
      <div
        className={cn(
          "w-full overflow-auto",
          bordered && "border border-gray-200 dark:border-[#222F43] rounded-lg",
          className
        )}
      >
        <table
          ref={ref}
          className={cn("w-full caption-bottom text-sm", className)}
          {...props}
        />
      </div>
    );
  }
);
Table.displayName = "Table";

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
));
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "border-t bg-gray-100/50 font-medium dark:bg-[#131C31]/50 [&>tr]:last:border-b-0",
      className
    )}
    {...props}
  />
));
TableFooter.displayName = "TableFooter";

interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  striped?: boolean;
  hoverable?: boolean;
}

const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className, striped, hoverable, ...props }, ref) => (
    <tr
      ref={ref}
      className={cn(
        "border-b transition-colors",
        striped && "even:bg-gray-100/50 dark:even:bg-[#131C31]/50",
        hoverable && "hover:bg-gray-100/50 dark:hover:bg-[#131C31]/50",
        "border-gray-200 dark:border-[#222F43]",
        className
      )}
      {...props}
    />
  )
);
TableRow.displayName = "TableRow";

interface TableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  sortable?: boolean;
  sorted?: "asc" | "desc" | false;
  onSort?: () => void;
}

const TableHead = React.forwardRef<HTMLTableCellElement, TableHeadProps>(
  ({ className, children, sortable, sorted, onSort, ...props }, ref) => (
    <th
      ref={ref}
      className={cn(
        "h-12 px-4 text-left align-middle font-medium text-gray-500 dark:text-[#66768f] [&:has([role=checkbox])]:pr-0",
        sortable && "cursor-pointer select-none",
        className
      )}
      onClick={sortable ? onSort : undefined}
      {...props}
    >
      <div className="flex items-center gap-2">
        {children}
        {sortable && (
          <div className="w-4 h-4">
            {sorted === "asc" && <ChevronUp className="w-4 h-4" />}
            {sorted === "desc" && <ChevronDown className="w-4 h-4" />}
            {!sorted && <ChevronsUpDown className="w-4 h-4 opacity-50" />}
          </div>
        )}
      </div>
    </th>
  )
);
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
    {...props}
  />
));
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-gray-500 dark:text-[#66768f]", className)}
    {...props}
  />
));
TableCaption.displayName = "TableCaption";

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
