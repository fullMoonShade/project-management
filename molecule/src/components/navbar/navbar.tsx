"use client"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Menu, Search, Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

const Navbar = () => {
  const { setTheme, theme } = useTheme()

  const navItems = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Projects", href: "/projects" },
    { name: "Tasks", href: "/tasks" },
    { name: "Reports", href: "/reports" },
  ]

  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent hover:text-primary focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>Navigate through your project automation software.</SheetDescription>
            </SheetHeader>
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href} className="block px-2 py-1 text-lg">
                  {item.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="hidden font-bold sm:inline-block">ProjectAuto</span>
        </Link>
        <div className="hidden md:flex md:items-center md:gap-5">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-medium transition-colors hover:text-primary">
              {item.name}
            </Link>
          ))}
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <div className="hidden md:block">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search..." className="pl-8 md:w-[300px] lg:w-[300px]" />
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Theme"
            className="mr-6"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle Theme</span>
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

