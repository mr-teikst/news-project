import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Image from "next/image";

export default function Home() {
  return (
    <>
      Home
      <div className="grid grid-cols-3 grid-rows-2 gap-2">
        <Card className="col-span-2">
          <CardContent>div1</CardContent>
        </Card>
        <Card className="col-start-3">
          <CardContent>div2</CardContent>
        </Card>
        <Card className="row-start-2">
          <CardContent>div3</CardContent>
        </Card>
        <Card className="col-span-2 row-start-2">
          <CardContent>div4</CardContent>
        </Card>
      </div>
      <Pagination>
        <PaginationContent className="flex gap-2">
          <PaginationItem className="bg-custom-primary border border-2 border-black border-solid rounded-md">
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem className="bg-custom-primary border border-2 border-black border-solid rounded-md">
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>

          <PaginationItem className="bg-custom-primary border border-2 border-black border-solid rounded-md">
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem className="bg-custom-primary border border-2 border-black border-solid rounded-md">
            <PaginationEllipsis />
          </PaginationItem>

          <PaginationItem className="bg-custom-primary border border-2 border-black border-solid rounded-md">
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}
