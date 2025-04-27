import React from "react";
import Navbar from "./navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow px-4 py-6">
        <div className="container mx-auto">{children}</div>
      </main>
      <footer className="bg-secondary py-4 text-center text-secondary-foreground">
        <p>
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Layout;
