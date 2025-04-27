import { Menu, X, Home, Settings, User, FileText } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-primary-foreground sticky top-0 z-50 w-full">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 font-bold text-lg">Your App Name</div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a
                href="/"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground/10 flex items-center gap-2"
              >
                <Home className="w-4 h-4" />
                Home
              </a>
              <a
                href="/dashboard"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground/10 flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                Dashboard
              </a>
              <a
                href="/profile"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground/10 flex items-center gap-2"
              >
                <User className="w-4 h-4" />
                Profile
              </a>
              <a
                href="/settings"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground/10 flex items-center gap-2"
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
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-primary-foreground/10 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground/10 flex items-center gap-2"
            >
              <Home className="w-4 h-4" />
              Home
            </a>
            <a
              href="/dashboard"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground/10 flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Dashboard
            </a>
            <a
              href="/profile"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground/10 flex items-center gap-2"
            >
              <User className="w-4 h-4" />
              Profile
            </a>
            <a
              href="/settings"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground/10 flex items-center gap-2"
            >
              <Settings className="w-4 h-4" />
              Settings
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
