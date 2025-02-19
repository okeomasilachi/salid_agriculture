"use client";

import Link from "next/link";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const isActiveUrl = (href: string) => {
  const currentPath =
    typeof window !== "undefined" &&
    window.location.pathname + window.location.hash;
  const hrefPath = href.startsWith("/") ? href : "/" + href;
  return currentPath === hrefPath;
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  console.log(isMobileMenuOpen);
  const navItems = [
    { label: "About Us", href: "/#about" },
    { label: "Products", href: "/#products" },
    { label: "Quality Control", href: "/#quality" },
    { label: "Team", href: "/#team" },
    { label: "Career", href: "/career" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact" },
  ];
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-white border-b border-gray-200 fixed w-full top-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 container">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex-shrink-0 flex items-center">
              <Image src="/logo.png" alt="Logo" width={40} height={40} />
              <span className="ml-2 text-xl font-bold text-gray-900">
                Salid Agriculture
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Discover</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md text-gray-700 hover:text-gray-900 hover:bg-green-50"
                            href="/"
                          >
                            <Image
                              src="/logo.png"
                              alt="Logo"
                              width={100}
                              height={100}
                            />
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Salid Agriculture
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Sustainably grow and provide high-quality produce
                              while supporting local communities.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <ListItem
                        className="text-gray-700 hover:text-gray-900 hover:bg-green-50"
                        href="/#about"
                        active={isActiveUrl("#about")}
                        title="About Us"
                      >
                        we are dedicated to transforming agriculture with
                        cutting-edge practices and unparalleled quality
                      </ListItem>
                      <ListItem
                        className="text-gray-700 hover:text-gray-900 hover:bg-green-50"
                        active={isActiveUrl("#quality")}
                        href="/#quality"
                        title="Quality Control"
                      >
                        Fresh from the Farm to Your Table
                      </ListItem>
                      <ListItem
                        className="text-gray-700 hover:text-gray-900 hover:bg-green-50"
                        href="/#team"
                        active={isActiveUrl("#team")}
                        title="Team"
                      >
                        Every step of our process is carefully monitored to
                        ensure the highest quality standards
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                {navItems.slice(4).map((item) => (
                  <NavigationMenuItem key={item.label}>
                    <ListItem active={isActiveUrl(item.href)} href={item.href}>
                      {item.label}
                    </ListItem>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> & { active?: boolean }
>(({ className, title, children, active, ...props }, ref) => {
  return (
    <li className="relative">
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground px-3 py-2 text-sm font-medium text-gray-700 hover:text-black hover:bg-green-50",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
            <div
              className={cn(
                "absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transition-transform duration-300 bg-green-600",
                active && "scale-x-100"
              )}
            />
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
