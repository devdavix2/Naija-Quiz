"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
<<<<<<< HEAD
import { Award, Menu, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useState } from "react"
import type { Session } from "next-auth"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { signOut } from "next-auth/react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface NavbarProps {
  user?: Session["user"]
}

export function Navbar({ user }: NavbarProps) {
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

=======
import { Award, Menu, Moon, Sun, BarChart3, Bookmark, Settings, Sparkles } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useStore } from "@/lib/store"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Get offline mode state from store
  const offlineMode = useStore((state) => state.offlineMode)
  const toggleOfflineMode = useStore((state) => state.toggleOfflineMode)

>>>>>>> b170bc7d497abd5c9ab75a10fe29d94abd36d964
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-green-600 flex items-center justify-center">
            <Award className="h-4 w-4 text-white" />
          </div>
          <span className="font-bold text-lg">NaijaSpark Quiz</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <nav className="flex gap-4">
            <Link href="/" className="text-sm font-medium hover:text-green-600 transition-colors">
              Home
            </Link>
<<<<<<< HEAD
            <Link href="/leaderboard" className="text-sm font-medium hover:text-green-600 transition-colors">
              Leaderboard
            </Link>
            <Link href="/community" className="text-sm font-medium hover:text-green-600 transition-colors">
              Community
=======
            <Link href="/generate" className="text-sm font-medium hover:text-green-600 transition-colors">
              Generate
            </Link>
            <Link href="/favorites" className="text-sm font-medium hover:text-green-600 transition-colors">
              Favorites
            </Link>
            <Link href="/statistics" className="text-sm font-medium hover:text-green-600 transition-colors">
              Statistics
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-green-600 transition-colors">
              About
>>>>>>> b170bc7d497abd5c9ab75a10fe29d94abd36d964
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

<<<<<<< HEAD
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.image || undefined} alt={user.name || "User"} />
                      <AvatarFallback>{user.name?.charAt(0) || "U"}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                      {user.name && <p className="font-medium">{user.name}</p>}
                      {user.email && <p className="w-[200px] truncate text-sm text-muted-foreground">{user.email}</p>}
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/recommendations">Recommendations</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="cursor-pointer"
                    onSelect={(event) => {
                      event.preventDefault()
                      signOut({ callbackUrl: "/" })
                    }}
                  >
                    Sign out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button asChild size="sm" className="bg-green-600 hover:bg-green-700">
                <Link href="/api/auth/signin">Sign In</Link>
              </Button>
            )}
=======
            <div className="flex items-center gap-2 ml-2">
              <Switch id="offline-mode" checked={offlineMode} onCheckedChange={toggleOfflineMode} />
              <Label htmlFor="offline-mode" className="text-xs">
                Offline Mode
              </Label>
            </div>
>>>>>>> b170bc7d497abd5c9ab75a10fe29d94abd36d964
          </div>
        </div>

        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col h-full">
                <div className="flex-1">
                  <nav className="flex flex-col gap-4 mt-8">
                    <Link
                      href="/"
<<<<<<< HEAD
                      className="text-lg font-medium hover:text-green-600 transition-colors"
=======
                      className="text-lg font-medium hover:text-green-600 transition-colors px-2 py-1 block"
>>>>>>> b170bc7d497abd5c9ab75a10fe29d94abd36d964
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Home
                    </Link>
                    <Link
<<<<<<< HEAD
                      href="/leaderboard"
                      className="text-lg font-medium hover:text-green-600 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Leaderboard
                    </Link>
                    <Link
                      href="/community"
                      className="text-lg font-medium hover:text-green-600 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Community
                    </Link>

                    {user && (
                      <>
                        <Link
                          href="/profile"
                          className="text-lg font-medium hover:text-green-600 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Profile
                        </Link>
                        <Link
                          href="/recommendations"
                          className="text-lg font-medium hover:text-green-600 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Recommendations
                        </Link>
                      </>
                    )}
                  </nav>
                </div>

                <div className="py-4">
                  <div className="flex items-center justify-between">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                      aria-label="Toggle theme"
                    >
                      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                      <span className="ml-2">{theme === "dark" ? "Light" : "Dark"} mode</span>
                    </Button>
                  </div>

                  {user ? (
                    <div className="mt-4">
                      <div className="flex items-center gap-2 mb-4">
                        <Avatar>
                          <AvatarImage src={user.image || undefined} alt={user.name || "User"} />
                          <AvatarFallback>{user.name?.charAt(0) || "U"}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="text-sm text-muted-foreground">{user.email}</p>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => {
                          signOut({ callbackUrl: "/" })
                          setIsMenuOpen(false)
                        }}
                      >
                        Sign out
                      </Button>
                    </div>
                  ) : (
                    <Button
                      className="w-full mt-4 bg-green-600 hover:bg-green-700"
                      onClick={() => setIsMenuOpen(false)}
                      asChild
                    >
                      <Link href="/api/auth/signin">Sign In</Link>
                    </Button>
                  )}
=======
                      href="/generate"
                      className="text-lg font-medium hover:text-green-600 transition-colors px-2 py-1 block flex items-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Sparkles className="h-4 w-4 mr-2" /> Generate
                    </Link>
                    <Link
                      href="/favorites"
                      className="text-lg font-medium hover:text-green-600 transition-colors px-2 py-1 block flex items-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Bookmark className="h-4 w-4 mr-2" /> Favorites
                    </Link>
                    <Link
                      href="/statistics"
                      className="text-lg font-medium hover:text-green-600 transition-colors px-2 py-1 block flex items-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <BarChart3 className="h-4 w-4 mr-2" /> Statistics
                    </Link>
                    <Link
                      href="/about"
                      className="text-lg font-medium hover:text-green-600 transition-colors px-2 py-1 block flex items-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Settings className="h-4 w-4 mr-2" /> About
                    </Link>
                  </nav>
                </div>

                <div className="py-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <Button
                      variant="ghost"
                      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                      aria-label="Toggle theme"
                      className="w-full justify-start"
                    >
                      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 mr-2" />
                      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 mr-2" />
                      <span>{theme === "dark" ? "Light" : "Dark"} mode</span>
                    </Button>
                  </div>

                  <div className="flex items-center justify-between px-2">
                    <Label htmlFor="mobile-offline-mode">Offline Mode</Label>
                    <Switch id="mobile-offline-mode" checked={offlineMode} onCheckedChange={toggleOfflineMode} />
                  </div>
>>>>>>> b170bc7d497abd5c9ab75a10fe29d94abd36d964
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

