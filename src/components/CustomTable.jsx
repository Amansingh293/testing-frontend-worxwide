import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const CustomTable = ({
  caption,
  headers,
  data,
  className,
  rowBodyClass,
  rowHeaderClass,
}) => {
  return (
    <Table className={` ${className}`}>
      {caption && <TableCaption>{caption}</TableCaption>}
      <TableHeader>
        <TableRow className="border-b-[1px] border-[#EAEAEA]">
          {headers.map((header, index) => (
            <TableHead
              key={index}
              className={`${index === 0 ? "rounded-tl-[10px]" : ""} ${
                index === headers.length - 1 ? "rounded-tr-[10px]" : ""
              } ${rowHeaderClass}`}
            >
              {header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, rowIndex) => (
          <TableRow
            key={rowIndex}
            className={`border-b-[1px] border-[#EAEAEA] ${
              rowIndex === data.length - 1 ? "rounded-b-[10px]" : ""
            } ${rowBodyClass}`}
          >
            <TableCell className="p-[11px]">{row.check}</TableCell>
            <TableCell className="p-[11px]">{row.potential}</TableCell>
            <TableCell className="p-[11px]">{row.company}</TableCell>
            <TableCell className="p-[11px]">{row.matchscore}</TableCell>
            <TableCell className="p-[11px]">{row.relevance}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CustomTable;
