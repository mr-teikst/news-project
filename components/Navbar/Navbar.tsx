import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";

export default function Navbar() {
  return (
    <>
      <div className="z-10 fixed flex-col px-2 py-1 top-0  h-24 w-full bg-custom-primary border border-2 border-black border-solid rounded-b-sm">
        <div className="flex justify-between items-center">
          <Label className="font-bold text-3xl">{"NEWSHUB :)"}</Label>
          <div className="w-1/3 flex items-center">
            <Input className="w-full h-8 rounded-md border-2 border-black border-solid ring-0 outline-0 focus-visible:ring-0 focus-visible:ring-offset-0" />
            <Button className="bru-btn h-8 bg-white">
              <Filter size={32} />
            </Button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <NavigationMenu className="">
            <NavigationMenuList className="gap-6 font-bold">
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="text-md hover:bg-transparent hover:underline underline underline-offset-4"
                  href="/"
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="text-md hover:bg-transparent hover:underline underline-offset-4"
                  href="/about"
                >
                  Sport
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="text-md hover:bg-transparent hover:underline underline-offset-4"
                  href="/about"
                >
                  Health
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      <div className="h-24"></div>
      <div className="px-3 py-2">
        <Breadcrumb>
          <BreadcrumbList className="font-bold">
            <BreadcrumbItem>
              <BreadcrumbLink
                className="text-md hover:bg-transparent hover:underline underline-offset-4"
                href="/"
              >
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/shadcn/components/breadcrumb">
                Components
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </>
  );
}
