"use client"; // Required for Shadcn NavigationMenu

import * as React from "react";
import Link from "next/link";
import { destinations } from "@/lib/data"; // Import destination data

import { cn } from "@/lib/utils"; // Utility for conditional classes
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle, // Style for links
} from "@/components/ui/navigation-menu"; // Shadcn Navigation Menu components

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 px-4 py-3 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60 md:px-6">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        {/* Site Title/Logo */}
        <Link href="/" className="mr-6 flex items-center space-x-2">
          {/* Replace with an SVG logo maybe? */}
          <span className="inline-block font-bold text-primary">
            Urlaubsziele
          </span>
        </Link>

        {/* Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList>
            {/* Home Link */}
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Startseite
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* Destinations Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Reiseziele</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {destinations.map((destination) => (
                    <ListItem
                      key={destination.slug}
                      title={destination.name}
                      href={`/destinations/${destination.slug}`}
                    >
                      {/* You could add a short description here if available */}
                      {destination.flightTime} Flugzeit
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Empfehlungen Link */}
            <NavigationMenuItem>
              <Link href="/empfehlungen" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Empfehlungen
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* Add more top-level links here if needed */}
            {/* Example:
             <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Über uns
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            */}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Maybe add other elements like Theme Toggle or User Profile here */}
      </div>
    </header>
  );
}

// Helper component for styling Navigation Menu Links in the dropdown
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-primary">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
