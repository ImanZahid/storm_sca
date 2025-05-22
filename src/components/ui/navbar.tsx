import { Menu, X, Home, Settings, User, FileText } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-primary text-primary-foreground sticky top-0 z-50 w-full">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <div className="flex-shrink-0 font-bold text-lg">App Name</div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <a
                  href="/"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground/10 flex items-center gap-2 transition-colors duration-200"
                >
                  <Home className="w-4 h-4" />
                  Home
                </a>
                <a
                  href="/dashboard"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground/10 flex items-center gap-2 transition-colors duration-200"
                >
                  <FileText className="w-4 h-4" />
                  Dashboard
                </a>
                <a
                  href="/profile"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground/10 flex items-center gap-2 transition-colors duration-200"
                >
                  <User className="w-4 h-4" />
                  Profile
                </a>
                <a
                  href="/settings"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground/10 flex items-center gap-2 transition-colors duration-200"
                >
                  <Settings className="w-4 h-4" />
                  Settings
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md hover:bg-primary-foreground/10 focus:outline-none transition-colors duration-200"
              >
                <div className="relative w-6 h-6">
                  <Menu
                    className={`absolute h-6 w-6 transition-all duration-300 ${
                      isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                    }`}
                  />
                  <X
                    className={`absolute h-6 w-6 transition-all duration-300 ${
                      isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 backdrop-blur-sm bg-black/20 z-40 md:hidden transition-all duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-primary text-primary-foreground z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-primary-foreground/20">
          <div className="font-bold text-lg">App Name</div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-md hover:bg-primary-foreground/10 transition-colors duration-200"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="py-4">
          <nav className="space-y-2 px-4">
            <a
              href="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium hover:bg-primary-foreground/10 transition-colors duration-200 group"
            >
              <Home className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              <span>Home</span>
            </a>
            <a
              href="/dashboard"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium hover:bg-primary-foreground/10 transition-colors duration-200 group"
            >
              <FileText className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              <span>Dashboard</span>
            </a>
            <a
              href="/profile"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium hover:bg-primary-foreground/10 transition-colors duration-200 group"
            >
              <User className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              <span>Profile</span>
            </a>
            <a
              href="/settings"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium hover:bg-primary-foreground/10 transition-colors duration-200 group"
            >
              <Settings className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              <span>Settings</span>
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
